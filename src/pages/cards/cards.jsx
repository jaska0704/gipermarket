import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { CardPhone } from '../home/components/cards/card-phone';
import { loadState } from '../../config/storage';
import { useGetCategory } from '../home/service/query/useGetCategory';

const Cards = () => {
    const {datakey} = useParams();
    const {data} = useGetCategory(datakey);
    const user = loadState("user")



  return (
    <div className='container flex flex-wrap gap-9'>
      {data?.map((item) => (
        <CardPhone {...item} key={item.id}/>
      ))}
    </div>
  );
}

export default Cards;