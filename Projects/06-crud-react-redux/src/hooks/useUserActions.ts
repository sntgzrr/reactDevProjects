import { useAppDispatch } from '../hooks/store';
import { deleteUserById, UserId } from '../store/users/slice'

export function useUserActions(){
    const dispatch = useAppDispatch();

    const removeUser = (id: UserId) => {
        dispatch(deleteUserById(id))
    }

    return { removeUser }
}
