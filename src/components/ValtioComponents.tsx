import { Button, Text } from '@chakra-ui/react';
import { RenderCountsWrapper } from '@/components';
import { valitoStore } from '@/stores/valtio';
import { useSnapshot } from 'valtio';

export const SetterButton1 = () => {
  const increase = () => {
    valitoStore.value1 += 1;
  };
  return (
    <RenderCountsWrapper name={'increaseValue1'}>
      <Button onClick={increase}>Increase Value 1</Button>
    </RenderCountsWrapper>
  );
};

export const SetterButton2 = () => {
  return (
    <RenderCountsWrapper name='increaseValue2'>
      <Button onClick={valitoStore.increaseValue2}>Increase Value 2</Button>
    </RenderCountsWrapper>
  );
};

export const GetterText1 = () => {
  const snap = useSnapshot(valitoStore);

  return (
    <RenderCountsWrapper name='value1'>
      <Text>Value 1 is: {snap.value1}</Text>
    </RenderCountsWrapper>
  );
};

export const GetterText2 = () => {
  const snap = useSnapshot(valitoStore);

  return (
    <RenderCountsWrapper name='value2'>
      <Text>Value 2 is: {snap.value2}</Text>
    </RenderCountsWrapper>
  );
};
