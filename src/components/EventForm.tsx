import React from 'react';
import { Form, Input, Select, DatePicker } from 'antd';
import { Option } from 'antd/lib/mentions';
import { rules } from '../utils/rules';
import moment from 'moment';
import { IUser } from '../models/IUser';
import { IEvent } from '../models/IEvent';

interface EventFormProps {
  guests: IUser[];
}

export const EventForm: React.FC<EventFormProps> = ({ guests }) => {
  const [event, setEvent] = React.useState<IEvent>({
    author: '',
    date: '',
    guest: '',
    description: '',
  });
  console.log(event)
  return (
    <Form layout="vertical" hideRequiredMark>
      <Form.Item name="title" label="Title" rules={[rules.required('Please enter the title')]}>
        <Input placeholder="Please enter the title" />
      </Form.Item>
      <Form.Item name="guests" label="Guests" rules={[rules.required('guests')]}>
        <Select placeholder="Please choose the guest(s)" onChange={(guest) => setEvent({...event, guest})}>
          {guests.map((guest) => (
            <Option value={guest.username} key={guest.username}>
              {guest.username}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item>
        <DatePicker
          format="YYYY-MM-DD HH:mm"
          showTime={{ defaultValue: moment('12:20', 'HH:mm') }}
        />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[rules.required('please enter url description')]}>
        <Input.TextArea rows={4} placeholder="please enter url description" />
      </Form.Item>
    </Form>
  );
};
