import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import ProjectArchive from './pages/ProjectArchive';
import './App.css';

function App() {
  const [view, setView] = useState('home');

  useEffect(() => {
    if (typeof document === 'undefined') return undefined;

    const className = 'app-lock-scroll';
    const body = document.body;

    if (view === 'home') {
      body.classList.add(className);
    } else {
      body.classList.remove(className);
    }

    return () => body.classList.remove(className);
  }, [view]);

  return (
    <div className="app-shell">
      <div className="cursor-spotlight" />
      {view === 'home' ? (
        <Home onViewArchive={() => setView('archive')} />
      ) : (
        <ProjectArchive onBack={() => setView('home')} />
      )}
    </div>
  );
}

export default App;
