import React from 'react';
import './TextInput.css';

const TextInput = ({ type, hint, value }) => (
    <input className={`text-input-${type}`} value={value} type={type} placeholder={hint}/>
)

export default TextInput