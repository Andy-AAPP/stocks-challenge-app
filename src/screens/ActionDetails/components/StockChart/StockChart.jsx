import React, { useState } from 'react'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { useSelector } from 'react-redux'

import styles from './StockChart.styles'

const getRangeMinMax = (numbersBetween, min, max) => {
  const diferential = max - min
  const interval = diferential / numbersBetween
  return new Array(numbersBetween).fill(undefined).map((_, index, arr) =>  {
    if (!index) return Number(parseFloat(min).toFixed(2))
    if (index === arr.length - 1) return Number(parseFloat(max).toFixed(2))
    return Number(parseFloat(max - (interval * index)).toFixed(2))
  }).sort((a, b) => a - b)
}

const StockChart = () => {
  const [lowCotization, setLowCotization] = useState(0)
  const [highCotization, setHighCotization] = useState(0)
  const actionData = useSelector(state => state.api.actionData)
  
  if(!actionData?.values.length) return null;
  actionData.values.forEach(item => {
    if(!lowCotization || item.low < lowCotization) setLowCotization(item.low)
    if(!highCotization || item.high > highCotization) setHighCotization(item.high)
  })
  const range = getRangeMinMax(10, highCotization, lowCotization)

  const options = {
    title: {
      text: 'My chart'
    },
    xAxis: {
      categories: actionData.values.map(item => {
        const date = new Date(item.datetime)
        return date.getHours() + ':' + date.getMinutes();
      }),
    },
    series: [
      { data: range }
    ],
  }
  
  return (
    <div style={styles.stocksTable}>
      <HighchartsReact
        highcharts={Highcharts}
        allowChartUpdate
        options={options}
      />
    </div>
  )
}

export default StockChart