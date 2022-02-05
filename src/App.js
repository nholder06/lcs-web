import './App.css';
import logo from './assets/LCS-logo.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <h1>Left Coast Standard</h1>
        <a
          className="App-link"
          href="https://docs.google.com/document/d/1nJpkJJVUK-3MIiwyIOMhvmsy6IZpAwPUrlo4H80gkT0/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Menu
        </a>
      </header>
    </div>
  );
}

export default App;
