import './indexthree.css'
import Parthreeimg from './images/partthreeimg.svg';
import AOS from "aos";
import 'aos/dist/aos.css';
function home() {
    AOS.init({duration:3000});
    return (
     
       <>
            <div >
                <br />
                    <div  >
                 
                        <div style={{width:"100%",margin:"0px"}} className="row row-cols-1 row-cols-sm-2 row-cols-md-2">
                        <div className="col threeParttextdiv1 " >

                        <div>
                            <p className="threeParttext" >
                            Million of jobs, finds
                            the one thats rights for you
                            </p>
                            <p className="threeParttexttwo">
                            Analytics bootstrapping buzz first mover advantage
                            network effects funding handshake. Buyer social media
                            burn rate interaction design prototype handshake.
                            </p>
                            </div>


                       

                        </div>

                        <div className="col " style={{textAlign:"center"}} >
                        <img  data-aos="zoom-in-up"  src={Parthreeimg} className="partThreeImage" style={{width:"70%"}} alt="" />
                        </div>
                        
                        
                    </div>


                    
                    
                    </div>
            </div>
        
       </>
      
    );
  }
  
  export default home;