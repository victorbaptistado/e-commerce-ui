import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { Box, Heading } from '@chakra-ui/react';

const Profile = () => {


  return (
    <Box>
      <Heading>Profile</Heading>
        <Link to="/" >
            <IoMdArrowRoundBack size={"3rem"}/>
        </Link>
    </Box>
  )
}

export default Profile