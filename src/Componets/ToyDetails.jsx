import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import ToyDetalisCard from './ToyDetalisCard';

const ToyDetails = () => {
  const data = useLoaderData()
  const {id} = useParams()
  const [toy, setToy] = useState({})
 useEffect(() => {
      const selectedToy = data.find((t) => t.id === parseInt(id));
      
      setToy(selectedToy);
    }, [data,id]);
    
  return (
    <div>
      <ToyDetalisCard toy = {toy}> Toy Detela cark</ToyDetalisCard>
    </div>
  );
};

export default ToyDetails;