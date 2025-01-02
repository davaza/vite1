
import { create } from 'zustand';

interface IUser
    {
    key: string
    name: string
    age?: number
    }

interface IUsersStore{
    users: IUser[],
    addUser: (newUser: IUser) => void,
    updateUsers: (newUsers: IUser[]) => void
}

export const useStore = create<IUsersStore>()((set)=>({
    users: [],
    addUser: (newUser) => set((state)=>({users: [...state.users, newUser]})),
    updateUsers: (newUsers) => set(()=>{
        return ({users: newUsers})})
}))