import './navigation.css';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className='Navig'>
            <div className='navigationList'> 
                <div className='navigationItem'><Link to='/'>Home page</Link></div>
                <div className='navigationItem'><Link to='/contacts'>Contacts</Link></div>
                <div className='navigationItem'><Link to='/dialogs/0'>Dialogs page</Link></div>
            </div>
        </div>
    );
}

export default Navigation