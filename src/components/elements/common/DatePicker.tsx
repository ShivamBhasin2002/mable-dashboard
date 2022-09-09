import { useState } from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'assets/styles/datePicker.css';

import { ComponentWrapper } from 'components/elements/common';

import { useDispatch, useSelector } from 'redux/store';
import { setDates, setPreset } from 'redux/reducers/dashboardSlice';

import { DatePickerPresets } from 'utility/constants/general';

const DatePicker = () => {
  const dispatch = useDispatch();
  const { dateRange, datePreset } = useSelector((state) => state.dashboard);
  const [focusedInput, setFocusedInput] = useState<any>('startDate'); //eslint-disable-line
  return (
    <ComponentWrapper
      width={1000}
      className="!rounded-[10px] shadow-xl shadow-background !h-[513px] flex flex-row justify-between"
    >
      <div className="flex-grow">
        <DateRangePicker
          startDate={dateRange[0]}
          endDate={dateRange[1]}
          startDateId="startDateIdentifier"
          endDateId="endDateIdentifier"
          onDatesChange={({ startDate, endDate }) => {
            dispatch(setDates([startDate, endDate]));
          }}
          focusedInput={focusedInput}
          onFocusChange={(focusedInput) => {
            if (!focusedInput) return;
            setFocusedInput(focusedInput);
          }}
          displayFormat="DD.MM.YY"
          isOutsideRange={() => false}
          keepOpenOnDateSelect
          keepFocusOnInput
        />
      </div>
      <div className="flex flex-col pl-[50px] pr-[120px] border-l-[1px] border-lines/[0.2] gap-[20px] text-[16px] leading-[19px]">
        <h5 className="font-lato font-bold text-primary mb-[4px] ">Presets</h5>
        {Object.values(DatePickerPresets).map((preset, i) => (
          <div
            key={`${i}${preset}`}
            className={`font-lato ${
              preset === datePreset ? 'text-primary' : 'text-secondary hover:text-primary/[0.7]'
            } cursor-pointer`}
            onClick={() => {
              dispatch(setPreset(preset));
            }}
          >
            {preset}
          </div>
        ))}
      </div>
    </ComponentWrapper>
  );
};

export default DatePicker;
