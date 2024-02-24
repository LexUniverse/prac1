import logo from './logo(2).svg';
import './homepage.css';
import Headder from './headercomponent'
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div>
        <Headder />
        <div className="App-header">

            <div className="textcols">
                <div className="textcols-item">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>i want this text on the left</p>
                    <Link to='/'>Home page</Link>
                </div>
                <div className="textcols-item">
                    <p>THIS IS HOME PAGE</p>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <Link to='/contacts'>Contacts</Link>
                </div>
                <div className="textcols-item">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>and this one on the right</p>
                    <Link to='/about'>About page</Link>
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
