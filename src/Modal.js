import { useForm, ValidationError } from '@formspree/react';
import clover from './clover.png'

function Modal() {
    const [state, handleSubmit] = useForm("mvolyyyl");
    
    if (state.succeeded) {
        return (
        alert('Спасибо! Мы свяжемся с вами в течение 15 минут!')
    )}
        return (
            <form onSubmit={handleSubmit}>
            <label htmlFor="tel"></label>
            <input id="tel" type="tel" name="tel" placeholder='Ваш номер телефона...'/>
            <textarea id="message" name="message" placeholder='Ваше имя...'/>
        <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}/>
        <button type="submit" disabled={state.submitting}>
        <img src={clover} alt='pic' width='50px'/>
            Забронировать
        </button>
    </form>
);
}

export default Modal;