import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu =()=>{
    const [menuInfo, setMenuInfo] = useState(null)
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu= async ()=>{
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.8979567&lng=72.81314320000001&restaurantId=25567&catalog_qa=undefined&submitAction=ENTER')
        const json = await data.json()
        console.log('json data:',json)
        setMenuInfo(json.data)
    }
    if(menuInfo===null)return <Shimmer/>
    return (
        <div className="menu">
            <h1>{menuInfo.cards[2].card.card.info.name}</h1>
            <ul>
                <li>Food 1</li>
                <li>Food 2</li>
                <li>Food 3</li>
            </ul>
        </div>
    );
}
export default RestaurantMenu;