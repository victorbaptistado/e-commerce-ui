import React from 'react'
import { Box, FormLabel, Input, Button, Heading, Stack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form';

const SignIn = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm({});
  const onSubmit = data => console.log(data);

  return (
    <Box align="center">
      <Stack margin="3rem" borderRadius="md" padding="4rem" backgroundColor="orange"  width="30rem" justifyContent="center">
        <Heading textAlign={"center"}>Sign In</Heading>
        <FormLabel htmlFor={null}>Username</FormLabel>
        <Input backgroundColor={"white"} type="text" {...register("username")} isRequired maxLength={20} size="sm" placeholder='Username' />
        <FormLabel htmlFor={null}>Password</FormLabel>
        <Input backgroundColor={"white"} type="password" {...register("password")} isRequired maxLength={20} size="sm" placeholder='Password' />
        <Button
          mt={4}
          colorScheme='teal'
          //isLoading={props.isSubmitting}
          type='submit'
        >
          Submit
        </Button>
      </Stack> 
    </Box>
  )
}

export default SignIn