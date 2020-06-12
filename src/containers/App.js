import React, { Component } from 'react';
import NavigationPanel from '../components/NavigationPanel/NavigationPanel';
import Scroll from '../components/Scroll/Scroll';
import ItemList from '../components/ItemList/ItemList';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Contact from '../components/Contact/Contact';
import DessertDescription from '../components/DessertDescription/DessertDescription'
import imgs from '../img/img';
import './App.css';



class App extends Component{

  constructor() {
    super()
    this.state = {
      sideMenu: 'closed',
      backdrop: 'invisible',
      route: 'home',
      dessertIsShowing: 'invisible',
      dessert: ''
    }
  }

  changeRoute = (event) => {
    this.setState({
      route: event.target.id,
      sideMenu: 'closed',
      backdrop: 'invisible',
      dessertIsShowing: 'invisible'
    })
  }

  onToggleButtonClick = () => {
    this.setState({sideMenu: 'open', backdrop: 'visible'})
  }

  onBackDropClick = () => {
    this.setState({sideMenu: 'closed', backdrop: 'invisible', dessertIsShowing: 'invisible'})
  }

  onDessertClick = (event) => {
    this.setState({dessertIsShowing: 'visible', dessert: [event.target.src, event.target.id, event.target.alt, event.target.description]})
    console.log(event.target.description)
  }

  render() {

    const { route, dessertIsShowing, dessert } = this.state;
    const changeRoute = this.changeRoute;
    const onDessertClick = this.onDessertClick;

    return (
      <div className='container'>
        <NavigationPanel clickButton={this.onToggleButtonClick} sideMenu={this.state.sideMenu} backdrop={this.state.backdrop} clickBackdrop={this.onBackDropClick} changeRoute={changeRoute}/>
        <Scroll >
          { route === 'home' 
            ? <ItemList imgs={imgs} onDessertClick={onDessertClick} modalState={dessertIsShowing}/>
            : route === 'about'
              ?  <About changeRoute={changeRoute}/>
              : route === 'services'
                ? <Services changeRoute={changeRoute}/>
                : <Contact />
          }
          <DessertDescription src={dessert[0]} id={dessert[1]} alt={dessert[2]} modalState={dessertIsShowing} description={dessert[3]} changeRoute={changeRoute} clickBackdrop={this.onBackDropClick}/>
        </Scroll>
      </div>
    )
  }
}

export default App;
