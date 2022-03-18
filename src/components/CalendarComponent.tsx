import React from 'react'
import { Calendar } from 'antd'
import { IEvent } from '../models/IEvent'

interface CalendarComponentProps {
  events: IEvent[]
}

export const CalendarComponent: React.FC<CalendarComponentProps> = () => {
  return (
    <Calendar fullscreen={false} />
  )
}
