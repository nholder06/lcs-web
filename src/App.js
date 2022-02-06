import './App.css';
import logo from './assets/LCS-logo.jpg';

function App() {
  const onMenuClick = e => {
    e.preventDefault();
    let count = 0;
    count++;
    console.log('Clicked ' + count + ' times.');
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <h1>Left Coast Standard</h1>
        {/* <a
          className="App-link"
          href="https://docs.google.com/document/d/1nJpkJJVUK-3MIiwyIOMhvmsy6IZpAwPUrlo4H80gkT0/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Menu
        </a> */}
        <div>
          <button
            className="Menu-button"
            type="button"
            onClick={
              // e.preventDefault();
              onMenuClick
              // ("window.location.href = 'http://google.com';");
            }
          >
            View Menu
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
