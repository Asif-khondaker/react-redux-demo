import React from 'react';
import { Provider } from 'react-redux'
import  store  from './redux/store'
import './App.css';
import CakeContainer from './components/CakeContainer';
import { HooksCakeContainer } from './components/HooksCakeContainer';
import IceCremeContainer from './components/iceCremeContainer'
import { HooksIceCremeContainer } from './components/HooksIceCremeContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <ItemContainer cake/>
        <ItemContainer/>
        <HooksCakeContainer/>
      <CakeContainer/>
      <IceCremeContainer/>
      <HooksIceCremeContainer/>
      <NewCakeContainer/> */}
      <UserContainer/>
      
      
      </div>
    </Provider>
    
  );
}

export default App;
