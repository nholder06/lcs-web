import './App.css';
import LazyLoad from 'react-lazyload';
import logo from './assets/lcs-logo2.jpg';

function App() {
  return (
    <div className="App">
      <div>
        <nav>
          <ul className="nav-bar">
            <li className="nav-item">
              {/* <LazyLoad> */}
              <img src={logo} alt="logo" className="logo-image" />
              {/* </LazyLoad> */}
            </li>
            <li className="nav-item">About</li>
            <li className="nav-item">Menu</li>
            <li className="nav-item">Contact</li>
          </ul>
        </nav>
      </div>
      <header className="App-header"></header>
      <body className="main-body">
        <h1 className="title">Left Coast Standard</h1>
        <h2 className="mission-statement">
          Striving to produce clean products without the use of any chemicals
        </h2>
        <div className="menu-link">
          <a
            // href="https://docs.google.com/document/d/1nJpkJJVUK-3MIiwyIOMhvmsy6IZpAwPUrlo4H80gkT0/edit?usp=sharing"
            href="https://drive.google.com/file/d/1nJpkJJVUK-3MIiwyIOMhvmsy6IZpAwPUrlo4H80gkT0/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Menu
          </a>
        </div>
      </body>
      <div>
        <footer className="footer">
          <p className="footer-content">
            Copyright &copy; 2022 Left Coast Standard.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
