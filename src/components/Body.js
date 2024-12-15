import Card from "./Card";
import resObj from "../utils/mockData";   
import {useState} from "react";  
import {useEffect} from "react";  
import Shimmer  from "./Shimmer";
const Body = ()=>{  
  // [] means below that initially listOfRes is empty
  const [listOfRes, setListOfRes]= useState([ ])
  console.log('listofres:', listOfRes)
  useEffect (()=>{
    console.log('useEeffect called')
    fetchData();
  }, []);
  const fetchData = async ()=>{
    // http://cors-anywhere.com    ,  https://crossorigin.me , https://proxy.cors.sh/  
    const data = await fetch("https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    
    console.log('list of cards from swiggy:', json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    // optional chaining , read abt it
    setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  // below is called as conditional rendering
  if(listOfRes.length===0){  
    return <Shimmer/>  
  }

  console.log('will this be printed b4 useEffect')
  return (      
    <div className='body'>
      <div className='filter'>
        <div className="filter-search">
          <input className="filter-search-input"></input>
          <button className="filter-search-btn">Search</button>
        </div>
        <button className="filter-btn" onClick={()=>{
          // write filter logic here
          filteredList = listOfRes.filter((res)=> res.info.avgRating >4.5);
          // {var}
          console.log('after clicking update btn:',filteredList)
          setListOfRes(filteredList)
        }}>Top Rated Restaurants</button>
      </div>                    
      <div className='container'>
        {       
          listOfRes.map((hotel) => <Card key={hotel.info.id} resData = {hotel}/>)
        }       
        {/* the above code does the below 4 lines */}
        
        {console.log('focus')}
      </div>    
    </div>      
  );            
}                  
export default Body;