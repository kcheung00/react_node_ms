import React, { useState } from 'react';
import '../App.css';

function CallAPI05() {
  
  const [title, setTitle] = useState('Direct Calling External API - Return ID');
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("https://api.riteaid.com/digital/vaccine-provider/states/schedules/NV.ndjson")
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

export default CallAPI05;