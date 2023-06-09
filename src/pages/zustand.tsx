import Head from 'next/head';
import { SimpleGrid, VStack } from '@chakra-ui/react';
import { Layout } from '@/components';
import {
  GetterText1,
  SetterButton1,
  SetterButton2,
  GetterText2,
} from '@/components/ZustandComponents';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout title='Zustand API as global state management'>
        <SimpleGrid columns={2}>
          <VStack align={'stretch'}>
            <SetterButton1 />
            <GetterText1 />
          </VStack>
          <VStack align={'stretch'}>
            <SetterButton2 />
            <GetterText2 />
          </VStack>
        </SimpleGrid>
      </Layout>
    </>
  );
}
