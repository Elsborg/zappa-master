import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../style/bookingform.css';


const BookingForm = () => {
  const form = useRef();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [guests, setGuests] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState(new Date().toISOString().slice(11, 16));

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingDetails = `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Guests: ${guests}
      Date: ${date}
      Time: ${time}
    `;

    alert(bookingDetails);
  }

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