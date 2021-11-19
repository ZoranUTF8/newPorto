import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Form, Button, FloatingLabel } from "react-bootstrap";

export default function Contact() {
  const form = useRef();

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
  }

  return (
    <Form ref={form} className="container contact " onSubmit={sendEmail}>
      <h2>Send me a message</h2>
      <FloatingLabel controlId="name" label="Your name" className="mb-3 ">
        <Form.Control type="text" name="name" />
      </FloatingLabel>

      <FloatingLabel controlId="email" label="Your email" className="mb-3">
        <Form.Control type="email" name="email" />
      </FloatingLabel>

      <FloatingLabel controlId="message" label="Your message">
        <Form.Control
          as="textarea"
          placeholder="Leave your message here"
          style={{ height: "20vh" }}
          name="message"
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
  );
}
