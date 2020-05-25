import React from 'react';
import Logo from '../Logo/Logo';
import Title from '../Title/Title';
import './NavigationPanel.css'

const NavigationPanel = () => {
    return(
        /* Navigation Panel Container */
        <div className='navigationContainer'>

            {/* Header Section */}
            <div className='navigationContainerHeader'>
                <Logo />
                <Title />
            </div>

            {/* Navigation Links */}
            <div className='navigationContainerLinks'>
                <ul className='link-list'>
                    <li className="link-list-items"><a>Home</a></li>
                    <li className="link-list-items"><a>Conócenos</a></li>
                    <li className="link-list-items"><a>Servicios</a></li>
                    <li className="link-list-items"><a>Contacto</a></li>
                </ul>
            </div>


        </div>
    )
}

export default NavigationPanel;