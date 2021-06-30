

import Imageone from './images/homepagepart7imgone.svg';
import Imagetwo from './images/homepagepart7imgtwo.svg';
import Imagethree from './images/homepagepart7imgthree.svg';


function home() {
    return (
     
       <>
            <div >
                <br />
                   
                   
                    <div  >

                       
                       <div >

                       <div className="container homepagePartfoursidemaindiv" >
                           <p className="fourParttext">
                           Testimonials
                           </p>
                          
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">  
                            <div className="col">
                            <img src={Imageone}  style={{width:"100%"}} />
                            </div>

                            <div className="col">
                            <img src={Imagetwo}   className="homepagepart4divone" style={{width:"100%",marginTop:"0px"}} />
                            </div>
                            <div className="col"> 
                            <img src={Imagethree}  className="homepagepart4divone" style={{width:"100%",marginTop:"0px"} } /></div>
                             
                            </div>
                        </div>
                       </div>
                        
                    </div>


                    
                    
            </div>
           
        
       </>
      
    );
  }
  
  export default home;