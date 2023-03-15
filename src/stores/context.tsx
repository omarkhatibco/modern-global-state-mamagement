import { createContext, PropsWithChildren, useContext, useState } from 'react';

export type Store = {
  value1: number;
  value2: number;
  increaseValue1: () => void;
  increaseValue2: () => void;
};

const dataContext = createContext<Partial<Store>>({});

export const DataProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);

  const increaseValue1 = () => {
    setValue1((value) => value + 1);
  };
  const increaseValue2 = () => {
    setValue2((value) => value + 1);
  };

  return (
    <dataContext.Provider
      value={{
        value1,
        increaseValue1,
        value2,
        increaseValue2,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(dataContext);
};
