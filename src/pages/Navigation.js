import { HStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { ImHome } from 'react-icons/im'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { NavLink } from 'react-router-dom'

const Navigation = () => {

  const [showHome, setShowHome] = useState(true);
  const [showProfile, setShowProfile] = useState(false);

  const home = "home";
  const profile = "profile";

  function handleClick(data) {
    setShowHome(data === home);
    setShowProfile(data === profile);
  }
  
  
  return (
    <nav className="App-header">
      {showHome &&
        <HStack>
          <NavLink to="/profile" onClick={() => handleClick(profile)} >
            <CgProfile size={"3rem"}/>
          </NavLink>
        </HStack>
          }
      {showProfile &&
        <HStack>
          <NavLink to="/" onClick={() => handleClick(home)}>
            <IoMdArrowRoundBack size={"3rem"}/>
          </NavLink>
          <NavLink to="/" onClick={() => handleClick(home)} >
            <ImHome size={"3rem"}/>
          </NavLink>
        </HStack>
      }
    </nav>
  )
}

export default Navigation