import React, { useState } from 'react'
import CustomInput from '../../shared/CustomInput/CustomInput';
import DateTimeParams from '../../shared/DateTimeParams/DateTimeParams';
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { fetchActionData } from '../../store/apiSlice'
import NavBar from '../../shared/NavBar/NavBar'
import RadioButton from '../../shared/RadioButton/RadioButton';
import styles from './ActionDetails.styles'
import { StockChart } from './components';

const ActionDetails = () => {
  const dispatch = useDispatch()
  const { state: { symbol } } = useLocation()
  const [dateValue, setDateValue] = useState('real-time')
  const [fromDate, setFromDate] = useState(new Date())
  const [toDate, setToDate] = useState(new Date())
  const [interval, setInterval] = useState('')
  const isHistorySelected = dateValue === 'history'
  const selectorOptions = [
    { label: '1 minuto', value: '1min' },
    { label: '5 minutos', value: '5min' },
    { label: '15 minutos', value: '15min' },
  ]
  
  return (
    <div style={styles.container}>
      <NavBar backButton />
      <div>
        <RadioButton style={styles.radioLabel} defaultChecked onChange={setDateValue} label='Tiempo Real' name="date" value="real-time" />
        <div style={styles.optionsContainer}>
          <RadioButton style={styles.radioLabel} onChange={setDateValue} label='Historico' name="date" value="history" />
          <DateTimeParams placeholderText="Fecha hora desde" date={isHistorySelected ? fromDate : null} setDate={setFromDate} maxDate={new Date()} />
          <DateTimeParams placeholderText="Fecha hora hasta" date={isHistorySelected ? toDate : null} setDate={setToDate} maxDate={new Date()} minDate={fromDate} />
        </div>
        <CustomInput
          options={selectorOptions}
          inputType="selector"
          label="Intervalo"
          placeholder="Seleccione intervalo"
          value={interval}
          onChange={setInterval}
        />
        <button style={styles.button} onClick={() => dispatch(fetchActionData({ symbol, interval, startDate: fromDate, endDate: toDate }))}>Graficar</button>
      </div>
      <StockChart />
    </div>
  );
}

export default ActionDetails