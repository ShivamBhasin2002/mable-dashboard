import React, { useEffect, useState } from 'react';
import moment, { Moment } from 'moment';

import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import 'assets/styles/datePicker.css';
import { DateRange } from 'react-date-range';

import { ComponentWrapper } from 'components/common';

import { useDispatch, useSelector } from 'redux/store';
import { refresh, setDates, setPreset } from 'redux/reducers/datesSlice';

import { presetsToDateRange } from 'utility/functions/mappingFunctions';
import { DatePickerPresets } from 'utility/constants/enums';
import { datePickerProps } from 'utility/typeDefinitions/componentPropTypes';

const DatePicker = ({ close, isOpen }: datePickerProps) => {
  const dispatch = useDispatch();
  const { dateRange, datePreset } = useSelector((state) => state.dates);
  const [selectedDateRange, setSelectedDateRange] = useState<(Moment | undefined)[]>(dateRange);
  const [selectedPreset, setSelectedPreset] = useState<string | undefined>(datePreset);
  useEffect(() => {
    if (!isOpen) {
      setSelectedDateRange(dateRange);
      setSelectedPreset(datePreset);
    }
  }, [close, isOpen]);
  return (
    <ComponentWrapper width={1000} className="!rounded-[.625rem] shadow-xl shadow-background">
      <div className="flex flex-col lg:flex-row justify-between h-full gap-4">
        <div className="flex-grow flex flex-col justify-between gap-4">
          <h5 className="flex [&>*]:flex-1 font-lato font-bold text-primary mb-[.25rem] ">
            <div>Start Date</div>
            <div>End Date</div>
          </h5>
          <DateRange
            onChange={(ranges) => {
              const { selection } = ranges;
              const selected = [];
              if (selection.startDate) selected.push(moment(selection.startDate));
              if (selection.endDate) selected.push(moment(selection.endDate));
              setSelectedDateRange(selected);
            }}
            dateDisplayFormat="dd.mm.yyyy"
            editableDateInputs={true}
            endDatePlaceholder="End Date"
            weekStartsOn={0}
            fixedHeight={true}
            showPreview={true}
            maxDate={moment().add(1, 'days').toDate()}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={[
              {
                startDate: moment(selectedDateRange[0]).toDate(),
                endDate: moment(selectedDateRange[1]).toDate(),
                key: 'selection'
              }
            ]}
            direction="horizontal"
          />
          <div className="flex justify-start lg:justify-end gap-4">
            <button
              className="px-[3.5rem] py-[.8125rem] rounded-[.5rem] font-lato text-[1rem] font-bold bg-secondary text-light"
              onClick={() => {
                close();
                setSelectedDateRange(dateRange);
                setSelectedPreset(datePreset);
              }}
            >
              Cancel
            </button>
            <button
              className="px-[3.5rem] py-[.8125rem] rounded-[.5rem] font-lato text-[1rem] font-bold bg-primary text-light"
              onClick={() => {
                if (datePreset !== selectedPreset) dispatch(setPreset(selectedPreset));
                if (dateRange !== selectedDateRange) dispatch(setDates(selectedDateRange));
                dispatch(refresh(true));
                close();
              }}
            >
              Save
            </button>
          </div>
        </div>
        <div className="flex flex-col pl-[3.125rem] pr-[7.5rem] border-l-[.0625rem] border-lines/[0.2] gap-[1.25rem] text-[1rem] leading-[1.1875rem]">
          <h5 className="font-lato font-bold text-primary mb-[.25rem] ">Presets</h5>
          {Object.values(DatePickerPresets).map((preset, i) => (
            <div
              key={`${i}${preset}`}
              className={`font-lato ${
                preset === selectedPreset
                  ? 'text-primary'
                  : 'text-secondary hover:text-primary/[0.7]'
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
      </div>
    </ComponentWrapper>
  );
};

export default DatePicker;
