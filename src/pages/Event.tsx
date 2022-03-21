import { Layout, Row, Space, Modal } from 'antd';
import React from 'react';
import { CalendarComponent } from '../components/CalendarComponent';
import { EventDrawer } from '../components/EventDrawer';
import { useAppSelector } from '../hooks/useAppSelector';
import { fetchEvents } from '../store/reducers/event/eventFetchEvents';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { fetchGuests } from '../store/reducers/event/eventFetchGuestsThunk';
import { Loader } from '../components/Loader';

export const Event: React.FC = () => {
  const { username } = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const { events, isError, isLoading } = useAppSelector((state) => state.event);
  const [isModalVisible, setIsModalVisible] = React.useState<boolean>(false);

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  React.useEffect(() => {
    dispatch(fetchGuests());
    dispatch(fetchEvents(username));
    if (isError) setIsModalVisible(true);
  }, []);

  return (
    <Layout style={{ height: 'calc(100vh - 128px)' }}>
      {isLoading && <Loader />}
      <Space size="small" direction="vertical">
        <h1 style={{ textAlign: 'center', margin: '10px 0px' }}>Event Calendar</h1>
        <CalendarComponent events={events} />
        <Row justify="center">
          <EventDrawer />
        </Row>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <p>{isError}</p>
        </Modal>
      </Space>
    </Layout>
  );
};
