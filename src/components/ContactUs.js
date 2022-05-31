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
        let magac=document.querySelector('#jina')

    
        let mailing=document.querySelector('#mailing')

        let phone=document.querySelector('#phone')


        let meel=document.querySelector('#meel')

        let message=document.querySelector('#message')

        // select all the labels
        let jina=document.querySelector('#name')
        let mail=document.querySelector('#mail')
        let tel=document.querySelector('#tel')

        let locateLabel=document.querySelector('#locateLabel')
        let txt=document.querySelector('#txt')

        
        let empty=document.querySelector('#pa')


        if(magac.value=='')
        {
            magac.placeholder="Enter Name *"
            magac.focus()
          
        }
        else if(mailing.value=='')
        {
            mailing.placeholder="enter mail *"
            mailing.focus()

        }
        else if(phone.value=='')
        {
            phone.placeholder="enter phone *"
            phone.focus()

        }
        else if(meel.value=='')
        {
            meel.placeholder="enter phone *"
            meel.focus()

        }
        
  
        else if(message.value=='')
        {
            message.placeholder="enter message *"
            message.focus()

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

                               
                           
        
                                <input type="text" name="Name" placeholder="name" id="jina"/>
                         <label id='name'></label>

        
                             
                                <input type="email" name="Email" placeholder="email" id="mailing"/>
                                <label id='mail'></label>
                               
                         </div> 

                            <div class="inputBox">
                                      
                        
                                <input type="number" name="Phone"placeholder="number" id="phone"/>
                                <label id='tel'></label>
                               
                         

                                <input type="text" name="Locate" placeholder="location" id="meel"/>
                                <label id='locateLabel'></label>
                            </div> 
                              
                         
                        <textarea placeholder="write message" name="Message"  cols="30" rows="10" id="message"/>

                        <input type="submit" value="Submit" class="btn"/>
                        <p id='pa'></p>
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
