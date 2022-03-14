import React from "react";
import "./App.css";

function App() {

  return (
    <div className="App">
      <h2>React Client + Node Server + Micro-Service Examples</h2>
      <p>React Web Client calls Node Server who calls backend micro-services APIs.</p>
      <h3>Five APIs include here for demonstration purposes </h3>
      <p><a href="/hooks/api1">Mock API 1</a></p>
      <p><a href="/hooks/api2">Mock API 2</a></p>
      <p><a href="/hooks/api3">Mock API 3</a></p>
      <p><a href="/hooks/api4">Mock API 4</a></p>
      <p><a href="/hooks/api5">Mock API 5</a></p>
    </div>
  );

  // const [data, setData] = React.useState(null);
    
  // React.useEffect(() => {
  //   fetch("/hello")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  // React.useEffect(() => {
  //   fetch("/callAPI_1")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  // React.useEffect(() => {
  //   fetch("/callAPI_2")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.message));
  // }, []);

  // React.useEffect(() => {
  //   fetch("/getMockAPI_3")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.title));
  // }, []);

  // React.useEffect(() => {
  //   fetch("/getMockAPI_2")
  //     .then((res) => res.json())
  //     .then((data) => setData(data.id));
  // }, []);

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       {/* <p>{!data ? "Loading...Hello...Fail...." : data}</p> */}
  //       <p>{!data ? "Loading...Hello...Fail...." : data}</p>
  //     </header>
  //   </div>
  // );
}

export default App;
