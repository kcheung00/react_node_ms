import React from 'react';
import './App.css';

function App() {

  return (
    <div className="App">
      <h2>React Client + Node Server + Micro-Service Examples</h2>
      <p>React Web Client calls Node Server who calls backend micro-services APIs.</p>
      <h3>APIs include here for demonstration purposes </h3>
      <p><a href="/hooks/api01">API 1</a></p>
      <p><a href="/hooks/api02">API 2</a></p>
      <p><a href="/hooks/api03">API 3</a></p>
      <p><a href="/hooks/api04">API 4</a></p>
      <h3>React Web Client direct calls backend micro-services APIs.</h3>
      <p>Skip Node Server</p>
      <p><a href="/hooks/api05">External API 5</a></p>
      <p><a href="/hooks/api06">External API 6</a></p>
    </div>
  );
}

export default App;
