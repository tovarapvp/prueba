import Head from "next/head";
import Navbar from "../components/navbar";
import Inf from "../components/inf";
import Carousel from "../components/carousel";
import About from "../components/about";
import Worked from "../components/worked";
import HomeStyle from "../styles/Home.module.css";
import Built from "../components/built";
import Proyects from "../components/proyects";

export default function Home() {
  return (
    <>
      <Head>
        <title>At design</title>
      </Head>
      <Navbar />
      <main className={HomeStyle.main} >

     
      <Inf/>
      

      <About/>
      <Worked/>
      <Built/>
      <Proyects/>
        </main>
    </>
  );
}
