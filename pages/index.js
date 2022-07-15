import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Navbar from '../components/navbar';
import Inf from '../components/inf'
import Carousel from '../components/carousel';
import About from '../components/about';

export default function Home() {
  return (
    <div>
      <Head>
        <title>{siteTitle}</title>

      </Head>
      <Navbar/>
      <Inf/>
      <About></About>
      

    </div>
  );
}