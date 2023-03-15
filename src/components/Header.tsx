import { Box, Flex, Heading, HStack, Spacer } from '@chakra-ui/react';
import { NextChakraLink } from '@/components';

interface Props {
  title: string;
}

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <Flex as='header' p={4} bgColor='gray.200'>
      <Heading as={'h1'} fontSize='h3'>
        {title}
      </Heading>
      <Spacer />
      <HStack>
        <NextChakraLink href='/'>Context API</NextChakraLink>
        <NextChakraLink href='/zustand'>Zustand API</NextChakraLink>
        <NextChakraLink href='/context-selector'>
          Context Selector API
        </NextChakraLink>
        <NextChakraLink href='/jotai'>Jotai API</NextChakraLink>
        <NextChakraLink href='/valtio'>Valtio API</NextChakraLink>
      </HStack>
    </Flex>
  );
};
