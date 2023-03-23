import { HStack, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { getItems } from '../api/ItemsList';
import CardItem from '../components/CardItem'


const Items = () => {

  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then(data => {
        setItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <HStack justifyContent={'center'}>
      {loading ? (
        <Spinner color='red.500' size="lg" />
      ) : ( 
      items.map((item) =>
        <CardItem key={item.id} itemId={item.id}/>)
      )}
    </HStack>
  )
}

export default Items