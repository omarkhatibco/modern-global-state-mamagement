import { Container } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { Header } from '@/components';

interface Props {
  title: string;
}

export const Layout: React.FC<PropsWithChildren<Props>> = ({
  children,
  title,
}) => {
  return (
    <>
      <Header title={title} />
      <Container as='main' maxW={'container.xl'} py={18}>
        {children}
      </Container>
    </>
  );
};
