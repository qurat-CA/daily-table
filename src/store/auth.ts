import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persist, createJSONStorage} from 'zustand/middleware';

type BaseUrl_Type = {
  url: string;
  updateUrl: (url: string) => void;
};

type User_Type = {
  id: number;
  email: string;
  password: string;
  updateUser: (id: number, email: string, password: string) => void;
};

const baseUrl = create<BaseUrl_Type>()(
  persist(
    set => ({
      url: '',
      updateUrl: url => set(() => ({url})),
    }),
    {
      name: 'base-url',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

const user = create<User_Type>()(
  persist(
    set => ({
      id: 0,
      email: '',
      password: '',
      updateUser: (id, email, password) => set(() => ({id, email, password})),
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default {
  baseUrl,
  user,
};
