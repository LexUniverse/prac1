import './styleheader.css';
import img from './musicworldlogo.png'
function Headder() {
    return (
        <div className='headerOut'> 
            <header>
                <a href="localhost:3000" align="left"><img className="logo" src={img} alt='Логотип' /></a>
                <h1> Мир музыки - by Music Lovers for Music Lovers </h1>
            </header>
        </div>
    );
}

export default Headder