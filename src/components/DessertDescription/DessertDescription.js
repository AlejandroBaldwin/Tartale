import React from 'react';
import './DessertDescription.css';
import Button from '../Button/Button';

const DessertDescription = ({ src, id, alt, modalState, description, changeRoute, clickBackdrop }) => (
    <section className={`dessert-description ${modalState}`} onClick={clickBackdrop}>
        <section className='dessert-description__container'>
            <section className='dessert-description__container__contents'>
                <h1>{description}</h1>
                <img className='dessert-description__container__img' src={src} id={id} key={id} alt={alt} />
                <p className='dessert-description__container__description'>Veniam ipsum enim aute et voluptate ad nulla consequat anim. Incididunt pariatur mollit amet consequat tempor elit occaecat eu. Magna deserunt aliqua laborum  veniam.</p>
                <section className='dessert-description__container__CTA'><Button id='contact' content='Haz tu Pedido!' changeRoute={changeRoute} /></section>
            </section>
        </section>
    </section>
)

export default DessertDescription;