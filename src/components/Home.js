
import logo from '../image/1.png';
import image from '../image/2.png';
import seo from '../image/4.png';
import ahmed from '../image/ahmed.png';
import fawzi from '../image/catoosh.png';
import tukke from '../image/moha.png';
import diini from '../image/diini.png'
import React from 'react';
import { NavLink } from 'react-router-dom'


function Home() {
  return (


    <div className="head">
      <section className="all">
        <section className="Background" id="home">

          <section className="lefts">
         <div className='pos'>
              <div className="typewriter">

                <div className="typewriter-text">I am Ahmed, a developer.</div>
              </div>
              <div>
                <button className='btnn'><NavLink to="/ContactUs">Talk to me</NavLink></button>

              </div>
         </div>
          </section>
          <section className="imge">
            <img src={ahmed} />


          </section>

        </section>
        <h1 className="do">What i do</h1>
        <div className="design">
          <div>
            <img src={logo} />
            {/* <h1>Web Design</h1>
            <br/>

            
            <p>There are few things in design that are more subjective—or more important—than the use of color. </p> */}
            {/* <p>A color that can evoke one reaction in one person may evoke the opposite reaction in another, due to culture, prior association, or even just personal preference</p> */}
          </div>
          <div>
            <img src={image} />
            {/* <h1>WEB DEVELOPMENT</h1>
            <br/>

            
            <p>I develop websites  and systems by following the development life cycle</p>
            <p>.designing,implementing,testing  deploying and maintaining</p> */}

          </div>
          <div>
            <img src={seo} />

            {/* <h1>search engine optimization(SEO)</h1>
            <br/>

            <p>Rank higher on search engines and drive visitors to your website from popular news sites.</p> */}

          </div>
        </div>

        <div className="testimonials" id="talk">
          <h1 className="do">Testimonial</h1>
          <div className="design_test">
            <div>
              <img src={fawzi} />
              <h1> Catosh</h1>
              <br/>
              <p>indeed my employees praised you  for the work done it few days. thank you very much  for your help.</p>
            </div>

            <div>
              <img src={tukke} />
              <h1>Mohamed Tuke</h1>
              <br/>
              <p>your great guidance and kind assistance  is always remembered.</p>

            </div>
            <div>
              <img src={diini} />
              <h1> Amiin Diini </h1>
              <br/>
              <p>you will remain in our memories as one of our favourite  teacher and a great inspirer</p>

            </div>
          </div>
        </div>
      </section>
      <p id="ContactUs">
        maslax
      </p>

    </div>
  )
}


export default Home