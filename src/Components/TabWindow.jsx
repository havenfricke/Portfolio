import React, {useState} from 'react';

export default function TabWindow(){

    const [activeTab, setActiveTab] = useState("Playlists");

    const renderContent = () => {
      switch (activeTab) {
        case 'Playlists':
          return (
            <div id="playlists" className="tabcontent">
              <h4>Playlists</h4>
              <div>
                <p>
                    playlists body
                </p>
              </div>
            </div>
          );
        case 'Personal':
          return (
            <div id="personal" className="tabcontent">
              <h4>Personal</h4>
              <div>
                <p>
                    playlists body
                </p>
              </div>
            </div>
          );
        default:
          return null;
      }
    };
  
    return (
      <>
        <div className="tab">
          <button
            className={`tablinks ${activeTab === 'Playlists' ? 'active' : ''}`}
            onClick={() => setActiveTab('Playlists')}>
            <h4>Playlists</h4>
          </button>
          <button
            className={`tablinks ${activeTab === 'Personal' ? 'active' : ''}`}
            onClick={() => setActiveTab('Personal')}>
            <h4>Personal</h4>
          </button>
        </div>
        {renderContent()}
      </>
    );
}