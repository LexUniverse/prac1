import logo from './logo(2).svg';
import './homepage.css';
import Headder from './headercomponent';
import { Link } from 'react-router-dom';
import ContactCard from './contactcard';

const contactslist = [
  {id: 1, netname: 'Telegram', tag: '@lexuniverse' }, 
  {id: 2, netname: 'VK', tag: '@impartialman' }, 
  {id: 3, netname: 'WhatsApp', tag: '@alex' }, 
];


function Contactspage() {
  return (
    <div>
        <Headder />
        <div className="App-header">
          <div className='textcols'>
          {contactslist.map(contact => (
            <div className='textcols-item'>
          <ContactCard key={contact.id} netname={contact.netname} tag={contact.tag}/>
          </div>
        ))}
          </div>
                    <Link to='/'>Home page</Link>
                    <Link to='/contacts'>Contacts</Link>
                    <Link to='/about'>About page</Link>
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

export default Contactspage;
