import React, { Component } from 'react';
import NavigationPanel from '../components/NavigationPanel/NavigationPanel';
import Scroll from '../components/Scroll/Scroll';
import ItemList from '../components/ItemList/ItemList';
import imgs from '../img/img';
import './App.css';



class App extends Component{

  constructor() {
    super()
    this.state = {
      sideMenu: 'closed',
      backdrop: 'invisible',
    }
  }

  onToggleButtonClick = () => {
    this.setState({sideMenu: 'open', backdrop: 'visible'})
  }

  onBackDropClick = () => {
    this.setState({sideMenu: 'closed', backdrop: 'invisible'})
  }

  render() {
    return (
      <div className='container'>
        <NavigationPanel clickButton={this.onToggleButtonClick} sideMenu={this.state.sideMenu} backdrop={this.state.backdrop} clickBackdrop={this.onBackDropClick}/>
        <Scroll >
          <ItemList imgs={imgs}/>
        </Scroll>
      </div>
    )
  }
}

export default App;
