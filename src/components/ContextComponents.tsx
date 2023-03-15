import { useDataContext } from '@/stores/context';
import { Button, Text, Box } from '@chakra-ui/react';
import { RenderCountsWrapper } from '@/components';

export const SetterButton1 = () => {
  const { increaseValue1 } = useDataContext();

  return (
    <RenderCountsWrapper name={'increaseValue1'}>
      <Button onClick={increaseValue1}>Increase Value 1</Button>
    </RenderCountsWrapper>
  );
};

export const SetterButton2 = () => {
  const { increaseValue2 } = useDataContext();

  return (
    <RenderCountsWrapper name='increaseValue2'>
      <Button onClick={increaseValue2}>Increase Value 2</Button>
    </RenderCountsWrapper>
  );
};

export const GetterText1 = () => {
  const { value1 } = useDataContext();

  return (
    <RenderCountsWrapper name='value1'>
      <Text>Value 1 is: {value1}</Text>
    </RenderCountsWrapper>
  );
};

export const GetterText2 = () => {
  const { value2 } = useDataContext();

  return (
    <RenderCountsWrapper name='value2'>
      <Text>Value 2 is: {value2}</Text>
    </RenderCountsWrapper>
  );
};
