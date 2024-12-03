
import './App.css';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import About  from './components/view/About';
import Home from './components/view/Home'; 
import Form from './components/view/Form';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/form' element={<Form/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
