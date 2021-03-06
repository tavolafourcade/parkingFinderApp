import React, {useState} from 'react';
import { MenuItems } from './menu-items';
import {ReactComponent as SvgFooter} from "../../assets/footer.svg";
import "./navbar.styles.css";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return(
    <div>
      <nav> 
        <i className="fas fa-bars burger" 
           onClick={()=>setOpen(!open)}>

        </i>
        
        <a className="logo-container">
          <SvgFooter className="logo"/>
        </a>
        
        <ul className="nav-links mobile" 
            style={{transform: open ? "translateX(0px)" : ""}}>
              <div className="logo-sm">
                <img src="https://static.justpark.com/web/assets/header_logo_small.0050bc13.svg"/>
              </div>
              {
                MenuItems.map((item, index) => {
                  return (
                    <li key={index} className="nav-item">
                      <a href={item.url}>
                      {item.title}
                      </a>
                    </li>
                    )
                  }
                )
              }
          <li className="nav-item nav-mobile-hidden"><a className=" nav-login">Login</a></li>
          <li className="nav-item nav-mobile-hidden"><a className="nav-signup">Sign Up</a></li>
          <li className="nav-item nav-mobile-show"><a className="nav-login">Sign Up/Login</a></li>
        </ul>
      </nav>

      <div className={`${open ? "black-overlay": " "}`} onClick={()=>setOpen(!open)}></div>
    </div>
    
  )

}


