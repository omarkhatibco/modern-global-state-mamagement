import { create } from 'zustand';

export type Store = {
  value1: number;
  value2: number;
  increaseValue1: () => void;
  increaseValue2: () => void;
};

export const useZustandStore = create<Store>((set) => ({
  value1: 0,
  value2: 0,
  increaseValue1: () => set((state) => ({ value1: state.value1 + 1 })),
  increaseValue2: () => set((state) => ({ value2: state.value2 + 1 })),
}));
