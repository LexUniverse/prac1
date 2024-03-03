import './App.css';
import Homepage from './pages/homepage.jsx';
import { Route, Routes } from 'react-router-dom';
import Contactspage from './pages/contactspage.jsx';
import Dialogspage from './pages/dialogspage.jsx';

function App() {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/contacts' element={<Contactspage/>}/>
        <Route path="/dialogs/:dialogId" element={<Dialogspage/>} />
        </Routes>
    </div>

  );
}

export default App;
