import { useEffect, useState } from 'react';
import { Moment } from 'moment';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';
import 'react-dates/initialize';
import 'assets/styles/datePicker.css';

import { ComponentWrapper } from 'components/common';

import { useDispatch, useSelector } from 'redux/store';
import { refresh, setDates, setPreset } from 'redux/reducers/datesSlice';

import { presetsToDateRange } from 'utility/functions/mappingFunctions';
import { DatePickerPresets } from 'utility/constants/general';
import { datePickerProps } from 'utility/typeDefinitions/componentPropTypes';

const DatePicker = ({ close, isOpen }: datePickerProps) => {
  const dispatch = useDispatch();
  const { dateRange, datePreset } = useSelector((state) => state.dates);
  const [focusedInput, setFocusedInput] = useState<any>('startDate'); //eslint-disable-line
  const [selectedDateRange, setSelectedDateRange] = useState<(Moment | null)[]>(dateRange);
  const [selectedPreset, setSelectedPreset] = useState<string | undefined>(datePreset);
  useEffect(() => {
    if (!isOpen) {
      setSelectedDateRange(dateRange);
      setSelectedPreset(datePreset);
    }
  }, [close, isOpen]);
  return (
    <ComponentWrapper
      width={1000}
      className="!rounded-[10px] shadow-xl shadow-background !h-[530px] flex flex-row justify-between"
    >
      <div className="flex-grow flex flex-col justify-between">
        <DateRangePicker
          maxDate={moment()}
          startDate={selectedDateRange[0]}
          endDate={selectedDateRange[1]}
          startDateId="startDateIdentifier"
          endDateId="endDateIdentifier"
          onDatesChange={({ startDate, endDate }) => {
            setSelectedDateRange([startDate, endDate]);
            setSelectedPreset(undefined);
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
        <div className="flex justify-end gap-4 px-[45px]">
          <button
            className="px-[56px] py-[13px] rounded-[8px] font-lato text-[16px] font-bold bg-secondary text-light"
            onClick={() => {
              close();
              setSelectedDateRange(dateRange);
              setSelectedPreset(datePreset);
            }}
          >
            Cancel
          </button>
          <button
            className="px-[56px] py-[13px] rounded-[8px] font-lato text-[16px] font-bold bg-primary text-light"
            onClick={() => {
              dispatch(setPreset(selectedPreset));
              dispatch(setDates(selectedDateRange));
              dispatch(refresh());
              close();
            }}
          >
            Save
          </button>
        </div>
      </div>
      <div className="flex flex-col pl-[50px] pr-[120px] border-l-[1px] border-lines/[0.2] gap-[20px] text-[16px] leading-[19px]">
        <h5 className="font-lato font-bold text-primary mb-[4px] ">Presets</h5>
        {Object.values(DatePickerPresets).map((preset, i) => (
          <div
            key={`${i}${preset}`}
            className={`font-lato ${
              preset === selectedPreset ? 'text-primary' : 'text-secondary hover:text-primary/[0.7]'
            } cursor-pointer`}
            onClick={() => {
              setSelectedPreset(preset);
              setSelectedDateRange(presetsToDateRange(preset));
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
