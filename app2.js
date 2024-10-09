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
const Card = (props)=>{
     
  console.log('props is:', props)
  return (
    <div className='card'>
      <img alt='shahi samosa' className='shsam' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_m0320GiUdy3G31957ywUwWMTlanIXm5NA&s'/>
      <h3>{props.resName}</h3>
      <h4>{props.rating}</h4>
      <h4>{props.review}</h4>
    </div>
  ); 
}
const resObj = {
  resName:"Janta sweets",
  rating:"5 stars",
  review:"its just insane"
}
const Body = ()=>{
  return (
    <div className='body'>
      <div className='search'>Search</div>
      <div className='container'>
        <Card     
          resName="Shahi samosa"
          rating="4.8 stars"
          review="one of the the best samosa's u will ever eat"
        /> 
        <Card
          resName="Mishrilal Lassi"
          rating="4.5 stars"
          review="variety of foods & lassi with awsm ambience"
        />
        <Card
          // resData = {resObj}
          resName="Janta Sweets"
          rating="5 stars"
          review="the best shop to eat in jodhpur imo"
        />
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