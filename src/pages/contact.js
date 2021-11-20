import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Form, Button, FloatingLabel, Row, Col, Alert } from "react-bootstrap";

export default function Contact() {
  const form = useRef();
  const [sentEmail, setSentEmail] = useState(false);

  //* email client
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_si0f3os",
        "template_2rb69q7",
        form.current,
        "user_gs7p5SZrAlHxdsqvjsfFp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
    setSentEmail(true);
  }

  return (
    <div className="container">
      <Row>
        <Col md={6}>
          <Form ref={form} className=" contact " onSubmit={sendEmail}>
            <h2>Send me a message</h2>
            <FloatingLabel controlId="name" label="Your name" className="mb-3 ">
              <Form.Control type="text" name="name" required />
            </FloatingLabel>

            <FloatingLabel
              controlId="email"
              label="Your email"
              className="mb-3"
            >
              <Form.Control type="email" name="email" required />
            </FloatingLabel>

            <FloatingLabel controlId="message" label="Your message">
              <Form.Control
                as="textarea"
                placeholder="Leave your message here"
                style={{ height: "20vh" }}
                name="message"
                required
              />
            </FloatingLabel>
            <div className="d-grid gap-2 m-3">
              <Button
                type="submit"
                variant="btn btn-info"
                size="lg"
                value="Send message"
              >
                Send
              </Button>
            </div>
          </Form>
        </Col>
        <Col md={6}></Col>
      </Row>
      {/*  add modal for this */}
      {sentEmail && (
        <Alert variant="success">
          <Alert.Heading>Hey, nice to see you</Alert.Heading>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <p className="mb-0">
            Whenever you need to, be sure to use margin utilities to keep things
            nice and tidy.
          </p>
        </Alert>
      )}
    </div>
  );
}
