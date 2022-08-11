import React, { useRef } from 'react';
import './contact.css';
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../context';

const Contact = () => {
//using useRef hoot to get our form data
const formRef = useRef();
const [done, setDone] = useState(false);
const theme = useContext(ThemeContext);
const darkMode = theme.state.darkMode;

//function to handle form submission
const handleSubmit = (e) => {
    e.preventDefault();  //to prevent refreshing of the page after submitting
    
    emailjs.sendForm('service_f19knos', 
    'template_rd05pe9', 
    formRef.current, 
    'Wh8lNr9UPRpPS-q_v')
    .then((result) => {
        console.log(result.text);
        setDone(true);
        handleClear();
    }, (error) => {
        console.log(error.text);
    }); 

}

const handleClear = () => {
    formRef.current.reset();
}

  return (
    <div className='c'>
       <div className="c-bg"></div>
       <div className="c-wrapper">
           <div className="c-left">
               <h1 className="c-title">Let's discuss your project</h1>
               <div className="c-info">
                   <div className="c-info-item">
                       <img src={Phone} 
                       alt=""
                        className="c-icon" />
                        +234 8933 0920
                   </div>
                   <div className="c-info-item">
                       <img src={Email} 
                       alt=""
                        className="c-icon" />
                        contact@BBDev.ng
                   </div>
                   <div className="c-info-item">
                       <img src={Address} 
                       alt=""
                        className="c-icon" />
                        20, Chevron Drive, Lagos, Nigeria.
                   </div>

               </div>
           </div>
           <div className="c-right">
               <p className="c-desc">
                   <b>What's your story</b> Get in touch. Always 
                   available for frelancing if the right project comes along me.
               </p>
               <form ref={formRef} onSubmit={handleSubmit}>
                   <input style={{backgroundColor: darkMode && "#333"}} type="text"placeholder='Name' name="user_name"/>
                   <input style={{backgroundColor: darkMode && "#333"}} type="text"placeholder='Subject' name="user_subject"/>
                   <input style={{backgroundColor: darkMode && "#333"}} type="text"placeholder='Email' name="user_email"/>
                <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder='Message' name="message" />
                <button>Submit</button>
                {done && "Thanks for your feedback"}
               </form>
           </div>
       </div>
    </div>
  )
}

export default Contact
