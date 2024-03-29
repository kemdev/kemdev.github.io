import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

import headerImage from '../public/img/header-img.svg';

// react bootstrap icons
import { ArrowRightCircle } from 'react-bootstrap-icons';

//framer motion
import { motion, useTransform, useViewportScroll, useMotionValue } from 'framer-motion';

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);

  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ['Fullstack Developer', 'Frontend Developer'];
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  // const { scrollYProgress, scrollY } = useScroll();
  const { scrollYProgress, scrollY } = useViewportScroll();
  const scaleAnim = useTransform(scrollYProgress, [0, 0.2, 1], [1, 0.2, 0]);

  // const [scrollY, setScrollYProgress] = useState(1);

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
    let updatedText = isDeleting ? fullText.substring(0, text?.length - 1) : fullText.substring(0, text?.length + 1);

    setText(updatedText);

    if (isDeleting) setDelta((prevDelta) => prevDelta / 2);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section
      className='banner'
      id='home'
    >
      <Container>
        <Row className='align-items-center'>
          <Col
            xs={12}
            md={6}
            xl={7}
          >
            <span className='tagline user-select-none'>Welcome to my Portfolio</span>
            <h1>
              {`Hi I'm Kareem `}
              <span className='wrap txt-rotate'>{text}</span>
            </h1>
            <Link href='#contact'>
              <button>
                Let&apos;s Connect <ArrowRightCircle size={25} />
              </button>
            </Link>
          </Col>
          <Col
            xs={12}
            md={6}
            xl={5}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              // whileInView={{ opacity: 1, scale: 1 }}
              style={{ scale: scaleAnim }}
              transition={{ type: 'spring', stiffness: 100 }}
            >
              <Image
                src={headerImage}
                alt='Header img'
                // width="100%"
                // height="100%"
                // layout="responsive"
                // objectFit="contain"
                className='header-img'
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
      <div
        id='skills'
        style={{ position: 'absolute', height: 150, bottom: '8rem' }}
      />
    </section>
  );
}
