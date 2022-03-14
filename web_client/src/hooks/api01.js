import React, { useState } from 'react';
import '../App.css';

function CallHelloAPI() {
  
  const [data, setData] = React.useState(null);
  const [title, setTitle] = useState('Calling Node Server for Hello API');

  React.useEffect(() => {
    fetch("/hello")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  

  return (
    <div className="App">
      <h2>{title}</h2>
      <p>{!data ? "Loading...Wait..." : data}</p>
    </div>
  );
}

export default CallHelloAPI;