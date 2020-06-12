import React from 'react';
import './About.css';
import photo from './about_dev.jpeg';
import Button from '../Button/Button';

const About = ({ changeRoute }) => (
    <section className='about'>
        <section className='about__image'>
            <img src={photo} alt='Alessandra y su Abuela'/>
        </section>
        <section className='about__text'>
            <h1>Conocenos</h1>
            <p>Exercitation eu officia voluptate ipsum sint Lorem amet. Ut dolore ipsum in magna sint duis veniam sint anim exercitation tempor deserunt. Ipsum officia adipisicing nulla elit adipisicing exercitation consequat ipsum non sit cupidatat. Mollit enim veniam nulla incididunt ut irure velit ea ipsum minim velit dolore. Cupidatat esse laboris pariatur fugiat aute exercitation. Officia laboris anim qui exercitation proident sint ut occaecat ex consectetur.</p>

            <h2>La Receta de la Abuela</h2>
            <p>Exercitation eu officia voluptate ipsum sint Lorem amet. Ut dolore ipsum in magna sint duis veniam sint anim exercitation tempor deserunt. Ipsum officia adipisicing nulla elit adipisicing exercitation consequat ipsum non sit cupidatat. Mollit enim veniam nulla incididunt ut irure velit ea ipsum minim velit dolore. Cupidatat esse laboris pariatur fugiat aute exercitation. Officia laboris anim qui exercitation proident sint ut occaecat ex consectetur.</p>

            <section className='about__CTA'><Button id='contact' changeRoute={changeRoute} content='Contactanos!'/></section>

        </section>
    </section>
)

export default About;