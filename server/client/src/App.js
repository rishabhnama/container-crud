import logo from "./logo.svg";
import "./App.css";

function App() {
  console.log(`Name: ${process.env.REACT_APP_NAME}`);
  console.log(`Name: ${process.env.REACT_APP_FIRSTNAME}`);
  console.log(`Name: ${process.env.REACT_APP_LASTNAME}`);
  console.log(`Name: ${process.env.REACT_APP_AGE}`);
  console.log(`Name: ${process.env.REACT_APP_STATE}`);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Name: {process.env.REACT_APP_NAME}</p>
        <p>Name: {process.env.REACT_APP_FIRSTNAME}</p>
        <p>Name: {process.env.REACT_APP_LASTNAME}</p>
        <p>Name: {process.env.REACT_APP_AGE}</p>
        <p>Company: {process.env.REACT_APP_STATE}</p>
      </header>
    </div>
  );
}

export default App;
