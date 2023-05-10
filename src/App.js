import Homepage from './pages/homepage.components/homepage.component';
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import React from 'react';
import './App.css';


const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);


function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route exact path = '/' Component={Homepage} />
        <Route path='/hats' Component={HatsPage} />
      </Routes>
     </BrowserRouter>
    </div>
  
  );
}

export default App;



