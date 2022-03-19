import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DatePicker from 'react-datepicker';
import subDays from 'date-fns/subDays';
import setMinutes from 'date-fns/setMinutes';
import setHours from 'date-fns/setHours';
import 'react-datepicker/dist/react-datepicker.css';

export default function CustomDatePicker({ callback }) {
  const { t } = useTranslation();
  const [startDate, setStartDate] = useState(null);

  const handleColor = (time) => {
    return time.getHours() > 12 && time.getHours() < 14
      ? 'text-red-900'
      : 'text-indigo-900';
  };

  const excludeDates = (value) => {
    const listOfExcludedDates = [];
    Array.from(
      { length: value },
      (x, i) => i && listOfExcludedDates.push(subDays(new Date(), i)),
    );
    return listOfExcludedDates;
  };
  return (
    <DatePicker
      // showTimeSelect
      selected={startDate}
      onChange={(date) => {
        setStartDate(date);
        callback(date);
      }}
      timeClassName={handleColor}
      placeholderText={t('bookAppointmentPage.datePlaceholder')}
      minTime={setHours(setMinutes(new Date(), 0), 8)}
      maxTime={setHours(setMinutes(new Date(), 0), 20)}
      excludeDates={excludeDates(30)}
      className="border-b-2 border-blue-700 focus:border-red-600 focus:outline-none rounded-sm"
    />
  );
}
