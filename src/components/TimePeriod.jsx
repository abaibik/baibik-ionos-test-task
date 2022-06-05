import { useCallback, useState } from "react";
import { DateRangePicker } from "react-date-range";
import { useDispatch } from "react-redux";
import { setTimePeriod } from "../store/actions";
import "./TimePeriod.css";

export const TimePeriod = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const dispatch = useDispatch();

  const handleSelect = useCallback(
    (date) => {
      dispatch(setTimePeriod(date.selection.startDate, date.selection.endDate));
      setStartDate(date.selection.startDate);
      setEndDate(date.selection.endDate);
    },
    [dispatch]
  );

  return (
    <div className="time-period">
      <h2>Select a time period:</h2>
      <DateRangePicker
        startDatePlaceholder="Start Date"
        endDatePlaceholder="End Date"
        inputRanges={[]}
        staticRanges={[]}
        ranges={[selectionRange]}
        onChange={handleSelect}
        dateDisplayFormat="yyyy-MM-dd"
      />
    </div>
  );
};
