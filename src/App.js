import './App.css';

import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Navbar/>
        <LandingPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
