import React, {useState} from 'react';

export default function TabWindow(){

    const [activeTab, setActiveTab] = useState("Playlists");

    const renderContent = () => {
      switch (activeTab) {
        case 'Playlists':
          return (
            <div id="playlists" className="tabcontent">
              <h3>Playlists</h3>
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
              <h3>Personal</h3>
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
            <h3>Playlists</h3>
          </button>
          <button
            className={`tablinks ${activeTab === 'Personal' ? 'active' : ''}`}
            onClick={() => setActiveTab('Personal')}>
            <h3>Personal</h3>
          </button>
        </div>
        {renderContent()}
      </>
    );
}