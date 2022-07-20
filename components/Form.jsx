import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";

const Form = ({
  handleSubmit,
  onFormUpdate,
  buttonText,
  formDetails,
  status,
}) => {
  return (
    !status?.success && (
      <AnimatePresence exitBeforeEnter>
        <motion.form
          key={status?.success}
          onSubmit={(e) => handleSubmit(formDetails, e)}
          // positionTransition
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
        >
          <Row>
            <Col sm={6} className="px-1">
              <input
                type="text"
                value={formDetails?.firstName}
                placeholder="First Name"
                onChange={(e) => {
                  onFormUpdate("firstName", e.target.value);
                }}
              />
            </Col>
            <Col sm={6} className="px-1">
              <input
                type="text"
                value={formDetails?.lastName}
                placeholder="Last Name"
                onChange={(e) => {
                  onFormUpdate("lastName", e.target.value);
                }}
              />
            </Col>
            {/* ------------- */}
            <Col sm={6} className="px-1">
              <input
                type="email"
                value={formDetails?.email}
                placeholder="Email Address"
                onChange={(e) => {
                  onFormUpdate("email", e.target.value);
                }}
              />
            </Col>
            <Col sm={6} className="px-1">
              <input
                type="tel"
                value={formDetails?.phone}
                placeholder="Phone Number"
                onChange={(e) => {
                  onFormUpdate("phone", e.target.value);
                }}
              />
            </Col>
            <Col sm={12} className="px-1">
              <textarea
                rows="6"
                placeholder="Message"
                value={formDetails?.message}
                onChange={(e) => {
                  onFormUpdate("message", e.target.value);
                }}
              />
              <button type="submit">
                <span>{buttonText}</span>
              </button>
            </Col>
          </Row>
        </motion.form>
      </AnimatePresence>
    )
  );
};

export default Form;
