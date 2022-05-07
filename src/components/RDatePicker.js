import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function RDatePicker(props) {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker
      name="dateOfBirth"
      value={startDate}
      selected={startDate}
      onChange={(date: Date) => setStartDate(date)}
      onClickOutside={props.handleChange}
      maxDate={new Date()}
      yearDropdownItemNumber={50}
      scrollableYearDropdown={true}
      showYearDropdown
      showMonthDropdown
      isClearable
    />
  );
}
