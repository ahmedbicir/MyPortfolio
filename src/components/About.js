import React from 'react';
import sawir from '../image/cuseyb.png'; 
import html from '../image/html.png';
import css from '../image/css.png';
import js from '../image/js.png';
import php from '../image/php2.png';

function About() {
   return ( 
      <div className="head">
          <section className="all">
         <div className="bio" id="about">
            <img src={sawir} />

            <div className="bio_sawir">
               <h1>why choose me?</h1>
               <div>
               <p> I am a Web Designer, Web Developer with over 2years of experience. Experienced with dynamic and static web projects.developing and designing user interfaces,testing, debugging and  training staff. proven ability in optimizing  web functionalities that improve data retrieval and workflow efficiencies.
               </p>
               <p>I am solution driven web developer,finding solutions and determining customer requirements  </p>
          
              <p>besides the above , i am digital matketing and sales  specialist , who Makes client's potential consumers aware of his/her brand to help  generate leads.</p>
               </div>
           

            </div>
         </div>
         <section className="skills_container">
            <h1 className="do">Skills</h1>
            <div className="skills">

               <section class="firstone">
                  <p>html</p>
                  <div>
                     <article>90%</article>

                  </div>
                  <p>css</p>
                  <div >
                     <article>90%</article>

                  </div>
                  <p>Js</p>

                  <div className='js'>
                     <article>70%</article>

                  </div>
               </section>
               {/* <!-- second one --> */}
               <section class="second">
                  <p>React</p>
                  <div>
                     <article>60%
                     </article>
                  </div>
                  <p>C#</p>
                  <div>
                     <article>60%
                     </article>
                  </div>
                  <p>Python</p>

                  <div>
                     <article>60%
                     </article>
                  </div>
               </section>
               <section class="third">
                  <p>php</p>
                  <div>
                     <article>50%
                     </article>
                  </div>
                  <p>sql</p>
                  <div>
                     <article>50%
                     </article>
                  </div>
                  <p>laravel</p>

                  <div>
                     <article>30%
                     </article>
                  </div>
               </section> <section class="fourth">
                  <p>C</p>
                  <div>
                     <article>40%
                     </article>
                  </div>
                  <p>C++</p>
                  <div>
                     <article>40%
                     </article>
                  </div>
                  <p>Java</p>

                  <div>
                     <article>40%
                     </article>
                  </div>
               </section>

            </div>

         </section>
         <section className="contact">
            <h1>Special Note
            </h1>
            <p>I Create Websites To Spread Your Business Globally</p>
            <a href="mailto:youngbicir@gmail.com?subject = Feedback&body = Message">
               <button>Send Me Email</button>
            </a>
            {/* <button>Contact us</button> */}
         </section>
</section>
      </div>
   )
}

export default About
