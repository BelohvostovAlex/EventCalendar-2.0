import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";

export interface eventInitialState {
    guests: IUser[],
    events: IEvent[]
}