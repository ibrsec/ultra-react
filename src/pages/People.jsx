import React from 'react'
import { usePeopleContext } from '../context/PeopleProvider'
import PeopleCard from '../components/PeopleCard';
import { useNavigate } from 'react-router-dom';

const People = () => {
    const navigate = useNavigate();
    const {peoples,setPeoples} = usePeopleContext();
    console.log('peoplede = ', peoples);
    
  return (
    <div className='container-wrapper grid  lg:grid-cols-3 md:grid-cols-2  gap-4 my-5'>
        {peoples.map(item=> <div className='cursor-pointer' onClick={()=>navigate(`/people/${item.id}`)}><PeopleCard key={item.id} {...item} /></div>)}
    </div>
  )
}

export default People