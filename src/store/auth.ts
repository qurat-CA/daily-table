import {create} from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persist, createJSONStorage} from 'zustand/middleware';

type BaseUrl_Type = {
  url: string;
  updateUrl: (url: string) => void;
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

export default {
  baseUrl,
};
