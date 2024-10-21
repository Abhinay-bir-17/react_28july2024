import Card from "./Card";
import resObj from "../utils/mockData";
const Body = ()=>{
  return (      
    <div className='body'>
      <div className='filter'>
        <button className="filter_btn" onClick={()=>{
          console.log('hello')
        }}>Top Rated Restaurants</button>
      </div>
      <div className='container'>
        {       
          resObj.map((hotel,index) => <Card key={index} resData = {hotel}/>)
        }       
        {/* the above code does the below 4 lines */}
        <Card resData = {resObj[0]} /> 
        <Card resData = {resObj[1]} />  
        <Card resData = {resObj[2]} />  
        <Card resData = {resObj[3]} />  
        {console.log('focus')}
      </div>    
    </div>      
  );            
}                  
export default Body;