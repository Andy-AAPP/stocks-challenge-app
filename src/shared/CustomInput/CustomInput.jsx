import React from 'react'

const CustomInput = ({ inputType, label, options = [], placeholder, type = 'text', value, onChange, onClick = () => {} }) => {
  const RenderInput = () => {
    switch(inputType) {
      case 'selector':
        return (
          <select placeholder={placeholder} value={value} onChange={({ target: { value } }) => onChange(value)}>
            {options.map((item, index) => (
              <option value={item.value} key={index}>{item.label}</option>
            ))}
          </select>
        )
      default:
        return <input onClick={onClick} type={type} placeholder={placeholder} value={value} onChange={({ target: { value } }) => onChange(value)} />
    }
  }
  
  return (
    <>
      <h3>{label}</h3>
      <RenderInput />
    </>
  )
}

export default CustomInput