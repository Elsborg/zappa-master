import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../style/bookingform.css';

// This component represents a form for booking a table at a restaurant. It imports the necessary dependencies, including
// the 'emailjs' library for sending emails and the 'bookingform.css' file for styling.
const BookingForm = () => {
    // Declare a reference to the form element and state variables for each form input field
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState(new Date().toISOString().slice(11, 16));

   // This function is called when the form is submitted. It uses the 'emailjs' library to send the form data as an email.
  // After the email is sent, it resets the state variables for the form input fields.
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_u1h5j1r', 'template_a5gps5w', form.current, 'EI72jMG17i1brmtGR')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          setName('')
          setEmail('')
          setGuests('')
          setPhone('')
          setDate(new Date().toISOString().slice(0, 10))
          setTime(new Date().toISOString().slice(11, 16))

      };
  
  // The form element is rendered, with each form input field controlled by a corresponding state variable. The 'onSubmit'
  // event is handled by the 'sendEmail' function.
  return (
    <form ref={form} onSubmit={sendEmail}>
        <legend style={{fontSize: '16px', fontWeight: '300', textTransform: 'uppercase'}}>Bord bestilling</legend>
      <label>
        Navn:
        <input
          type="text"
          value={name}
          name="user_name"
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Dit navn"
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          name="user_email"
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Din e-mail adresse"
        />
      </label>
      <label>
        Tlf:
        <input
          type="tel"
          value={phone}
          name="user_phone"
          onChange={(e) => setPhone(e.target.value)}
          required
          placeholder="+45 12345678"
        />
      </label>
      <label>
        Antal gæster:
        <input
          type="number"
          value={guests}
          name="user_guests"
          onChange={(e) => setGuests(e.target.value)}
          required
          placeholder="f. eks. 2"
        />
      </label>
      <label>
        Dato:
        <input
          type="date"
          value={date}
          name="user_date"
          onChange={(e) => setDate(e.target.value)}
          required
          min={new Date().toISOString().slice(0, 10)}
        />
      </label>
      <label>
        Klokkeslæt:
        <input
          type="time"
          value={time}
          name="user_time"
          onChange={(e) => setTime(e.target.value)}
          required
          min={new Date().toISOString().slice(11, 16)}
        />
      </label>
      <button className='form-button' type="submit">Reserver bord</button>
    </form>
  );
}




export default BookingForm