import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [isHide, setIsHide] = useState(false);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const [validation, setValidation] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const reset = () => {
    setFormDetails(formInitialDetails);
  };

  const validate = () => {
    const { firstName, lastName, email, message } = formDetails;
    if (
      formDetails.firstName === "" ||
      formDetails.lastName === "" ||
      formDetails.email === "" ||
      formDetails.message === ""
    ) {
      return setValidation(false);
    }
    return setValidation(true);
  };

  const handleSubmit = async (data) => {
    try {
      const send = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const response = await send.json();
      //if sucess do whatever you like, i.e toast notification
      // setTimeout(() => reset(), 2000);
      if (response.success) {
        setStatus({ success: true, message: response.message });
        setButtonText("Sent");
        setTimeout(() => reset(), 2000);
      } else {
        setStatus({ success: false, message: response.message });
      }
    } catch (error) {
      // toast error message. whatever you wish
    }
  };

  const resetAll = () => {
    reset();
    setStatus({});
    setButtonText("Send");
    setIsHide(false);
    setValidation({})
  };

  useEffect(() => {
    if (validation === true) {
      setIsHide(true);
      setButtonText("Sending...");
      handleSubmit(formDetails);
    }
  }, [validation]);

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <Image
              src="/img/contact-img.svg"
              alt="Contact me"
              width="100%"
              height="100%"
              layout="responsive"
            />
          </Col>
          <Col
            xs={12}
            md={6}
            style={{
              display: "grid",
              gridTemplateRows: "80px 350px 80px",
            }}
          >
            <h2>Contact Me</h2>
            <div className="contact-parent">
              <AnimatePresence exitBeforeEnter>
                {Object.keys(status).length !== 0 && (
                  <motion.div
                    key={"status" + status.success}
                    // positionTransition
                    initial={{ opacity: 0, scale: 1.6 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: { delay: 0.5 },
                    }}
                    exit={{ opacity: 0, scale: 0.5 }}
                  >
                    <motion.div className={`h-100 d-flex align-items-center`}>
                      <div
                        className={`alert alert-${
                          (status.success && "success") || "danger"
                        } w-100 h-50 d-flex align-items-center `}
                      >
                        {status.message}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence exitBeforeEnter>
                {Object.keys(status).length === 0 &&
                  !status.success &&
                  isHide === false && (
                    <motion.form
                      key={"form" + status.success}
                      id="contact-form"
                      onSubmit={(e) => {
                        e.preventDefault();
                        validate();
                      }}
                      layout
                      initial={{ opacity: 0, scale: 0.3 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { delay: 0.5 },
                      }}
                      exit={{ opacity: 0, scale: 0.1 }}
                    >
                      <Row>
                        <Col sm={6} className="px-1">
                          <input
                            type="text"
                            value={formDetails.firstName}
                            placeholder="First Name *"
                            onChange={(e) => {
                              onFormUpdate("firstName", e.target.value);
                            }}
                            style={{
                              border:
                                formDetails.firstName.length === 0 &&
                                !validation &&
                                "2px solid red",
                            }}
                          />
                        </Col>
                        <Col sm={6} className="px-1">
                          <input
                            type="text"
                            value={formDetails.lastName}
                            placeholder="Last Name *"
                            onChange={(e) => {
                              onFormUpdate("lastName", e.target.value);
                            }}
                            style={{
                              border:
                                formDetails.lastName.length === 0 &&
                                !validation &&
                                "2px solid red",
                            }}
                          />
                        </Col>
                        {/* ------------- */}
                        <Col sm={6} className="px-1">
                          <input
                            type="email"
                            value={formDetails.email}
                            placeholder="Email Address *"
                            onChange={(e) => {
                              onFormUpdate("email", e.target.value);
                            }}
                            style={{
                              border:
                                formDetails.email.length === 0 &&
                                !validation &&
                                "2px solid red",
                            }}
                          />
                        </Col>
                        <Col sm={6} className="px-1">
                          <input
                            type="tel"
                            value={formDetails.phone}
                            placeholder="Phone Number"
                            onChange={(e) => {
                              onFormUpdate("phone", e.target.value);
                            }}
                          />
                        </Col>
                        <Col sm={12} className="px-1">
                          <textarea
                            rows="6"
                            placeholder="Message *"
                            value={formDetails.message}
                            onChange={(e) => {
                              onFormUpdate("message", e.target.value);
                            }}
                            style={{
                              border:
                                formDetails.message.length === 0 &&
                                !validation &&
                                "2px solid red",
                            }}
                          />
                        </Col>
                      </Row>
                    </motion.form>
                  )}
              </AnimatePresence>
            </div>
            {Object.keys(status).length !== 0 && (
              <button className="py-2 px-4" onClick={resetAll}>
                <span>
                  {status.success ? "Send Another Message" : "Try Again"}
                </span>
              </button>
            )}
            {Object.keys(status).length === 0 && !status.success && (
              <button type="submit" form="contact-form">
                <span>{buttonText}</span>
              </button>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
