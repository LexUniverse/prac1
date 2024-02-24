import './App.css';
import Homepage from './components/homepage.jsx';
import About from './components/about.jsx';
import { Route, Routes } from 'react-router-dom';
import Contactspage from './components/contacts.jsx';

function App() {
  return (
    <div>
        <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/' element={<Homepage />} />
        <Route path='/contacts' element={<Contactspage/>}/>
        </Routes>
    </div>

  );
}

export default App;
