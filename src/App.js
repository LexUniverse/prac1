import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
        <header className="App-header">

            <div className="textcols">
                <div className="textcols-item">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>i want this text on the left</p>
                </div>
                <div className="textcols-item">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p> Welcome to my first practice work</p>
                </div>
                <div className="textcols-item">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>and this one on the right</p>
                </div>
            </div>
            <a
                className="App-link"
                href="https://vk.com/impartialman"
                target="_blank"
                rel="noopener noreferrer"
            >
                My VK
            </a>
        </header>
    </div>

  );
}

export default App;
