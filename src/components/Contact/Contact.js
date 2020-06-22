import React from 'react';
import './Contact.css';
import TextInput from '../TextInput/TextInput';
import icons from '../../img/social-media';
const facebook = icons[0];
const instagram = icons[1];
const whatsapp = icons[2];

const Contact = () => (
    <section className='contact'>
        <h1 className='contact__header'>Contactanos</h1>
        <p className='whatsapp'>Mandanos un whatsapp al: 913049629 <span><img className='contact__social-media__icon whatsapp' src={whatsapp.src} alt={whatsapp.alt} id={whatsapp.id} /></span><br />O envianos un correo y nos pondremos en contacto contigo lo mas pronto posible.</p>
        <form className='contact__form'>
            <TextInput  type='text' hint='Nombre'/>
            <TextInput  type='text' hint='Apellidos'/>
            <TextInput  type='email' hint='E-mail'/>
            <TextInput  type='tel' hint='Telefono'/>
            <textarea className='contact__form__textarea'/>
            <TextInput type='submit' value='Enviar'/>
        </form>
        <section className='contact__social-media__container'>
            <h2 className='contact__social-media__header'>Redes Sociales:</h2>
            <section className='contact__social-media__icons'>
                <a href='#'><img className='contact__social-media__icon' src={facebook.src} alt={facebook.alt} id={facebook.id}/></a>
                <a href='https://www.instagram.com/tartale.decasa/' target='blank'><img className='contact__social-media__icon' src={instagram.src} alt={instagram.alt} id={instagram.id}/></a>
            </section>

        </section>
    </section>
)

export default Contact;