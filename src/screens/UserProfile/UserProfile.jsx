import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { fetchSymbolsData, setSelectedSymbol, deleteSelectedSymbol } from '../../store/apiSlice'
import AutoCompleteSelector from '../../shared/AutoCompleteSelector/AutoCompleteSelector'
import NavBar from '../../shared/NavBar/NavBar'
import styles from './styles'

const UserProfile = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [symbol, setSymbol] = useState("");
  const options = useSelector(state => state.api.symbols)
  const selectedSymbols = useSelector(state => state.api.selectedSymbols)

  useEffect(() => {
    dispatch(fetchSymbolsData())
  }, [])
  

  return (
    <div style={styles.container}>
      <NavBar />
      <div style={styles.box}>
        <h2 style={styles.text}>Simbolo</h2>
        <AutoCompleteSelector
          options={options}
          customAction={setSymbol}
        />
        <button style={styles.symbolButton} onClick={() => symbol && dispatch(setSelectedSymbol(symbol))}>Agregar Simbolo</button>
      </div>
      <table style={styles.tableContainer}>
        <thead style={styles.tableHeadersContainer}>
          <tr>
            <th style={styles.tableHeaders}>Simbolo</th>
            <th style={styles.tableHeaders}>Nombre</th>
            <th style={styles.tableHeaders}>Moneda</th>
            <th style={styles.tableHeaders} />
          </tr>
        </thead>
        <tbody>
          {selectedSymbols.length ? selectedSymbols.map((value, index) => (
            <tr key={index}>
              <td style={{ ...styles.tableData, ...styles.deleteButton }} onClick={() => navigate('/action-details', { state: { symbol: value.symbol } })}>{value.symbol}</td>
              <td style={styles.tableData}>{value.name}</td>
              <td style={styles.tableData}>{value.currency}</td>
              <td style={{ ...styles.tableData, ...styles.deleteButton }} onClick={() => dispatch(deleteSelectedSymbol(value))}>
                Eliminar
              </td>
            </tr>
          )) : null}
        </tbody>
      </table>
    </div>    
  )
}

export default UserProfile