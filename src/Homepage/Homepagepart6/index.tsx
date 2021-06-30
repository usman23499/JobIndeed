import MainImg from "./images/homepagepart6mainimg.svg";

import "./indexpartsix.css"
import AOS from "aos";
import 'aos/dist/aos.css';
function home() {
    AOS.init({duration:3000});
    return (
     
       <>
            <div >
                <br />
                        <div style={{textAlign:"center"}}>
                             <p className="threeParttext" >
                             Come on, join with us !
                            </p>
                            <p className="threeParttexttwo">
                            Create an account and refer your friend
                            </p>

                        </div>


                    <div className="homepagepart6backgrounddiv" >

                            <img src={MainImg} data-aos="zoom-in-up"  style={{width:"40%"}} alt=""  />



                    </div>
            </div>
        
       </>
      
    );
  }
  
  export default home;