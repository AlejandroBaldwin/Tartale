import React from 'react';
import Logo from '../Logo/Logo';
import Title from '../Title/Title';
import Links from '../Links/Links';
import BackDrop from '../BackDrop/BackDrop';
import './NavigationPanel.css'

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
            </div>

            {/* Backdrop */}

            <BackDrop click={clickBackdrop} backdrop={backdrop}/>


        </div>
    )
}

export default NavigationPanel;