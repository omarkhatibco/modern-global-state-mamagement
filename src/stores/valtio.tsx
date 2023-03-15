import { proxy, useSnapshot } from 'valtio';

export type Store = {
  value1: number;
  value2: number;
  increaseValue1: () => void;
  increaseValue2: () => void;
};

export const valitoStore = proxy<Store>({
  value1: 0,
  value2: 0,
  increaseValue1: () => {
    valitoStore.value1 += 1;
  },
  increaseValue2: () => {
    valitoStore.value2 += 1;
  },
});
