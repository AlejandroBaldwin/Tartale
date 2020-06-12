import React from 'react';
import './Item.css';

const Item = ({ source, alt, id, onDessertClick, description }) => {
    return (<div>
        <img id={id} key={id} className='img-card' src={source} alt={alt} onClick={onDessertClick} description={description}/>
        
    </div>)
}

export default Item