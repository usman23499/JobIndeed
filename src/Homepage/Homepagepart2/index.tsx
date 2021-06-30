import './indexsecond.css'
import Parttwoimg from './images/parttwoimg.svg'
import AOS from "aos";
import 'aos/dist/aos.css';


function Home2() {

    

        AOS.init({duration:3000});
      
    
    
    
    
    return (
     
       <>
            <div >
                <br />
                    <div className="secondPartmaindiv" >
                 
                        <div style={{width:"100%",margin:"0px"}} className="row row-cols-1 row-cols-sm-2 row-cols-md-2">
                        <div className="col" style={{textAlign:"center"}}>

                        <img data-aos="zoom-in-up" src={Parttwoimg} className="partTwoImage" style={{width:"60%"}} alt="" />

                        </div>
                        <div className="col secondParttextdiv1">
                            <div>
                            <p className="secondParttext" >
                            Find your passion and achieve success
                            </p>
                            <p className="secondParttexttwo">
                            find a job that suits your interests and talents. 
                            A high salary is not the top priority. Most importantly,
                            You can work according to your heart's desire.
                            </p>
                            </div>
                        </div>
                        
                        
                    </div>


                    
                    
                    </div>
            </div>
        
       </>
      
    );
  }
  
  export default Home2;