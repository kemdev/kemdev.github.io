import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import SSRProvider from "react-bootstrap/SSRProvider";

export default function Home() {
  const [skillsData, setSkillsData] = useState([]);
  const [general, setGeneral] = useState([]);
  const [highlighted, setHighlighted] = useState([]);
  const [replicate, setReplicate] = useState([]);
  const [collaborated, setCollaborated] = useState([]);

  const getData = async (url) => {
    const response = await fetch(`api/${url}`);
    const data = await response.json();
    switch (url) {
      case "skills":
        setSkillsData(data);
        break;
      case "general":
        setGeneral(data);
        break;
      case "highlighted":
        setHighlighted(data);
        break;
      case "replicate":
        setReplicate(data);
        break;
      case "collaborated":
        setCollaborated(data);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    getData("skills");
    getData("general");
    getData("highlighted");
    getData("replicate");
    getData("collaborated");
    // getData();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Abdulkarim Alarmanazi</title>
        <meta name="description" content="Abdulkarim Alarmanazi's portfolio" />

        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      <Navbar />
      <Banner />

      <main className={styles.main}>
        {/* <h1 className={styles.title}>Skills</h1> */}
        <Skills data={skillsData} />
        <p className={styles.description}></p>

        <div className={styles.grid}>
          <Project
            general={general}
            highlighted={highlighted}
            replicate={replicate}
            collaborated={collaborated}
          />
        </div>
      </main>
      <Contact />
      <Footer />
    </div>
  );
}
