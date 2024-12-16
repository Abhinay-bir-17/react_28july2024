import {LOGO_URL} from "../utils/constants"
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Header = ()=>{  
  console.log('header is called whenever the button is clicked as btnTxt is react variable not just a js variable ')
  const [btnTxt, setbtnTxt] = useState(['Login'])
  return (
    <div className='header'>
      <div className='logo'>
        <img src={LOGO_URL}/>
      </div>
      <div className='navItems'>
        <ul>
          <li>Home</li>
          <li>
          <Link to="/about" >About us</Link>
          </li>
          <li>
          <Link to="/contact">Contact us</Link>
          </li>
          <li>
          <Link to="cart">Cart</Link>
          </li>
          <button className="login" onClick={()=>{
            if(btnTxt==="Logout")setbtnTxt('Login')
            else  setbtnTxt('Logout')
          }}>{btnTxt}</button>
        </ul>
      </div>
    </div>
  );
}
export default Header;