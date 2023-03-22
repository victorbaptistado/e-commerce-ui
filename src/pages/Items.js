import { HStack, ListItem, textDecoration, UnorderedList } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { getItems } from '../api/ItemsList';
import CardItem from '../components/CardItem'


const Items = () => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then(data => setItems(data));
  }, []);

  return (
    <HStack>
        {items.map((item) =>
          <CardItem key={item.id} itemId={item.id}/>
          )
        }
    </HStack>
  )
}

export default Items