import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className="contact">
        <h1 className='heading'>{"<Contact />"}</h1>
         <form className="contact__form" action="https://formspree.io/f/mldengqw" method="POST">
                <input type="text" placeholder="Name" name="name" required />
                <input type="email" placeholder="Email" name="_replyto" required />
                <textarea placeholder="Message" name="message" required></textarea>
                <button>Send</button>
        </form>
    </div>
  )
}

export default Contact
