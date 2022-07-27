import logo from "./logo.svg";
import "./App.css";

function App() {
  console.log(`Name: ${process.env.REACT_APP_NAME}`);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Name: {process.env.REACT_APP_NAME}</p>
        <p>Company: {process.env.REACT_APP_COMPANY}</p>
      </header>
    </div>
  );
}

export default App;
