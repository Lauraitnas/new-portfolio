import React from "react";

import "../contact/contact.css"

function Contact() {

    return(
        <div className="contact" id="contact">
                <div className="form">
                    <form action="https://formspree.io/f/xknyoola" method="post">
                    <h3 className="getintouch">Have a question or want to work together?</h3>
                    <div className="form-item">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name"></input>
                    </div> 
                    <div className="form-item">
                        <label for="email">Email</label>
                        <input type="text" id="email" name="email"></input>
                    </div>
                    <div className="form-item">
                        <label for="message">Message</label>
                        <textarea id="message" name="message"></textarea>
                    </div>
                    <div className="form-item">
                        <button type="submit"> Submit!</button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Contact