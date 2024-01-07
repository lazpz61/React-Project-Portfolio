import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import contactPagePic from "../../../static/assets/images/auth/login-image.jpg";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";


export default function() {
  return (
  <div className="content-page-wrapper">

    <div 
    className="left-column" 
    style={{
      background: "url(" + contactPagePic + ") no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}
    />

        <div className="right-column">

          <div className="content-bullet-points">
            <div className="bullet-point-group">
              <div className="icon">
                  <FontAwesomeIcon icon="mobile-alt" />
              </div>
              
              <div className="text">
                  617-308-7979
              </div>
            </div>


            <div className="bullet-point-group">
              <div className="icon">
                  <FontAwesomeIcon icon="envelope-open-text"/>
                  
              </div>
                
              <div className="text">
                  lazpz61@gmail.com
              </div>
            </div>

            <div className="bullet-point-group">
              <div className="icon">
                  <FontAwesomeIcon icon="globe-americas"/>
                  
              </div>
              
              <div className="text">
                  Boston, MA 02188
              </div>
            </div>

            <div className="bullet-point-group">
              <div className="icon">
                  <FaGithub />
                  
              </div>
              
              <div className="text">
                  <a href="https://github.com/lazpz61" target="_blank" >Github</a>
              </div>
            </div>

            <div className="bullet-point-group">
              <div className="icon">
                  <FaInstagram />
                  
              </div>
              
              <div className="text">
                  <a href="https://www.instagram.com/laz_lifting_life/" target="_blank" >Instagram</a>
              </div>
            </div>

            <div className="bullet-point-group">
              <div className="icon">
                  <FaFacebook />
                  
              </div>
              
              <div className="text">
                  <a href="https://www.facebook.com/lazarolp" target="_blank" >Facebook</a>
              </div>
            </div>

            <div className="bullet-point-group">
              <div className="icon">
                  <FaTwitter />
                  
              </div>
              
              <div className="text">
                  <a href="https://twitter.com/lazpz61" target="_blank" >Twitter</a>
              </div>
            </div>

          </div>
        

        </div>
   </div>
  );
}
