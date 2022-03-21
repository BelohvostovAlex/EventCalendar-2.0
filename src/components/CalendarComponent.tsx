import React from 'react';
import { Calendar, Badge } from 'antd';
import { IEvent } from '../models/IEvent';
import { Moment } from 'moment';
import { formatDate } from '../utils/date';

interface CalendarComponentProps {
  events: IEvent[];
}

export const CalendarComponent: React.FC<CalendarComponentProps> = ({ events }) => {
  
  const dateCellRender = (value: Moment) => {
    const formatedDate = formatDate(value);
    const currentEvents = events.filter((ev) => ev.date === formatedDate);
    return (
      <ul className="events">
        {currentEvents.map((event, i) => (
          <li key={i}>
            <Badge status={'success'} text={event.title} />
          </li>
        ))}
      </ul>
    );
  };

  return <Calendar fullscreen={true} dateCellRender={dateCellRender} />;
};
