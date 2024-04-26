import React from 'react'
import PeopleCard from '../components/PeopleCard'
import { useParams } from 'react-router-dom'
import { usePeopleContext } from '../context/PeopleProvider';
import BackButtons from '../components/BackButtons';

const PeopleDetail = () => {
    const {id} = useParams();
    const {peoples} = usePeopleContext();
    const person = peoples.filter(item => item.id == id)[0];
    console.log('person',person);
  return (
    <div className='container-wrapper my-10'>
        <div className=' max-w-[400px] mx-auto my-5'>
            <PeopleCard {...person} />
            </div>
        <BackButtons />
    </div>
  )
}

export default PeopleDetail