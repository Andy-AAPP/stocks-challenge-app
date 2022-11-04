import React from 'react'
import styles from './RadioButton.styles'

const RadioButton = ({ label, name, value, onChange, defaultChecked = false }) => {
  return (
    <div style={styles.container} onChange={({ target: { value } }) => onChange(value)}>
      <input defaultChecked={defaultChecked} type="radio" name={name} value={value} />
      <label>{ label }</label>
    </div>
  )
}

export default RadioButton