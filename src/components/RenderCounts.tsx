import { Text } from '@chakra-ui/react';

export const RenderCounts: React.FC<{ rendersCount: number }> = ({
  rendersCount,
}) => {
  return (
    <Text fontSize={'xs'} color='gray.500'>
      Renders count: {rendersCount}
    </Text>
  );
};
