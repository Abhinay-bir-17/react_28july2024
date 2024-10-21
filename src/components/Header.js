import {LOGO_URL} from "../utils/constants"
const Header = ()=>{  
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
        </ul>
      </div>
    </div>
  );
}
export default Header;