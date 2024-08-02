import React from "react";
import Styles from "../styles/Contact.module.css";
import { useState } from "react";



const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [msg, setmsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, msg);
    const data = {name, email, msg};
    fetch("http://localhost:3000/api/postcontact/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data=>{
      console.log('Success:',data);
      // console.log('before alert');
      alert("Thanks for contacting us.")
      // console.log('after alert');
      setname('')
      setmsg('')
      setemail('')
      
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setname(e.target.value);
    } else if (e.target.name === "email") {
      setemail(e.target.value);
    } else if (e.target.name === "msg") {
      setmsg(e.target.value);
    }
    // console.log(e, "change");
  };

  return (
    <div className={Styles.formContainer}>
      <form onSubmit={handleSubmit} method="post" className={Styles.form}>
        <h2 className={Styles.heading}>Contact Us</h2>

        <div className={Styles.formGroup}>
          <label htmlFor="name" className={Styles.label}>
            Name:
          </label>
          <input
            type="text"
            value={name}
            onChange={handleChange}
            id="name"
            name="name"
            required
            className={Styles.input}
          />
        </div>

        <div className={Styles.formGroup}>
          <label htmlFor="email" className={Styles.label}>
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={handleChange}
            id="email"
            name="email"
            required
            className={Styles.input}
          />
        </div>

        <div className={Styles.formGroup}>
          <label htmlFor="message" className={Styles.label}>
            Message:
          </label>
          <textarea
            value={msg}
            id="message"
            onChange={handleChange}
            name="msg"
            rows="4"
            // required
            className={Styles.textarea}
          />
        </div>

        <button type="submit" className={Styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
