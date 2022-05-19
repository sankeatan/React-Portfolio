import React, { useState } from 'react';
import './App.scss';
import About from './views/about'
import Contributions from './views/contributions'
import Technologies from './views/technologies';
import NavBar from './NavBar';

export default function App() {
  
  const [currentView, setCurrentView] = useState('About')

  const renderView = () => {
    // eslint-disable-next-line default-case
    switch (currentView) {
      case 'About':
        return (<About key='about'/>)
      case 'Contributions':
        return (<Contributions key='contributions'/>)
      case 'Technologies':
        return (<Technologies key='technologies'/>)
    }
  };

  const handleViewChange = (view) => setCurrentView(view);

  return (
    <div className='main-container'>
      <div className='view'>
      {renderView()}
      </div>
      <NavBar
        currentView={currentView}
        handleViewChange={handleViewChange}/>
    </div>
  );
}
