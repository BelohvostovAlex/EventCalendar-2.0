import { IUser } from "../../../models/IUser";

export interface authInitialState {
    isAuth: boolean,
    user: IUser,
    isLoading: boolean,
    isError: string
}

