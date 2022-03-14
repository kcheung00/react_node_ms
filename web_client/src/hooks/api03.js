import React, { useState, useEffect } from 'react';
import '../App.css';

function CallAPI03() {

  const [title, setTitle] = useState('Calling Node Server for API 3 - Return Title');
  const [data, setData] = React.useState(null);
  
    React.useEffect(() => {
    fetch("/getMockAPI_3")
      .then((res) => res.json())
      .then((data) => setData(data.title));
  }, []);

  // useEffect(() => {
  //   setTitle(`The new articles of ${year}`);
  // });

  return (
    <div className="App">
      <h2>{title}</h2>
      <p>{!data ? "Loading...Wait..." : data}</p>
    </div>
  );
}
    
export default CallAPI03;