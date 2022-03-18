import React from 'react'
import { Drawer,  Button, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import { EventForm } from './EventForm';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { fetchGuests } from '../store/reducers/event/eventFetchGuestsThunk';
import { useAppSelector } from '../hooks/useAppSelector';

export const EventDrawer: React.FC = () => {
    const [visible, setVisible] = React.useState<boolean>(false)
    const dispatch = useAppDispatch()

    const showDrawer = () => {
        setVisible(prev => !prev)
      };
    const onClose = () => {
        setVisible(false)
      };

      React.useEffect(() => {
        dispatch(fetchGuests())
      }, [])
    const {guests} = useAppSelector(state => state.event)
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
              <Button onClick={onClose} type="primary">
                Submit
              </Button>
            </Space>
          }>
          <EventForm guests={guests}/>
        </Drawer>
        </>
  )
}
