import React, { useState } from 'react';
import '../App.css';

function CallAPI02() {
  
  const [title, setTitle] = useState('Calling Node Server for API 2 - Return ID');
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/getMockAPI_2")
      .then((res) => res.json())
      .then((data) => setData(data.id));
  }, []);

  return (
    <div className="App">
      <h2>{title}</h2>
      <p>{!data ? "Loading...Wait..." : data}</p>
    </div>
  );
}

export default CallAPI02;