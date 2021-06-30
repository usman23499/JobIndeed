// import MainImage from "./images/header.png"
import "./index.css";
import Navbar from "./navbar";
import RoundImage from "./images/round.svg";
import MenOne from "./images/menOne.svg";
import MenTwo from "./images/mentwo.svg";
import WomenOne from "./images/womenOne.svg";

import AOS from "aos";
import 'aos/dist/aos.css';

function Main() {
  
  

  
  
      AOS.init({duration:3000});
   



   
    return (
     
       <>
   


     <div className="main">
       

      <Navbar />
      
        <div >

            <div className="maindivSecond"  data-aos="fade-up">
            <p className="maindivSecondTextfirst">
            Find your job better
            and faster
            </p>
                <p style={{color:"#2D2058",fontSize:"1.3vw"}} className="secondtext" >
                Find your best job better and faster with Jobest
                </p>
                <br />
          <button className="signupButton newbutton">
              Sign Up 
          </button>

          <button className="signupButton newbutton" style={{marginLeft:"20px"}}>
              Sign In
          </button>
            </div>
          
           
          

            <div className="round">
                <img src={RoundImage}   style={{width:"100%"}} alt=""  />
            </div>

            <div className="menOne">
            <img  src={MenOne}   style={{width:"100%"}} alt=""  />
            </div>


            <div className="menTwo">
            <img src={MenTwo}    style={{width:"100%"}} alt=""  />
            </div>

            <div className="womenOne">
            <img src={WomenOne}    style={{width:"100%"}} alt=""  />
            </div>
        </div>
        <br />
        <br />
        
     </div>
  
  
       </>
      
    );
  }
  
  export default Main;