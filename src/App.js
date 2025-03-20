import React, { useState } from 'react';
import './App.css';
import LeftPanel from './components/LeftPanel';
import HubView from './components/HubView';
import ZoomView from './components/ZoomView';

function App() {
  const [zoomArea, setZoomArea] = useState(null);

  return (
    <div className="app">
      <LeftPanel />
      <div className="main-content">
        <HubView zoomArea={zoomArea} />
        <ZoomView setZoomArea={setZoomArea} />
      </div>
    </div>
  );
}

export default App;