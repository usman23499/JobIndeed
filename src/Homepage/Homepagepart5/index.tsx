import ParFiveimg from './images/partfiveimg.svg'
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
                        AI based interview system.
                            </p>
                            <p className="threeParttexttwo">
                            BY using this AI based interview 
                            paltform the HR management can easily identify the speaking 
                            and confidence level of an applicant.
                            </p>
                            </div>


                       

                        </div>

                        <div className="col " style={{textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}} >
                        <img data-aos="zoom-in-left"  src={ParFiveimg} className="partThreeImage" style={{width:"70%"}} alt="" />
                        </div>
                        
                        
                    </div>


                    
                    
                    </div>
            </div>
        
       </>
      
    );
  }
  
  export default home;