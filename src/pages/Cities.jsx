import CityCard from "../components/CityCard";
import { useCityContext } from "../context/CityProvider";

 

const Cities = () => {

    const {cities,setCities} = useCityContext(); 
    console.log(cities);
  return (
    <section className="">
        <div className="container-wrapper">
            <div className="cities-wrapper grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 bg-secondary-bg py-10 px-5 rounded-lg mt-5 shadow-md">
                {cities?.map(city=> <CityCard key={city.id} {...city}/>)}
            </div>
        </div>
    </section>
  )
}

export default Cities;