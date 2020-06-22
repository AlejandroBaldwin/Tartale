import React from 'react';
import Logo from '../Logo/Logo';
import Title from '../Title/Title';
import Links from '../Links/Links';
import BackDrop from '../BackDrop/BackDrop';
import './NavigationPanel.css'
import icons from '../../img/social-media';
const facebook = icons[0];
const instagram = icons[1];

const NavigationPanel = ({ clickButton, sideMenu, backdrop, clickBackdrop, changeRoute}) => {
    return(
        /* Navigation Panel Container */
        <div className='navigationContainer'>

            <div className='toolbar'>
                <button className='toolbar-hamburger' onClick={clickButton}>
                    <div className='toolbar-harmburger-bar'></div>
                    <div className='toolbar-harmburger-bar'></div>
                    <div className='toolbar-harmburger-bar'></div>
                </button>

                <div className="spacer"></div>

                <div className='toolbar-title'><Title /></div>            
            </div>

            {/* Side menu */}

            <div className={`side-menu ${sideMenu}`}>
                {/* Header Section */}
                <div className='navigationContainerHeader'>
                    <Logo />
                    <Title />
                </div>

                {/* Navigation Links */}
                <div className='navigationContainerLinks'>
                    <Links changeRoute={changeRoute}/>
                </div>

                <section className='nav-social-media__icon'>
                    <a href='#'><img className='contact__social-media__icon' src={facebook.src} alt={facebook.alt} id={facebook.id}/></a>
                    <a href='https://www.instagram.com/tartale.decasa/' target='blank'><img className='contact__social-media__icon' src={instagram.src} alt={instagram.alt} id={instagram.id}/></a>
                </section>
            </div>

            {/* Backdrop */}

            <BackDrop click={clickBackdrop} backdrop={backdrop}/>


        </div>
    )
}

export default NavigationPanel;