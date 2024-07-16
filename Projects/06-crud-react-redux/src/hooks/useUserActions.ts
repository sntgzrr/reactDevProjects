import { useAppDispatch } from '../hooks/store';
import { deleteUserById, addNewUser,  UserId } from '../store/users/slice'

interface User {
    name: string;
    email: string;
    github: string;
}

export function useUserActions(){
    const dispatch = useAppDispatch();

    const removeUser = (id: UserId) => {
        dispatch(deleteUserById(id))
    }

    const addUser = ({ name, email, github }: User) => {
        dispatch(addNewUser({ name, email, github }))
    }

    return { addUser, removeUser }
}
