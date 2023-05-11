import { BrowserRouter, Route,Routes} from 'react-router-dom';
import React from 'react';
import './App.css';

import Homepage from './pages/homepage.components/homepage.component';
import ShopPage from './pages/homepage.components/shop/shop.component';



function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route exact path = '/' Component={Homepage} />
        <Route path='/shop' Component={ShopPage} />
      </Routes>
     </BrowserRouter>
    </div>
  
  );
}

export default App;



