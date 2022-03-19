import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DatePicker from 'react-datepicker';
import setMinutes from 'date-fns/setMinutes';
import setHours from 'date-fns/setHours';
import 'react-datepicker/dist/react-datepicker.css';

export default function CustomTimePicker({ callback }) {
  const { t } = useTranslation();
  const [startTime, setStartTime] = useState(null);

  const handleColor = (time) => {
    return time.getHours() > 12 && time.getHours() < 14
      ? 'text-red-900'
      : 'text-indigo-900';
  };

  return (
    <DatePicker
      showTimeSelect
      showTimeSelectOnly
      selected={startTime}
      onChange={(date) => {
        setStartTime(date);
        callback(date.toLocaleTimeString());
      }}
      timeClassName={handleColor}
      placeholderText={t('bookAppointmentPage.timePlaceholder')}
      minTime={setHours(setMinutes(new Date(), 0), 8)}
      maxTime={setHours(setMinutes(new Date(), 0), 20)}
      dateFormat="h:mm aa"
      className="border-b-2 border-blue-700 focus:border-red-600 focus:outline-none rounded-sm"
    />
  );
}
