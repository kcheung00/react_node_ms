import React, { useState, useEffect } from 'react';
import '../App.css';

function CallAPI03() {

  const [title, setTitle] = useState('Direct Calling External API - Return Title');
  const [data, setData] = React.useState(null);
  
    React.useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/todos/1")
      .then((res) => res.json())
      .then((data) => setData(data.title));
  }, []);

  return (
    <div className="App">
      <h2>{title}</h2>
      <p>{!data ? "Loading...Wait..." : data}</p>
    </div>
  );
}
    
export default CallAPI03;