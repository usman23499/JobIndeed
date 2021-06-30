import NavbarImage from "./images/header.png"
import "./index.css";
import Logo from "./images/logo.svg";
function Navbar() {
    return (
     
       <>
     <div  >
         
     <div className="Navbar">
       
     
       
      <nav className="navbar navbar-expand-lg navbar-light nav">
        <div className="container-fluid ">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <img src={Logo} alt=""  className="logo" />
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            </ul>
            
            <span className="navbar-text">
        <ul className="navbar-nav mr-auto">
          <li className="newLi">
            <a className="nav-link navbutton" >Home</a>
          </li>
          <li  className="newLi" >
            <a className="nav-link navbutton" >
              Jobs
            </a>
          
          </li>
          
          <li className="newLi" >
            <a className="nav-link navbutton" >Contact</a>
          </li>

          <li  className="newLi" >
            <a className="nav-link navbutton" >Sign In</a>
          </li>

          <li className="newLi nav-item">
          <button className="signupButton">
              Sign Up 
          </button>
          </li>
          {/* <li className="nav-item">
          <button>
              Sign In
          </button>
          </li> */}
          
        </ul>
      </span>









           
          </div>
        </div>
      </nav>

      </div>
  
     </div>
  
  
       </>
      
    );
  }
  
  export default Navbar;