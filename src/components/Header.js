import {LOGO_URL} from "../utils/constants"
import { useState } from "react";
import { useEffect } from "react";
const Header = ()=>{  

  const [btnTxt, setbtnTxt] = useState(['Login'])
  return (
    <div className='header'>
      <div className='logo'>
        <img src={LOGO_URL}/>
      </div>
      <div className='navItems'>
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Cart</li>
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