import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import Slider from "../components/Slider/Slider";
import GamesHub from "../components/GamesHub/GamesHub";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Navigation />
      <Slider />
      <GamesHub />
    </div>
  );
}
