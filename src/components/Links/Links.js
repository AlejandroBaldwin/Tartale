import React from 'react';
import './Links.css'

const Links = ({ changeRoute }) => {
    return(
        <ul className='link-list'>
            <li id="home" className="link-list-items" onClick={changeRoute}>Home</li>
            <li id="about"  className="link-list-items" onClick={changeRoute}>Conócenos</li>
            <li id="services" className="link-list-items" onClick={changeRoute}>Servicios</li>
            <li id="contact" className="link-list-items" onClick={changeRoute}>Contacto</li>
        </ul>
    )
}

export default Links