import React from 'react';
import Styles from '../styles/Contact.module.css';

const Contact = () => {
  return ( <div className={Styles.formContainer}>
    <form action="/submit" method="post" className={Styles.form}>
      <h2 className={Styles.heading}>Contact Us</h2>
      
      <div className={Styles.formGroup}>
        <label htmlFor="name" className={Styles.label}>Name:</label>
        <input type="text" id="name" name="name" required className={Styles.input} />
      </div>
      
      <div className={Styles.formGroup}>
        <label htmlFor="email" className={Styles.label}>Email:</label>
        <input type="email" id="email" name="email" required className={Styles.input} />
      </div>
      
      <div className={Styles.formGroup}>
        <label htmlFor="message" className={Styles.label}>Message:</label>
        <textarea id="message" name="message" rows="4" required className={Styles.textarea}></textarea>
      </div>
      
      <button type="submit" className={Styles.button}>Submit</button>
    </form>
    </div>
  );
}

export default Contact;
