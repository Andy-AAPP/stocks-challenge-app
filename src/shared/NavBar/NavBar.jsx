import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { logout } from '../../store/authSlice'
import styles from './NavBar.styles'

const NavBar = ({ backButton }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state => state.auth.user)

  return (
    <div style={styles.navContainer}>
      <h3>Mis Acciones</h3>
      <div style={styles.logoutContainer}>
        {backButton && <button style={styles.backButton} onClick={() => navigate(-1)}>Volver</button>}
        <h3>Usuario: {user}</h3>
        <button style={styles.logoutButton} onClick={() => dispatch(logout())}>Logout</button>
      </div>
    </div>
  )
}

export default NavBar