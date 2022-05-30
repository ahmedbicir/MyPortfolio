import { IconContext } from "react-icons";
import { FaApple } from "react-icons/fa";
import { FaAtlassian } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaAiOutlineMenu } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



// import LinkedInIcon from '@mui/icons-material/LinkedIn';



// import { IconName } from "react-icons/fa";

import { red } from "@material-ui/core/colors";
import Nav from './Nav';
const dates = new Date()

const getyear = dates.getFullYear()

function Footer() {
    return (
     
    
        <IconContext.Provider
        value={{ color: 'white', size: '40px' }}

      >

        <div className="">

<footer>
            {/* <Nav /> */}

   {/* <div className="foot">
  <p>Ahmed Mohamed Hassan</p>
  <p>Full-stack developer</p>
  <p>+254740333023</p>

  </div> */}
{/*  <FaApple  color="red" size="100px"/>
 */} 
 <div className="icons">
   
 <div><a href="https://www.facebook.com/ahmedbicir.ohirsi" target="_blank" title="follow me on facebook"><FaFacebookF/></a></div>
 <div> <a href="https://twitter.com/Ahmedbicir1" target="_blank" title="follow me on twitter"><FaTwitter/></a></div>
<div><a href="https://www.linkedin.com/in/ahmed-bicir/" target="_blank" title="follow me on LinkedIn"><FaLinkedin/></a></div>
{/* <div><ImMenu/></div> */}


</div>
        <div className="footer_bottom">
                <p>Copyright @{getyear} All rights reserved
              
              </p>
              <div class="back-btn-wrap"> 
                <a href="#" class="back-btn">
                  <i class="fas fa-chevron-up"></i>
                </a>
              </div>
        </div>
           
           

</footer> 

        </div>
        </IconContext.Provider>            
    )
}

export default Footer
