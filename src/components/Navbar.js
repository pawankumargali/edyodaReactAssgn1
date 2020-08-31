import React, {  useState } from 'react';
import logo from '../assets/img/stunning-logo.png';
import '../assets/css/Navbar.css';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const handleCollapsibleMenuIsOpen = () => setIsOpen(!isOpen);

    return (
    <header>
        <div>
          <img src={logo} alt="logo"/>
        </div>
        <div className="nav-menu" id="nav-menu-items">
            <a href="#" className="active">Home</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Jobs</a>
        </div>
        <div id="nav-menu-btn-div">
            <button >Your Account</button>
        </div>
        <div className="collapsible-nav-icon"
              onClick={handleCollapsibleMenuIsOpen}
         >
            <i className="fas fa-bars"></i>
        </div>

        {isOpen &&
        (<div className="nav-menu" id="collapsible-nav">
            <a href="#" className="active">Home</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Jobs</a>
            <button>Your Account</button>
            <div className="collapsible-nav-icon" id="close-collapsible-btn"
                onClick={handleCollapsibleMenuIsOpen}
            > 
                <i className="fas fa-times"></i>
            </div>
        </div>)
        }
        
    </header>
    );
}

export default Navbar;