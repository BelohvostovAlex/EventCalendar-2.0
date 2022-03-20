import { Layout, Row, Space } from 'antd';
import React from 'react';
import { CalendarComponent } from '../components/CalendarComponent';
import { EventDrawer } from '../components/EventDrawer';

export const Event: React.FC = () => {

  return (
    <Layout style={{height: 'calc(100vh - 128px)'}}>
      <Space size="small" direction="vertical">
        <h1 style={{ textAlign: 'center', margin: '10px 0px' }}>Event Calendar</h1>
        <CalendarComponent events={[]} />
        <Row justify="center">
          <EventDrawer />
        </Row>
      </Space>
    </Layout>
  );
};
