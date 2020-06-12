import React from 'react';
import Button from '../Button/Button'
import './Services.css';

const Services = ({ changeRoute }) => (
    <section className='services'>
        <header className='services__header'>
            <h1>Servicios</h1>
            <p>Pariatur laborum deserunt reprehenderit fugiat cupidatat ullamco Lorem. Labore velit est nisi duis ipsum ipsum incididunt proident officia laborum. Officia amet ad est culpa sunt magna cupidatat sint sint incididunt. Tempor elit Lorem non commodo excepteur ex adipisicing et commodo. Est est adipisicing Lorem eu deserunt ullamco elit culpa incididunt ex. Labore pariatur deserunt quis ipsum ad in excepteur aliqua pariatur amet mollit. Ex ipsum fugiat aliqua consectetur amet velit duis.</p>
        </header>

        <section className='services__services'>

            <section className='services__services__container'>
                <img className='services__services__container__img' alt='' />
                <h2 className='services__services__container__header'>Servicio</h2>
                <p className='services__services__container__description'>In sunt cupidatat aute magna. Tempor voluptate ipsum irure ex enim irure commodo. Aliquip sunt cillum elit pariatur nulla dolore tempor nisi aute qui velit. Tempor veniam sint ea laborum. Ipsum magna est tempor laboris ea. Est laborum esse voluptate mollit fugiat esse officia consequat ad. Duis duis est ex eu nostrud reprehenderit esse ipsum sint dolor adipisicing minim velit.</p>
                <section className='services__services__container__CTA'><Button id='contact' changeRoute={changeRoute} content='Has tu Pedido!'/></section>
            </section>

            <section className='services__services__container'>
                <img className='services__services__container__img' alt='' />
                <h2 className='services__services__container__header'>Servicio</h2>
                <p className='services__services__container__description'>In sunt cupidatat aute magna. Tempor voluptate ipsum irure ex enim irure commodo. Aliquip sunt cillum elit pariatur nulla dolore tempor nisi aute qui velit. Tempor veniam sint ea laborum. Ipsum magna est tempor laboris ea. Est laborum esse voluptate mollit fugiat esse officia consequat ad. Duis duis est ex eu nostrud reprehenderit esse ipsum sint dolor adipisicing minim velit.</p>
                <section className='services__services__container__CTA'><Button id='contact' changeRoute={changeRoute} content='Has tu Pedido!'/></section>
            </section>

            <section className='services__services__container'>
                <img className='services__services__container__img' alt='' />
                <h2 className='services__services__container__header'>Servicio</h2>
                <p className='services__services__container__description'>In sunt cupidatat aute magna. Tempor voluptate ipsum irure ex enim irure commodo. Aliquip sunt cillum elit pariatur nulla dolore tempor nisi aute qui velit. Tempor veniam sint ea laborum. Ipsum magna est tempor laboris ea. Est laborum esse voluptate mollit fugiat esse officia consequat ad. Duis duis est ex eu nostrud reprehenderit esse ipsum sint dolor adipisicing minim velit.</p>
                <section className='services__services__container__CTA'><Button id='contact' changeRoute={changeRoute} content='Has tu Pedido!'/></section>
            </section>

        </section>
    </section>
);

export default Services