import './indexfour.css'
import DesignImg from './images/designhomepagepart4.svg';
import Imageone from './images/homepagepart4imgone.svg';
import Imagetwo from './images/homepagepart4imgtwo.svg';
import Imagethree from './images/homepagepart4imgthree.svg';
import Imagefour from './images/homepagepart4imgfour.svg';
import Imagefive from './images/homepagepart4imgfive.svg';
import Imagesix from './images/homepagepart4imgsix.svg';

function home() {
    return (
     
       <>
            <div >
                <br />
                   
                   
                    <div  >

                       <div style={{overflow:"hidden"}} > 
                            <img src={DesignImg} alt="" style={{width:"20%"}} className="homepagePartfoursideimg"  />
                       </div>
                       <div style={{marginTop:"-15%"}}>

                       <div className="container homepagePartfoursidemaindiv" >
                           <p className="fourParttext">
                           Browse jobs by category
                           </p>
                           <p className="fourParttexttwo">
                           Choose from the list of most popular categories
                           </p>
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                            <div className="col">
                            <img src={Imageone}  style={{width:"100%"}} />
                            </div>

                            <div className="col">
                            <img src={Imagetwo}   className="homepagepart4divone" style={{width:"100%"}} />
                            </div>
                            <div className="col"> 
                            <img src={Imagethree}  className="homepagepart4divone" style={{width:"100%"}} /></div>
                            <div className="col">
                            <img src={Imagefour}  className="homepagepart4divone" style={{width:"100%"}} />

                            </div>
                            <div className="col">
                            <img src={Imagefive}  className="homepagepart4divone" style={{width:"100%"}} />
                            </div>
                            <div className="col">
                                 <img src={Imagesix}  className="homepagepart4divone" style={{width:"100%"}} /></div>
                            </div>
                        </div>
                       </div>
                        
                    </div>


                    
                    
            </div>
           
        
       </>
      
    );
  }
  
  export default home;