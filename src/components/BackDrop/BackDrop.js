import React from 'react';
import './BackDrop.css'

const BackDrop = ({ click, backdrop }) => {
    return(
        <div onClick={click} className={`backdrop ${backdrop}`}>

        </div>
    )
}

export default BackDrop