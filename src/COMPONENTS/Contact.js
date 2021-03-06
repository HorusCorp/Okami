import React from 'react'
import emailjs from 'emailjs-com';
// installer emailjs npm install emailjs-com --save


export default function Contact() {
 


  function sendEmail(e) {
    
    e.preventDefault();
    
    //recuperation des infos ('email services', 'email template' et ton 'user Id dans ton account')
    emailjs.sendForm('smtp_server', 'template_9z9W5xfD', e.target, 'user_7KR033XElGoFAFDzhs796')
    
      .then((result) => {
          
          console.log(result.text);
          handleSubmit()
      }, (error) => {
          console.log(error.text);
      });
  }

  
  

  const handleSubmit = () =>{
    document.getElementById('message').value = ''
    document.getElementById('email').value = ''
    document.getElementById('name').value = ''
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label style={{display:'none'}}>Nom</label>
    {/* dans ton email template tu dois mettre le name {{user_name}}... */}
      <input id='name' type="text" name="user_name"    placeholder='Votre Nom'/>
      <label style={{display:'none'}}>Email</label>
      <input id='email' type="email" name="user_email" placeholder='Votre Email' />
      <label style={{display:'none'}}>message</label>
      <textarea id='message' name="message"  placeholder='Votre message ici ...' />
      <input  className='submit-btn' type="submit" value="Envoyez" />
    </form>
  );
}
