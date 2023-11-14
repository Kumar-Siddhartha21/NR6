import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
 
 
  useEffect(() => {
    
    fetchData();
    console.log("UseEffect Called");
  }, []);

const fetchData= async() =>{
  const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=22.4696435&lng=88.3961473");

  const json = await data.json();
  console.log(json)
}


  return (
    <div className="body">
      <div className="Search">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
