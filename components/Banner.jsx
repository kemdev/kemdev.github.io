import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

// react bootstrap icons
import { ArrowRightCircle } from "react-bootstrap-icons";

//framer motion
import { motion } from "framer-motion";

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);

  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Fullstack Developer", "Frontend Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  // period until it delete the current word
  const period = 800;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate?.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text?.length - 1)
      : fullText.substring(0, text?.length + 1);

    setText(updatedText);

    if (isDeleting) setDelta((prevDelta) => prevDelta / 2);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline user-select-none">Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Kareem `}
              <span className="wrap txt-rotate">{text}</span>
            </h1>
            <button onClick={() => console.log("connect")}>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{type: "spring", stiffness: 100}}
            >
              <img src="/img/header-img.svg" alt="Header img" />
            </motion.div>
          </Col>
        </Row>
      </Container>
      <div
        id="skills"
        style={{ position: "absolute", height: 150, bottom: "8rem" }}
      />
    </section>
  );
}
