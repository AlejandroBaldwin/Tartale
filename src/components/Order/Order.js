import React from 'react';
import './Order.css';

const Order = () => (
    <ul>
        <li>
            <select id="desserts" name="Productos">
                <option value="Alfajor">Alfajor</option>
                <option value="Brownie">Brownie</option>
                <option value="Pie de Mango">Pie de Mango</option>
                <option value="Cheesecake de Oreo">Cheesecake de Oreo</option>                
            </select>
            <input type='number' placeholder='Cantidad' min="1" max="10"/>
        </li>
    </ul>
)