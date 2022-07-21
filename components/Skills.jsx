import Carousel from "react-multi-carousel";
import Image from 'next/image'

import { Container, Row, Col } from "react-bootstrap";

import AnimatedSkillbar from "./CircularProgressbar";

import { motion } from "framer-motion";

const Skills = ({ data }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="skill">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <div className=" d-flex flex-wrap m-auto justify-content-center">
                {/* <Carousel
                  itemClass="test"
                  responsive={responsive}
                  infinit={true}
                  className="skill-slider"
                  autoPlay={true}
                  rewind
                  rewindWithAnimation
                > */}
                
                {data?.map((skill, index) => (
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      delay: index * 0.3,
                    }}
                    key={index}
                  >
                    <div
                      className="m-5 p-1 d-flex flex-column align-items-center"
                    >
                      <h5 className="my-3 display-6">{skill?.name}</h5>
                      <AnimatedSkillbar
                        value={skill?.value}
                        text={skill?.text}
                      />
                    </div>
                  </motion.div>
                ))}
                {/* </Carousel> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Image
        className="background-image-left"
        src="/img/color-sharp.png"
        alt="Image"
        layout='fill'
      />
    </section>
  );
};

export default Skills;
