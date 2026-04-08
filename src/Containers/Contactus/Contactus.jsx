import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Backgroundimage from "../../Components/Backgroundimage/Backgroundimage";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import c from "../../images/Contact.jpg";
import './Contactus.css';
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';



function Contactus() {
  const form = useRef();

  const sendForm = (e) => {
    alert("in progress,please wait... and do not refresh the page");
    e.preventDefault();
    emailjs.sendForm(
      "service_9stfnz3",
      "template_dcmmscj",
      form.current,
      "maJH9xz_DCPKbVjx3"
    )
    .then(
      (result) => {
        alert("Message Sent Successfully!");
        window.location.reload(true);
      },
      (error) => {
        alert("FAILED...");
        window.location.reload(true);

      }
    );
  };
  return (
    <div>
      <Navbar contactus={{color:"gray"}}/>
      <Backgroundimage pagetitle1='Contact us' pagetitle2='Contact us'>
      </Backgroundimage>
      <br />
      <br />
      <div className="container">
        <div>
          <h1 class="text-center a-h1 tw">Contact
            <span className="span-h1">Us</span></h1>
          <div className="text-center" style={{display: 'none'}}>
          <Alert variant="success" id='success-alert'>
          in progress
          </Alert>
          </div>
          <br />
          <Container className="mt-5">
            <div className="bg-danger contact-section">
              <Row className="align-items-center">
                {/* Image Section */}
                <Col md={6}>
                  <Image
                    src={c}
                    alt="Contact Us"
                    fluid
                    rounded
                  />
                </Col>
                {/* Form Section */}
                <Col md={6}>
                  <h2 className="mb-4">Contact Us</h2>
                  <Form ref={form} onSubmit={sendForm}>
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={4}
                        name="message"
                        placeholder="Write your message"
                        required />
                    </Form.Group>
                    <Button  variant="dark" type="submit">
                      Send Message
                    </Button>
                  </Form>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}
export default Contactus;






