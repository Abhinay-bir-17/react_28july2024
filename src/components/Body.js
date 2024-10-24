import Card from "./Card";
import resObj from "../utils/mockData";   
import {useState} from "react";  
const Body = ()=>{
  // local state variable
  // const [listOfRes, setListOfRes] = useState([
  //   {
  //     name:"Lapinos pizza",
  //     id: "1",
  //     rating:"4.5",
  //     review:"went to eat pizza on 23rd oct, was good"
  //   },{
  //     name:"Janta sweets",
  //     rating:"5",
  //     review:"its just insaneee",
  //     id:"11"
  //   },{
  //     name:"MacD",  rating:"5",review:"awesm pizzas imo",id:"0"
  //   }
  // ])
  
  const [listOfRes, setListOfRes]= useState(resObj)
  console.log('listofres:', listOfRes)
  return (      
    <div className='body'>
      <div className='filter'>
        <button className="filter_btn" onClick={()=>{
          // write filter logic here
          filteredList = listOfRes.filter((res)=> res.rating >4.5);

          console.log('after clicking update btn:',filteredList)
          setListOfRes(filteredList)
        }}>Top Rated Restaurants</button>
      </div>                    
      <div className='container'>
        {       
          listOfRes.map((hotel,index) => <Card key={index} resData = {hotel}/>)
        }       
        {/* the above code does the below 4 lines */}
        
        {console.log('focus')}
      </div>    
    </div>      
  );            
}                  
export default Body;