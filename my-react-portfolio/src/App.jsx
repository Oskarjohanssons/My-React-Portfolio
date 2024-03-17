import React, { useState } from 'react';
import Portfolio from './Portfolio'; 
import './App.css';

function App() {
  const [showProjects, setShowProjects] = useState(false);

  const handleShowProjects = () => {
    setShowProjects(true);
  };

  return (
    <div className="app-wrapper">
      <header>
        <h1></h1>
      </header>
      <main className="main-content">
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Oskar Portfolio</h2>
              {!showProjects && (
                <button className="btn btn-primary" onClick={handleShowProjects}>
                  Visa GitHub-projekt
                </button>
              )}
              {showProjects && <Portfolio />} {}
            </div>
          </div>
        </div>
      </main>
      <footer>
        <p></p>
      </footer>
    </div>
  );
}

export default App;
