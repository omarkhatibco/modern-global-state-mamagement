import { Button, Text } from '@chakra-ui/react';
import { RenderCountsWrapper } from '@/components';
import { value1Atom, value2Atom } from '@/stores/jotai';
import { useAtomValue, useSetAtom } from 'jotai';

export const SetterButton1 = () => {
  const setter = useSetAtom(value1Atom);

  const increase = () => {
    setter((val) => val + 1);
  };

  return (
    <RenderCountsWrapper name={'increaseValue1'}>
      <Button onClick={increase}>Increase Value 1</Button>
    </RenderCountsWrapper>
  );
};

export const SetterButton2 = () => {
  const setter = useSetAtom(value2Atom);

  const increase = () => {
    setter((val) => val + 1);
  };

  return (
    <RenderCountsWrapper name='increaseValue2'>
      <Button onClick={increase}>Increase Value 2</Button>
    </RenderCountsWrapper>
  );
};

export const GetterText1 = () => {
  // const value = useAtomValue(storeAtom);
  const val = useAtomValue(value1Atom);

  return (
    <RenderCountsWrapper name='value1'>
      <Text>Value 1 is: {val}</Text>
    </RenderCountsWrapper>
  );
};

export const GetterText2 = () => {
  // const value = useAtomValue(storeAtom);
  const val = useAtomValue(value2Atom);

  return (
    <RenderCountsWrapper name='value2'>
      <Text>Value 2 is: {val}</Text>
    </RenderCountsWrapper>
  );
};
