import { Box } from '@chakra-ui/react';
import { PropsWithChildren, useEffect, useState } from 'react';
import { useRendersCount } from 'react-use';
import { RenderCounts } from '@/components';

export const Wrapper: React.FC<
  PropsWithChildren<{ name: string; key: number }>
> = ({ children, name }) => {
  useEffect(() => {
    console.log(`Wrapper ${name} did rerenderd`);
  });

  return (
    <Box
      borderColor={'transparent'}
      borderWidth={1}
      animation={'rerender 1s ease-in-out 1'}
    >
      {children}
    </Box>
  );
};

export const RenderCountsWrapper: React.FC<
  PropsWithChildren<{ name: string }>
> = ({ name, children }) => {
  const rendersCount = useRendersCount();
  return (
    <Wrapper name={name} key={rendersCount}>
      <RenderCounts rendersCount={rendersCount} />
      {children}
    </Wrapper>
  );
};
