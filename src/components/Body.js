import Card from "./Card";
import resObj from "../utils/mockData";   
import {useState} from "react";  
import {useEffect} from "react";  
import Shimmer  from "./Shimmer";
const Body = ()=>{  
  // [] means below that initially listOfRes is empty
  const [listOfRes, setListOfRes] = useState([ ])
  const [filteredListOfRes, setFilteredListOfRes] = useState([])
  const [searchTxt, setSearchTxt] = useState('') 
  console.log('listofres:', listOfRes)
  useEffect (()=>{
    console.log('useEeffect called')
    fetchData();
  }, []);
  const fetchData = async ()=>{
    // http://cors-anywhere.com    ,  https://crossorigin.me , https://proxy.cors.sh/  
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    
    console.log('list of cards from swiggy:', json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    // optional chaining , read abt it
    setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  // below is called as conditional rendering
  if(listOfRes.length===0){  
    return <Shimmer/>  
  }
  console.log('will this be printed b4 useEffect')
  return (      
    <div className='body'>
      {console.log('body componenet is rendered')}
      <div className='filter'>
        <div className="filter-search">
          <input className="filter-search-input" value={searchTxt} onChange={(e)=>{
             setSearchTxt(e.target.value)
            //  fetchData(), this way u fetch data as many times as no of characters 
            // u r adding or deleting in the txt search
            
          }} ></input>
          <button className="filter-search-btn" onClick={()=>{
            
            console.log('search text is:',searchTxt);
            filteredList = listOfRes.filter((res)=> res.info.name.toLowerCase().includes(searchTxt.toLowerCase()))
            setFilteredListOfRes(filteredList) 
            
          }}>Search</button>
        </div>
        <button className="filter-btn" onClick={()=>{
          // write filter logic here
          filteredList = listOfRes.filter((res)=> res.info.avgRating >4.1);
          // {var}
          console.log('after clicking update btn:',filteredList)
          setFilteredListOfRes(filteredList)
        }}>Top Rated Restaurants</button>
      </div>                    
      <div className='container'>
        {       
          filteredListOfRes.map((hotel) => <Card key={hotel.info.id} resData = {hotel}/>)
        }       
        {/* the above code does the below 4 lines */}
        
        {console.log('focus')}
      </div>    
    </div>      
  );            
}                  
export default Body;