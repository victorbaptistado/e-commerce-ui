import { HStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { ImHome } from 'react-icons/im'
import { IoMdArrowRoundBack } from 'react-icons/io'
import { NavLink, useLocation } from 'react-router-dom'

const Navigation = () => {

  const [showHome, setShowHome] = useState(true);
  const [showProfile, setShowProfile] = useState(false);

  const home = "home";
  const profile = "profile";
/*
  function handleClick(data) {
    setShowHome(data === home);
    setShowProfile(data === profile);
  }
  
*/
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isProfile = location.pathname === "/profile";

  
  return (
    <nav className="App-header">
      {isHome &&
        <HStack>
          <NavLink to="/profile" >
            <CgProfile size={"3rem"}/>
          </NavLink>
        </HStack>
      }
      {isProfile &&
        <HStack>
          <NavLink to="/" >
            <IoMdArrowRoundBack size={"3rem"}/>
          </NavLink>
          <NavLink to="/" >
            <ImHome size={"3rem"}/>
          </NavLink>
        </HStack>
      }
    </nav>
  )
}

export default Navigation