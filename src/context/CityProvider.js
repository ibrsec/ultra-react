import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"

 
//create context
const CityContext = createContext();


const CityProvider = ({children}) => {
  //? global state cities
  const [cities,setCities] = useState([]);

  //cities api query
  const getCities = async() => {
    //? base url and endpoint from .env
    const url = process.env.REACT_APP_BASE_URL+process.env.REACT_APP_CITIES_ENDPOINT; 
    try{
       
      const response = await axios.get(url); 
      if(response.status !== 200){
        throw new Error("not 200 cities get")
      }

      //?set the gloal state with result of the cities api
      setCities(response.data)

    }catch(error){
      console.log(error);
    }
  }

  //invoke api function in a use effect
useEffect(()=>{
  getCities();
  //mock data for not excausting the api
  // setCities([
  //   {
  //     "name": "Nicole Dooley",
  //     "city_img": "https://loremflickr.com/640/480/city",
  //     "city_name": "Taylor",
  //     "id": "1"
  //   },
  //   {
  //     "name": "Dixie Langosh",
  //     "city_img": "https://loremflickr.com/640/480/city",
  //     "city_name": "Fishers",
  //     "id": "2"
  //   },
  //   {
  //     "name": "Jennie Hane",
  //     "city_img": "https://loremflickr.com/640/480/city",
  //     "city_name": "Wichita",
  //     "id": "3"
  //   },
  //   {
  //     "name": "Rochelle Paucek",
  //     "city_img": "https://loremflickr.com/640/480/city",
  //     "city_name": "Arlington",
  //     "id": "4"
  //   },
  //   {
  //     "name": "Ron Lang",
  //     "city_img": "https://loremflickr.com/640/480/city",
  //     "city_name": "Burbank",
  //     "id": "5"
  //   },
  //   {
  //     "name": "Essie Hintz",
  //     "city_img": "https://loremflickr.com/640/480/city",
  //     "city_name": "Phoenix",
  //     "id": "6"
  //   },
  //   {
  //     "name": "Ms. Elijah O'Conner",
  //     "city_img": "https://loremflickr.com/640/480/city",
  //     "city_name": "Laredo",
  //     "id": "7"
  //   },])
},[])
  const values= {
    cities,setCities
  }
  return (
    <CityContext.Provider value={values}>
      {children}
    </CityContext.Provider>
  )
}

//  function for make easy consume the context data
export const useCityContext = () => {
  return useContext(CityContext);
}

export default CityProvider;