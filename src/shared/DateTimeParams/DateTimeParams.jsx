import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateTimeParams = ({ placeholderText, minDate, maxDate, date, setDate }) => (
  <DatePicker
    selected={date}
    onChange={setDate}
    showTimeSelect
    dateFormat="Pp"
    placeholderText={placeholderText}
    minDate={minDate}
    maxDate={maxDate}
  />
)

export default DateTimeParams