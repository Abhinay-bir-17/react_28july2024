import React from 'react';
import ReactDOM from "react-dom";
const Header = ()=>{
  return (
    <div className='header'>
      <div className='logo'>
        <img src='https://i.pinimg.com/474x/b3/e5/f3/b3e5f321d4aedcf983a6c95f5a6d0b88.jpg'/>
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
const Card = ()=>{
  return (
    <div className='card'>
      <img alt='shahi samosa' className='shsam' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_m0320GiUdy3G31957ywUwWMTlanIXm5NA&s'/>
      <h3>Shahi Samosa, Jodhpur</h3>
      <h4>4.8 stars</h4>
      <h4>review : one of the the best samosa's u will ever eat</h4>
    </div>
  ); 
}
const Body = ()=>{
  return (
    <div className='body'>
      <div className='search'>
        Search
      </div>
      <div className='container'>
        <Card/> {Card()} <Card/><Card/><Card/><Card/><Card/><Card/><Card/>
      </div>
    </div>
  );
}
const AppLayout = ()=>{
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>
  );
} 
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)