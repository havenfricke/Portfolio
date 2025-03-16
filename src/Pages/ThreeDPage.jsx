import React, { useState } from 'react';
import ModelViewer from '../Components/ModelViewer';


function ThreeDPage() {
  // Array of model paths
  const models = [
    '/Portfolio/low_poly_starter_humanoid _TestA.obj',
    '/Portfolio/low_poly_starter_humanoid _TestB .obj',
    '/Portfolio/low_poly_starter_humanoid.obj'
  ];

  const [currentModelIndex, setCurrentModelIndex] = useState(0);

  const handleNext = () => {
    setCurrentModelIndex((prev) => (prev + 1) % models.length);
  };

  const handlePrev = () => {
    setCurrentModelIndex((prev) => (prev - 1 + models.length) % models.length);
  };

  return (
    <section className="three-d-page">
      <ModelViewer  modelPath={models[currentModelIndex]}/>
        <div className="model-viewer-nav">
            <button className='back-viewer-nav' onClick={handlePrev}>&#8592; &nbsp; Back</button>
                <span> {currentModelIndex + 1} / {models.length}</span>
            <button className='next-viewer-nav' onClick={handleNext}>Next &nbsp; &#8594;</button>
        </div>
        <div className='model-viewer-info'>
            Please use my models responsibly &nbsp; &#8594;
            <a href={models[currentModelIndex]}>&nbsp;&nbsp; download {models[currentModelIndex].replace("/Portfolio/", "")}</a>
        </div>
    </section>
  );
}

export default ThreeDPage;
