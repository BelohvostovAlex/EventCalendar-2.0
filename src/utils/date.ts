import { Moment } from 'moment';

export const formatDate = (date: Moment | null): string | undefined => {
  let day = date?.date()! < 10 ? `0${date?.date()}` : date?.date();
  let year = date?.year();
  let month = date?.month()! < 10 ? `0${date?.month()! + 1}` : date?.month()! + 1;
  return `${day}.${month}.${year}`;
};
