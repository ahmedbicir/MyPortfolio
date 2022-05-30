import React from 'react'
import emailjs from 'emailjs-com';

function ContactUs() {
    const sendEmail = (e) => {
        e.preventDefault();
    

        emailjs.sendForm('service_p0varxr', 'template_b0sj21i', e.target, 'DUL6ZjYRV9lwcfJ1I')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        let magac=document.querySelector('#jina').value
        let magac_label=document.querySelector('#name')

        let mailing=document.querySelector('#mailing').value
        let mail_label=document.querySelector('#emails')

        let phone=document.querySelector('#phone').value
        let tel_label=document.querySelector('#tel')

        let message=document.querySelector('#area').value
        let message_label=document.querySelector('#message')
        let empty=document.querySelector('#pa')



        if(magac=='')
        {
            magac_label.innerHTML="enter magac"
          
        }
        else if(mailing=='')
        {
            mail_label.innerHTML="enter mail"
        }
        else if(phone=='')
        {
            tel_label.innerHTML="enter phone"
        }
  
        else if(message=='')
        {
            message_label.innerHTML="enter message"
        }
//   else if(magac=='' ||mailing=='' || phone=='' ||message==''){
// empty.innerHTML=" you left en empty field"

//   }
  else{
    empty.innerHTML=" your message have been received"
    e.target.reset()
  }
 

    }
    return (
        <div className="head" id="ContactUs">
            <section className="all">
                <h1 className="do">Message me</h1>
                <section className="contact_container">
                    <div class="contact_icons">
                        <div class="row">
                            <i class="fa fa-user" aria-hidden="true"></i>
                            <div class="info">
                                <div class="head">Name</div>
                                <div class="sub-title">Ahmed Bicir</div>
                            </div>

                        </div>
                        <div class="row">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            <div class="info">
                                <div class="head">Phone</div>
                                <div class="sub-title">+254740333023</div>
                            </div>


                        </div>
                        <div class="row">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            <div class="info">
                                <div class="head">Address</div>
                                <div class="sub-title">Nairibi,Eastleigh</div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fa fa-envelope"></i>
                            <div class="info">
                                <div class="head">Email</div>
                                <div class="sub-title">ahmedbicir2@gmail.com</div>
                            </div>
                        </div>
                    </div>

                    <section className="form" id="talk">
                        <div>
                            <h3 className="get">Get in <span>Touch</span></h3>
                            <p>For any information or help about website you can contact with me. </p>
                            <p> would love to hear from you!</p>
                        </div>
                        <form onSubmit={sendEmail}>
                             
                         <div class="inputBox">
                                <input type="text" placeholder="name"/>
                                <input type="email" placeholder="email"/>
                         </div> 

                            <div class="inputBox">
                                <input type="number" placeholder="number"/>
                                <input type="text" placeholder="location"/>
                            </div> 

                        <textarea placeholder="write message" name="" id="" cols="30" rows="10"/>

                        <input type="submit" value="Submit" class="btn"/>
                              {/* <div className="cont1">
                               
                                     
                                <div>
                                <label id='name'></label>
                                <br/>
                                    <input type="text" name="Name" placeholder="Enter Name " id='jina' /><br/>
                               
                                </div>

                                <div>
                                <label id='emails'></label>
                                <br/>
                                <input type="email" name="Email" placeholder="Enter your email " id='mailing'/>
                            
                                  
                                </div>

                                <div>
                                <label id='tel'></label>
                                <br/>
                                     <input type="text" name="Phone" placeholder=" Enter your Phone " id='phone' />
                                   
                                  
                                </div>
                                <div>
                            
                                    <label id='name' id="message"></label>
                                    <br/>
                                    <textarea name="Message" placeholder="Message" id='area'></textarea>
                                 
                                </div>
                                <div>

                                <input type="submit" value="Submit" />
                               
                                </div>
                            </div> 
                         <p id='pa'></p>   */}

                        </form>
                    </section>
                </section>
            </section>
        </div>
    )
}

export default ContactUs
