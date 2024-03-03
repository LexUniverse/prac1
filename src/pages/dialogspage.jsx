import './dialogspage.css';
import DialogsList from '../components/dialoglist';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const chatlist = [
    {id: 1, name: 'Роман Диффи'}, 
    {id: 2, name: 'Никита'}, 
    {id: 3, name: 'Дима'}, 
    {id: 4, name: 'Решка'}, 
  ];



function Dialogspage() {
    const {dialogId} = useParams();
    const selectedDialog = chatlist.find((dialog) => dialog.id === parseInt(dialogId));

  return (
    <div>
        <div className='bodypage'>
            <div className='dialogspage'>
                <div className='dialogsList'>
                    {chatlist.map( dialog => (
                        <div className='dialog'>
                            <Link to={'/dialogs/'+ dialog.id}><DialogsList key ={dialog.id}name={dialog.name}></DialogsList></Link>
                        </div>
                    ))}
                </div>
                <div className='messages'>
                    <p>{dialogId == 0 && <div className='activename'>Выберите диалог</div>}</p>
                    <p>{selectedDialog && <div className='activename'>{selectedDialog.name}</div>}</p>
                    <div className="message"></div>
                    <div className="message"></div>
                    <div className="message"></div>
                </div>
            </div>
        </div>
    </div>

  );
}

export default Dialogspage;
