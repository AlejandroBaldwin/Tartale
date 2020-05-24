import React from 'react';
import './Item.css'

const Item = ({ source, alt, key }) => {
    return (<img key={key} className='img-card' src={source} alt={alt} />)
}

export default Item