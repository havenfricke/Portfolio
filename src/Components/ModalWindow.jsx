import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Project } from './Project';

export default function ModalWindow({ modalId, title, children }) {
  // Generate a unique id if none is provided
  const uniqueId = modalId || `modal-${Math.random().toString(36).substr(2, 9)}`;

  // Create refs for modal, trigger, and close elements
  const modalRef = useRef(null);
  const openBtnRef = useRef(null);
  const closeBtnRef = useRef(null);

  useEffect(() => {
    const modal = modalRef.current;
    const openModalBtn = openBtnRef.current;
    const closeBtn = closeBtnRef.current;

    if (!modal || !openModalBtn || !closeBtn) return;

    const openModal = () => {
      modal.style.display = 'block';
    };

    const closeModal = () => {
      modal.style.display = 'none';
    };

    // Attach event listeners
    openModalBtn.addEventListener('click', openModal);
    openModalBtn.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        openModal()
      };
    })

    closeBtn.addEventListener('click', closeModal);
    closeBtn.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        closeModal()
      };
    })

    const outsideClickHandler = (event) => {
      if (event.target === modal) {
        closeModal();
      }
    };

    window.addEventListener('click', outsideClickHandler);

    // Clean up event listeners on unmount
    return () => {
      openModalBtn.removeEventListener('click', openModal);
      openModalBtn.removeEventListener('keydown', openModal);

      closeBtn.removeEventListener('click', closeModal);
      closeBtn.removeEventListener('keydown', closeModal);

      window.removeEventListener('click', outsideClickHandler);
    };
  }, []);

  // The modal overlay rendered into document.body via a portal
  const modalContent = (
    <div ref={modalRef} id={uniqueId} className="modal">
      <div className="modal-content">
        <span ref={closeBtnRef} className="close" tabIndex={0}>&times;</span>
            <Project contentName={title} contentBody={children}/>
      </div>
    </div>
  );

  return (
    <>
      {/* The trigger remains in the regular tree */}
      <div className='view-project-button' ref={openBtnRef} id={`${uniqueId}-trigger`} style={{ cursor: 'pointer' }} title='View' tabIndex={0}>
        View {title}
      </div>

      {/* Render modal using a portal */}
      {ReactDOM.createPortal(modalContent, document.body)}
    </>
  );
}
