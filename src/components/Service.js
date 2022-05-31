import React from 'react'
import image1 from '../image/design.png';
import image2 from '../image/webicon.png';

import image3 from '../image/Seo.jpg';
import image4 from '../image/git.png';
import image5 from '../image/photoshop.png';
import image6 from '../image/graphic.jpg';

function Service() {
    return (
     <div className="head">
        <section className="all">
              <h1 className="do">Experience</h1>
              
        <div className="design" id="Service">


                <div>
                <img src={image1}/>
                
                <h1>web design</h1>
              <br/>

            <p>We turn your website into an effective way to engage with your audience .</p>
       
                </div>

                <div>
              <img src={image2}/>

                    <h1>Web Development</h1>
              <br/>

                <p>Websites will help you to grow your business more and bring you customers all over the world</p>
                </div>               
                <div>
              <img src={image3}/>

            <h1>search engine optimization(SEO)</h1>
              <br/>

            <p>Rank higher on search engines and drive visitors to your website from popular news sites.</p>
         
                </div>
                <div>
              <img src={image4}/>

                    <h1>Github</h1>
              <br/>

                <p>store and host your projects in github,ease facilitation of working with others</p>
                </div>
                <div>
              <img src={image5}/>

                    <h1>Photoshop</h1>
              <br/>

            <p> If you want to make money with Photoshop, give these ideas a try today.</p>
         
          
                </div>
                <div>
              <img src={image6}/>

            <h1>web design</h1>
            <br/>

            <p>We turn your website into an effective way to engage with your audience .</p>
            </div>
        </div>
        </section>
            </div>
    )
}
 
export default Service
