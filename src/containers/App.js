import React from 'react';
import NavigationPanel from '../components/NavigationPanel/NavigationPanel';
import Scroll from '../components/Scroll/Scroll';
import ItemList from '../components/ItemList/ItemList';
import imgs from '../img/img';
import './App.css';



function App() {

  return (
    <div className='container'>
      <NavigationPanel />
      <Scroll >
        <ItemList imgs={imgs}/>
      </Scroll>
    </div>
  )
}

export default App;
