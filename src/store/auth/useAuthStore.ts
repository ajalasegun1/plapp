import AsyncStorage from '@react-native-async-storage/async-storage';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

export type User = {
  name: string;
  email: string;
  password: string;
};

type SaveUserProp = {
  user: User;
  token: string;
};

type AuthStore = {
  users: User[];
  token?: string;
  user?: User;
  saveUser: ({user, token}: SaveUserProp) => void;
  login: ({user, token}: SaveUserProp) => void;
  logout: () => void;
};

const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      users: [],
      user: undefined,
      token: undefined,

      saveUser: ({user, token}) => {
        const users = get().users;
        set({users: [...users, user], token: token, user});
      },
      login: ({user, token}) => {
        set({user, token});
      },
      logout: () => {
        set({user: undefined, token: undefined});
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useAuthStore;
