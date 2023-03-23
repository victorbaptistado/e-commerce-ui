import React, { useEffect, useState } from 'react'
import { Box, Button, FormControl, FormLabel, Heading, Input, Stack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { getAddress, getUser } from '../api/UsersList';

const Profile = () => {


  const [user, setUser] = useState([]); 
  
  useEffect (() => {
    getUser(39).then(data => setUser(data));
  }, []);

  const { register, handleSubmit, watch, formState: { errors } } = useForm({});
  const onSubmit = data => console.log(data);

  return (
    <Box>
      <Heading padding={4} textAlign={'center'}>Profile</Heading>
      <Stack margin="0rem 4rem">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormLabel htmlFor={null}>Username</FormLabel>
          <Input type="text" {...register("username")} isRequired maxLength={20} size="sm" defaultValue={user.username} />
          <FormLabel htmlFor={null}>First Name</FormLabel>
          <Input type="text" {...register("first_name")} isRequired maxLength={20} size="sm" defaultValue={user.first_name} />
          <FormLabel htmlFor={null}>Last Name</FormLabel>
          <Input type="text" {...register("last_name")} isRequired maxLength={20} size="md" defaultValue={user.last_name} />
          <FormLabel htmlFor={null}>Password</FormLabel>
          <Input type="password" {...register("password")} isRequired maxLength={20} size="md" defaultValue={user.password} />
          <FormLabel htmlFor={null}>Email</FormLabel>
          <Input type="email" {...register("email")} isRequired maxLength={20} size="md" defaultValue={user.email} />
          <FormLabel htmlFor={null}>Street</FormLabel>
          <Input type="text" {...register("street")} isRequired maxLength={20} size="md" defaultValue={user.street} />
          <FormLabel htmlFor={null}>City</FormLabel>
          <Input type="text" {...register("city")} isRequired maxLength={20} size="md" defaultValue={user.city} />
          <FormLabel htmlFor={null}>PostCode</FormLabel>
          <Input type="text" {...register("postcode")} isRequired maxLength={20} size="md" defaultValue={user.postcode} />
          <FormLabel htmlFor={null}>Country</FormLabel>
          <Input type="text" {...register("country")} isRequired maxLength={20} size="md" defaultValue={user.country} />
          <Button
              mt={4}
              colorScheme='teal'
              //isLoading={props.isSubmitting}
              type='submit'
            >
            Submit
          </Button>
        </form>
      </Stack>
    </Box>
  )
}

export default Profile