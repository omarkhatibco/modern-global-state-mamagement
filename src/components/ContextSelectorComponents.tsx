import { useDataContext } from '@/stores/context';
import { Button, Text, Box } from '@chakra-ui/react';
import { RenderCountsWrapper } from '@/components';
import { useContextSelector } from 'use-context-selector';
import { dataContext } from '@/stores/contextSelector';

export const SetterButton1 = () => {
  const increase = useContextSelector(
    dataContext,
    (state) => state.increaseValue1,
  );

  return (
    <RenderCountsWrapper name={'increaseValue1'}>
      <Button onClick={increase}>Increase Value 1</Button>
    </RenderCountsWrapper>
  );
};

export const SetterButton2 = () => {
  const increase = useContextSelector(
    dataContext,
    (state) => state.increaseValue2,
  );

  return (
    <RenderCountsWrapper name='increaseValue2'>
      <Button onClick={increase}>Increase Value 2</Button>
    </RenderCountsWrapper>
  );
};

export const GetterText1 = () => {
  const value = useContextSelector(dataContext, (state) => state.value1);

  return (
    <RenderCountsWrapper name='value1'>
      <Text>Value 1 is: {value}</Text>
    </RenderCountsWrapper>
  );
};

export const GetterText2 = () => {
  const value = useContextSelector(dataContext, (state) => state.value2);

  return (
    <RenderCountsWrapper name='value2'>
      <Text>Value 2 is: {value}</Text>
    </RenderCountsWrapper>
  );
};
