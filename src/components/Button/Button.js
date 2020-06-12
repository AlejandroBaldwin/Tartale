import React from 'react';
import './Button.css'

const Button = ({ id, content, changeRoute }) => (
    <button id={id} onClick={changeRoute} className='button'>{content}</button>
)

export default Button;