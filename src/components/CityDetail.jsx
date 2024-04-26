import React from 'react'
import { useCityContext } from '../context/CityProvider';
import { useParams,useNavigate } from 'react-router-dom';
import BackButtons from './BackButtons';
import CityCard from './CityCard';

const CityDetail = () => {
const navigate = useNavigate();


    const {cities} = useCityContext();
    const{id } = useParams();
    const city = cities.filter(city=> city.id == id)[0];
    console.log(city);
    const {city_img,name,city_name} = city;
  return (
    <>
    <div className='w-[18rem] mx-auto my-16  '>
    <CityCard  {...city}/>
    </div>
        <BackButtons />
    </>
  )
}

export default CityDetail;