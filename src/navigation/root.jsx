import React from 'react'
import { useSelector } from 'react-redux'
import {
  Route,
  Routes
} from "react-router-dom";

import { Login, UserProfile, ActionDetails } from '../screens'

const Root = () => {
  const isLoggedIn = useSelector(store => store.auth.isLoggedIn)

  return (
    <Routes>
      {isLoggedIn ? (
        <>
          <Route path='/' element={<UserProfile />}/>
          <Route path='/action-details' element={<ActionDetails />}/>
        </>
      ) : <Route path='/' element={<Login />}/>}
    </Routes>
  )
}

export default Root