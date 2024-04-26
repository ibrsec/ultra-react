import React from "react"; 
import { useNavigate } from "react-router-dom";
const CityCard = ({ id, name, city_name, city_img }) => {
 const navigate = useNavigate();
  return (
    <div className="card shadow-md rounded-md pb-3 cursor-pointer  h-[16rem]"  onClick={() => navigate(id)} >
      <img className=" rounded-t-lg h-[60%] w-100 object-fit-cover" src={city_img} alt="" width="100%" />
      <div className="mt-5 px-3">
        <p className="text-text-color3"> {name}</p>
        <p className="text-text-muted">City: {city_name}</p> 
      </div>
    </div>
  );
};

export default CityCard;
