import React from 'react';
import { Form, Input, Select, DatePicker, Button } from 'antd';
import { rules } from '../utils/rules';
import { Moment } from 'moment';
import { IUser } from '../models/IUser';
import { IEvent } from '../models/IEvent';
import { formatDate } from '../utils/date';
import { useAppSelector } from '../hooks/useAppSelector';

interface EventFormProps {
  guests: IUser[];
  submit: (event: IEvent) => void;
}

export const EventForm: React.FC<EventFormProps> = ({ guests, submit }) => {
  const { username } = useAppSelector((state) => state.auth.user);
  const [event, setEvent] = React.useState<IEvent>({
    author: '',
    title: '',
    date: '',
    guest: '',
    description: '',
  });

  const selectDate = (date: Moment | null) => {
    if (date) {
      setEvent({
        ...event,
        date: formatDate(date),
        author: username,
      });
    }
  };

  const submitForm = () => {
    submit(event);
  };

  return (
    <Form layout="vertical" hideRequiredMark onFinish={submitForm}>
      <Form.Item name="title" label="Title" rules={[rules.required('Please enter the title')]}>
        <Input
          placeholder="Please enter the title"
          value={event.title}
          onChange={(e) => setEvent({ ...event, title: e.target.value })}
        />
      </Form.Item>
      <Form.Item name="guests" label="Guests" rules={[rules.required('guests')]}>
        <Select
          placeholder="Please choose the guest(s)"
          onChange={(guest: string) => setEvent({ ...event, guest })}>
          {guests.map((guest) => (
            <Select.Option value={guest.username} key={guest.username}>
              {guest.username}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="date"
        label="Date"
        rules={[
          rules.required('Please choose the date'),
          rules.isDateAfter('The date is no valid more'),
        ]}>
        <DatePicker format="YYYY-MM-DD" onChange={(date) => selectDate(date)} />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[rules.required('please enter ur description')]}>
        <Input.TextArea
          rows={4}
          placeholder="please enter url description"
          value={event.description}
          onChange={(e) => setEvent({ ...event, description: e.target.value })}
        />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};
