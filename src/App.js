import {  Route,Routes} from 'react-router-dom';
import React from 'react';
import './App.css';

import Homepage from './pages/homepage.components/homepage.component';
import ShopPage from './pages/homepage.components/shop/shop.component';
import Header from './components/menu-item/header component/header.component';



function App() {
  return (
    <div>
      <Header/>
        
          <Routes>
            <Route exact path = '/' Component={Homepage} />
            <Route path='/shop' Component={ShopPage} />
          </Routes>
        
    </div>
  
  );
}

export default App;



