import { atom } from 'jotai';

export type Store = {
  value1: number;
  value2: number;
};

export const value1Atom = atom(0);
export const value2Atom = atom(0);
