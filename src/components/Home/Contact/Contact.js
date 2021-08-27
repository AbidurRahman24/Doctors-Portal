import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section className="contact my-5 py-5">
           <div className="container">
               <div className="section-header text-center text-white mb-5">
                    <h5 className="text-primary">Contact</h5>
                    <h1>Always  connect with us</h1>
               </div>
               <div className="col-md-9 mx-auto">
                   <form action="">
                       <div className="form-group p-3">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group p-3">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group p-3">
                           <textarea name="" className="form-control" id="" cols="10" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group text-center p-3">
                           <button type="button" className="btn btn-primary contact-button"> Submit </button>
                       </div>
                   </form>
               </div>
           </div>
       </section>
    );
};

export default Contact;