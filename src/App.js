import {  Route,Routes} from 'react-router-dom';
import React from 'react';
import './App.css';

import Homepage from './pages/homepage.components/homepage/homepage.component';
import ShopPage from './pages/homepage.components/shop/shop.component';
import Header from './components/menu-item/header component/header.component';
import SignInAndSignUpPage from './pages/homepage.components/sign-in-and-sign-up/sign-in-and-sign-up';
import {auth} from './firebase/firebase.utils';


class App extends React.Component {
  constructor (){
    super();

    this.state = {
      currentUser : null
    }
  }

  unsubscibeFromAuth = null;

  componentDidMount(){
    this.unsubscibeFromAuth=auth.onAuthStateChanged(user =>{
      this.setState({currentUser: user});
       
    });
  }

  componentWillUnmount(){
    this.unsubscibeFromAuth();
  }


  render (){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
          
            <Routes>
              <Route exact path = '/' Component={Homepage} />
              <Route path='/shop' Component={ShopPage} />
              <Route path='/signin' Component={SignInAndSignUpPage} />
              
            </Routes>
          
      </div>
    
    );
  }
  
}

export default App;



