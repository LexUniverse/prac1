import logo from './logo(2).svg';
import './defaultpage.css';

function Homepage() {
  return (
    <div> 
        <div className="bodypage">

            <div className="textcols">
                <div className="textcols-item">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>Welcome to the</p>
                </div>
                <div className="textcols-item">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>HOME PAGE</p>
                </div>
                <div className="textcols-item">
                    <img src={logo} className="App-lo   go" alt="logo"/>
                    <p>of my site</p>
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
        </div>
    </div>

  );
}

export default Homepage;
