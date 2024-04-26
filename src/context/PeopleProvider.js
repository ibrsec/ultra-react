

import axios from 'axios';
import   { createContext, useContext, useEffect, useState } from 'react'

const PeopleContext = createContext();

const PeopleProvider = ({children}) => {
    const [peoples,setPeoples] = useState();

    const getPeoples = async() => {
const url = process.env.REACT_APP_PEOPLE_BASE_URL+"?page=2";
console.log(url);
        try{
            const response = await axios.get(url);
            if(response.status !== 200){

                throw new Error("not 200 get people")
            }

            setPeoples(response.data.data)
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getPeoples()
        // setPeoples(
        //     [
        //         {
        //         "id": 1,
        //         "email": "george.bluth@reqres.in",
        //         "first_name": "George",
        //         "last_name": "Bluth",
        //         "avatar": "https://reqres.in/img/faces/1-image.jpg"
        //         },
        //         {
        //         "id": 2,
        //         "email": "janet.weaver@reqres.in",
        //         "first_name": "Janet",
        //         "last_name": "Weaver",
        //         "avatar": "https://reqres.in/img/faces/2-image.jpg"
        //         },
        //         {
        //         "id": 3,
        //         "email": "emma.wong@reqres.in",
        //         "first_name": "Emma",
        //         "last_name": "Wong",
        //         "avatar": "https://reqres.in/img/faces/3-image.jpg"
        //         },
        //         {
        //         "id": 4,
        //         "email": "eve.holt@reqres.in",
        //         "first_name": "Eve",
        //         "last_name": "Holt",
        //         "avatar": "https://reqres.in/img/faces/4-image.jpg"
        //         },
        //         {
        //         "id": 5,
        //         "email": "charles.morris@reqres.in",
        //         "first_name": "Charles",
        //         "last_name": "Morris",
        //         "avatar": "https://reqres.in/img/faces/5-image.jpg"
        //         },]
        // )
    },[])


  return (
    <PeopleContext.Provider value={{peoples,setPeoples}}>
        {children}
    </PeopleContext.Provider>
  )
}

export const usePeopleContext = () =>{
    return useContext(PeopleContext);
}

export default PeopleProvider;

