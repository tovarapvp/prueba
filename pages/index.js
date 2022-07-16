import Head from 'next/head';
import Navbar from '../components/navbar';
import Inf from '../components/inf'
import Carousel from '../components/carousel';
import About from '../components/about';
import Worked from '../components/worked';

export default function Home() {
  return (
    
    <>
      <Head>
        <title>At design</title>

        </Head>
        <Navbar/>
        <main className={HomeStyle.main} >

     
      <Inf/>

      <About/>
      {/* <Footer/> */}
        </main>


    </>
  );
}