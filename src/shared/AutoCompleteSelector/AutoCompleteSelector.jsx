import React, { useState, useRef } from 'react'

import useClickoutside from '../../hooks/useClickoutside'
import CustomInput from '../CustomInput/CustomInput'
import styles from './AutoCompleteSelector.styles'

const AutoCompleteSelector = ({ options, customAction }) => {
  const [display, setDisplay] = useState(false);
  const [value, setValue] = useState('')
  const autoCompleteRef = useRef(null);

  useClickoutside(autoCompleteRef, () => setDisplay(false))

  return (
    <div style={styles.container} ref={autoCompleteRef}>
      <CustomInput
        placeholder="(Autocomplete)"
        value={value}
        onChange={setValue}
        onClick={() => setDisplay(!display)}
      />
      {display && (
        <div style={styles.autoContainer}>
          {options
            .filter(({ name }) => name.indexOf(value.toLowerCase()) > -1)
            .map((value, index) => {
              return (
                <div
                  onClick={() => {
                    setDisplay(false)
                    setValue(value.symbol)
                    customAction(value)
                  }}
                  style={styles.option}
                  key={index}
                  tabIndex="0"
                >
                  {value.symbol}
                </div>
              );
            })}
        </div>
      )}
    </div>
  )
}

export default AutoCompleteSelector;
