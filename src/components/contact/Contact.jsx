import "./contact.css";
import Phone from "../../img/icons8-phone-50.png";
import Email from "../../img/icons8-email-open-50.png";
import Address from "../../img/icons8-address-50.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";


const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
 
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_s3uvglu",
        "template_3v5nih4",
        formRef.current,
        "user_DrriDPTGKO2Zj4RDXCA6W"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's connect!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              720.985.9184
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              morrow.austin5@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Denver, CO
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            I would love to connect if the right project comes along!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="5" placeholder="Message" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;