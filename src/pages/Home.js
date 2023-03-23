import { Heading, Stack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getUser } from '../api/UsersList';
import Items from './Items'

const Home = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUser(39).then(data => setUsers(data));
  }, []);

  return (
    <Stack>
      <Heading padding={4} textAlign={'center'}>Welcome, {users.first_name}</Heading>
      <Items/>
    </Stack>
  )
}

export default Home