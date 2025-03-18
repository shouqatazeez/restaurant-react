import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import resList from "../utils/mockData"; 
import Shimmer from "./Shimmer"; 

const Body = () => {
  const [ressList, setRessList] = useState([]); 
  const [loading, setLoading] = useState(true); 
const[searchText, setsearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);


  

  
  const fetchData = async () => {
    setTimeout(() => {
      setRessList(resList); 
      setLoading(false); 
    }, 1000);
  };

  return (
    <div className="body">
      <div className="Filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={
            (e) =>{
                setsearchText(e.target.value)
            }
          } />
          <button onClick={() =>{
console.log(searchText);
const filteredres = resList.filter((res) =>
  res.data.name.toLowerCase().includes(searchText)
);
setRessList(filteredres);

          }}>Search</button>
        </div>

        <button
          className="btn"
          onClick={() => {
            const filteredList = ressList.filter(
              (res) => res.data.avgRating > 4.2
            );
            setRessList(filteredList); 
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {loading ? (
        <Shimmer />
      ) : (
        <div className="rest-container">
          {ressList.map((restaurant) => (
            <RestCard key={restaurant.data.id} resData={restaurant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
