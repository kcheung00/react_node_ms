import React, { useState } from 'react';
import '../App.css';

function CallAPI01() {
  
  const [data, setData] = React.useState(null);
  const [title, setTitle] = useState('Calling Node Server for CDC API 1');

  React.useEffect(() => {
    fetch("/callAPI_1")
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

export default CallAPI01;