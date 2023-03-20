import "./App.css";
// import { useState } from react

function App() {
  function uploadHandler() {
    console.log("uploading");
  }

  return (
    <div className="App">
      <input type="file" onChange=""></input>
      <input type="submit" value="upload" onChange={uploadHandler} />
    </div>
  );
}

export default App;
