import './defaultpage.css';
import ContactCard from '../components/contactcard';

const contactslist = [
  {id: 1, netname: 'Telegram', tag: '@lexuniverse' }, 
  {id: 2, netname: 'VK', tag: '@impartialman' }, 
  {id: 3, netname: 'WhatsApp', tag: '@alex' }, 
];

function Contactspage() {
  return (
    <div>
        <div className="bodypage">
          <div className='textcols'>
          {contactslist.map(contact => (
            <div className='textcols-item'>
          <ContactCard key={contact.id} netname={contact.netname} tag={contact.tag}/>
          </div>
        ))}
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

export default Contactspage;
