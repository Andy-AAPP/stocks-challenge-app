import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { USER, PASSWORD } from '../../constants/hardcoreData'
import CustomInput from '../../shared/CustomInput/CustomInput'
import { login, setUser } from '../../store/authSlice'
import styles from './styles'

const Login = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.user)
  const [password, setPassword] = useState('')
  const handleOnClick = () => {
    if(user === USER && password === PASSWORD) {
      dispatch(login())
    } else {
      alert('Usuario y/o contrasena invalidos')
    }
  }

  return (
    <div style={styles.loginBox}>
      <CustomInput label="Usuario" placeholder="Ingresar nombre de usuario" value={user} onChange={(newUser) => dispatch(setUser(newUser))} />
      <CustomInput label="Clave" placeholder="Ingresar clave" type="password" value={password} onChange={setPassword} />
      <button style={styles.button} onClick={handleOnClick}>Ingresar</button>
    </div>
  )
}

export default Login