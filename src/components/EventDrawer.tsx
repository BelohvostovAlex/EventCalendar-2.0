import React from 'react'
import { Drawer,  Button, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { EventForm } from './EventForm';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { fetchGuests } from '../store/reducers/event/eventFetchGuestsThunk';
import { createEvent } from '../store/reducers/event/createEvent';
import { fetchEvents } from '../store/reducers/event/eventFetchEvents';
import { useAppSelector } from '../hooks/useAppSelector';
import { IEvent } from '../models/IEvent';

export const EventDrawer: React.FC = () => {
    const [visible, setVisible] = React.useState<boolean>(false)
    const dispatch = useAppDispatch()
    const {username} = useAppSelector(state => state.auth.user)

    const showDrawer = () => {
        setVisible(prev => !prev)
      };
    const onClose = () => {
        setVisible(false)
      };

      React.useEffect(() => {
        dispatch(fetchGuests())
        dispatch(fetchEvents(username))
      }, [])

    const {guests, events} = useAppSelector(state => state.event)

    const onSubmit = (myEvent: IEvent) => {
      dispatch(createEvent(myEvent))
      setVisible(false)
    }
    
  return (
      <>
      <Button onClick={showDrawer} icon={<PlusOutlined/>}>Add en event</Button>
        <Drawer title="Create a new event"
          width={720}
          onClose={onClose}
          visible={visible}
          bodyStyle={{ paddingBottom: 80 }}
          extra={
            <Space>
              <Button onClick={onClose}>Cancel</Button>
            </Space>
          }>
          <EventForm guests={guests} submit={onSubmit}/>
        </Drawer>
        </>
  )
}
