import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu =()=>{
    const [menuInfo, setMenuInfo] = useState(null)
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu= async ()=>{
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.8979567&lng=72.81314320000001&restaurantId=476719&catalog_qa=undefined&submitAction=ENTER')
        const json = await data.json()
        console.log('json data:',json)
        setMenuInfo(json.data)
    }
    if(menuInfo===null)return <Shimmer/>
    /*
    to get img: https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/
    use the above to append b4 the link given in card obj
    menuInfo.cards[2].card.card.info --> info abt restauraant like cuisnes,rating,name etc
    4.1 top picks, u can 'top picks' in title part
    */
    const {name,cuisines,costForTwoMessage,avgRatingString,totalRatingsString}=menuInfo.cards[2].card.card.info    
    const itemCards = menuInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards
    console.log('itemCards:',itemCards)
                  
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>
                {cuisines.join(', ')} - {costForTwoMessage}
            </p>
            <h4>avg-rating:{  avgRatingString} </h4>
            <h4>total-rating:{totalRatingsString} </h4>
            <ul>
                <li>Food 1</li>
                <li>Food 2</li>
                <li>Food 3</li>
            </ul>            
        </div>               
    );
}
export default RestaurantMenu;