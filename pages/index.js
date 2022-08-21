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

import ScrollToTop from "react-scroll-to-top";

import logo from "../public/img/backToTop.svg";

export default function Home() {
  const [skillsData, setSkillsData] = useState([]);
  const [general, setGeneral] = useState([]);
  const [highlighted, setHighlighted] = useState([]);
  const [replicate, setReplicate] = useState([]);
  const [collaborated, setCollaborated] = useState([]);
  const [threeD, setThreeD] = useState([]);

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
      case "threeD":
        setThreeD(data);
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
    getData("threeD");
    // getData();
  }, []);

  return (
    <div className={styles.container}>
      <ScrollToTop
        smooth
        component={<Image src={logo} layout="responsive" />}
        style={{ background: "#151515", width: "5rem", height: "5rem" }}
      />
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
            threeD={threeD}
          />
        </div>
      </main>
      <Contact />
      <Footer />
    </div>
  );
}

