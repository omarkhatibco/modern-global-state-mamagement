import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import { LinkProps as NextLinkProps } from 'next/dist/client/link';
import NextLink from 'next/link';
import { PropsWithChildren } from 'react';

export type NextChakraLinkProps = PropsWithChildren<
  NextLinkProps & Omit<ChakraLinkProps, 'as'>
>;

//  Has to be a new component because both chakra and next share the `as` keyword
export const NextChakraLink = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  children,
  ...chakraProps
}: NextChakraLinkProps) => {
  return (
    <ChakraLink
      passHref={true}
      href={href}
      as={NextLink}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      {...chakraProps}
    >
      {children}
    </ChakraLink>
  );
};
