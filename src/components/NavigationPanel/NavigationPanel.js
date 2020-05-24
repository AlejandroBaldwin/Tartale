import React from 'react';
import './NavigationPanel.css'
import logo from '../../img/logo.jpeg'

const NavigationPanel = () => {
    return(
        /* Navigation Panel Container */
        <div className='navigationContainer'>

            {/* Header Section */}
            <div className='navigationContainerHeader'>
                <img className='logo' alt='' src={logo}/>
                <h1 className='title'>Tartale</h1>
            </div>

            {/* Navigation Links */}
            <div className='navigationContainerLinks'>

            </div>


        </div>
    )
}

export default NavigationPanel;