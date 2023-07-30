import React from 'react';
import RootLayout from '../../components/layout/RootLayout';
import AllProducts from '@/components/UI/AllProducts';
import Head from 'next/head';
import Banner from '@/components/UI/Banner';

const HomePage = ({allProducts}) => {
  return (
    <>
     <Head>
        <title>PC-Builder App</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <AllProducts allProducts={allProducts} />
    </>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page){
  return(
    <RootLayout>{page}</RootLayout>
  )
}

export const getStaticProps = async() => {
  const res = await fetch("https://pc-builder-server-phi.vercel.app/products")
  const data = await res.json()
  return{
    props :{
      allProducts: data
    }
  }
}
