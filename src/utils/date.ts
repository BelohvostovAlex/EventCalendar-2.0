import moment, { Moment } from "moment";

export const formatDate = (date: Moment | null): string | undefined => {
      let day = date?.date()! < 10 ? `0${date?.date()}` : date?.date();
      let year = date?.year();
      let month =
        date?.month()! < 10 ? `0${date?.month()! + 1}` : date?.month()! + 1;
      let hour = date?.hour();
      let minutes = date?.minutes();
    return `${day}.${month}.${year} at ${hour}:${minutes}`
  };
