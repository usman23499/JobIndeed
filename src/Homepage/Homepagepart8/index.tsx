
import "./indexparteight.css";
import AndroidIcon from "@material-ui/icons/Android";
import AppleIcon from "@material-ui/icons/Apple";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
function home() {
    return (
     
       <>
            <div >
                <br />
                        

                    <div className="homepagepart8backgrounddiv" >

                            
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 "  >  
                           
                            <div className="col homepagepart8backgrounddivcol1"  style={{marginTop:"20%"}}>
                           <div>
                           <h4 className="homepagepart8backgrounddivfollowus" >Company</h4>
                           <p className="homepagepart8backgrounddivcol1dash">

                           </p>
                            <p>
                                About Us
                            </p>
                            <p>
                               Our Services
                            </p>
                            <p>
                                Feedback
                            </p>
                           </div>


                            </div>

                            <div className="col homepagepart8backgrounddivcol1"  style={{marginTop:"20%"}}>
                            <div>
                           <h4>Help And Support</h4>
                           <p className="homepagepart8backgrounddivcol1dash"></p>
                            <p>
                               FAQ
                            </p>
                            <p>
                            Trust And Safty
                            </p>
                            <p>
                                Jobindeed Foundation
                            </p>
                           </div>
                            </div>
                           
                            <div className="col homepagepart8backgrounddivcol1"  style={{marginTop:"20%"}}>
                            <div>
                           <h4>Term Of Services</h4>
                           <p className="homepagepart8backgrounddivcol1dash"></p>
                            <p>
                               Privacy Policy
                            </p>
                            <p>
                                Accesseblity
                            </p>
                            <p>
                               Cookie Policy
                            </p>
                            <p>
                              Security
                            </p>
                           </div>
                            </div>

                            <div className="col homepagepart8backgrounddivcol1"  style={{marginTop:"20%"}}>
                            <div>
                           <h4 >Follow Us</h4>
                           <p className="homepagepart8backgrounddivcol1dash"></p>
                            
                            <p className="homepagepart8backgrounddivcol1social">
                            <AndroidIcon />
                            </p>
                            <p className="homepagepart8backgrounddivcol1social" >
                            <AppleIcon />
                            </p >
                            <p className="homepagepart8backgrounddivcol1social">
                            <InstagramIcon />
                            </p>
                            <p className="homepagepart8backgrounddivcol1social" >
                            <TwitterIcon />
                            </p>
                           </div>
                            </div>
                            
                           

                            </div>


                    </div>
            </div>
       
       </>
      
    );
  }
  
  export default home;