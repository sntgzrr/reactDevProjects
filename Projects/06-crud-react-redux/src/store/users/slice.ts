import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
    {
        id: "1",
        name: "santiago",
        email: "santiago@gg.com",
        github: "santiago",
    },
    {
        id: "2",
        name: "John Doe",
        email: "doe@gg.com",
        github: "doe",
    },
    {
        id: "3",
        name: "Papi Doe",
        email: "pdoe@gg.com",
        github: "pdoe",
    }
];

export type UserId = string;

export interface User {
    name: string;
    email: string;
    github: string;
}

export interface UserWithId extends User {
    id: UserId;
}

const initialState: UserWithId[] = (() => {
    const persistedState = localStorage.getItem("__redux__state__")
    if (persistedState){
        return JSON.parse(persistedState).users;
    }
    return DEFAULT_STATE;
})();

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addNewUser: (state, action: PayloadAction<User>) => {
            const id = crypto.randomUUID()
            return [ ...state, { id, ...action.payload }]
        },
        deleteUserById: (state, action: PayloadAction<UserId>) => {
            const id = action.payload
            return state.filter((user) => user.id != id)
        }
    }
})

export default usersSlice.reducer;

export const { addNewUser, deleteUserById } = usersSlice.actions;
