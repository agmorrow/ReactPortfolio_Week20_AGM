import "./contact.css";
import Phone from "../../img/icons8-phone-50.png";
import Email from "../../img/icons8-email-open-50.png";
import Address from "../../img/icons8-address-50.png";
import React, {useRef} from "react";
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
 
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_s3uvglu', 'template_t18bqkw', form.current, 'O5h-T0liyMIsf2Pzc')
    .then((result) => {
        alert(result.text);
    }, (error) => {
        alert(error.text);
    });
};

  return (
    <div className="contact">
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Let's connect!</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <img src={Phone} alt="" className="contact-icon" />
              720.985.9184
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src={Email} alt="" />
              morrow.austin5@gmail.com
            </div>
            <div className="contact-info-item">
              <img className="contact-icon" src={Address} alt="" />
              Denver, CO
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-desc">
            Send a message
          </p>
      
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Subject</label>
      <input type="text" name="user_subject" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea  name="message" />
      <input type="submit" value="Send" />
    </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;