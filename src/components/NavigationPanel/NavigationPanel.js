import React from 'react';
import Logo from '../Logo/Logo';
import Title from '../Title/Title';
import Links from '../Links/Links';
import './NavigationPanel.css'

const NavigationPanel = () => {
    return(
        /* Navigation Panel Container */
        <div className='navigationContainer'>

            <div className='toolbar'>
                <div className='toolbar-hamburger'>
                    <div className='toolbar-harmburger-bar'></div>
                    <div className='toolbar-harmburger-bar'></div>
                    <div className='toolbar-harmburger-bar'></div>
                </div>

                <div className="spacer"></div>

                <div className='toolbar-title'><Title /></div>            
            </div>

            {/* Side menu */}

            <div className='side-menu'>
                {/* Header Section */}
                <div className='navigationContainerHeader'>
                    <Logo />
                    <Title />
                </div>

                {/* Navigation Links */}
                <div className='navigationContainerLinks'>
                    <Links />
                </div>
            </div>

            


        </div>
    )
}

export default NavigationPanel;