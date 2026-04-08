import React, { useState, useRef,useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Backgroundimage from "../../Components/Backgroundimage/Backgroundimage";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import c from "../../images/Contact.jpg";
import './Contactus.css';
import emailjs from '@emailjs/browser';
import Alert from 'react-bootstrap/Alert';


function Contactus() {
   useEffect(()=>{  
    },
    [])
  const form = useRef();
  const [status, setStatus] = useState(""); // to show messages to user

  const sendForm = (e) => {
    e.preventDefault(); // prevent page refresh
    setStatus("In progress, please wait...");

    emailjs
      .sendForm(
        "service_9stfnz3",
        "template_dcmmscj",
        form.current,
        "maJH9xz_DCPKbVjx3"
      )
      .then(
        (result) => {
          setStatus("Message Sent Successfully!");
          form.current.reset(); // clears the form without reloading
        },
        (error) => {
          setStatus("FAILED to send message.");
        }
      );
  };
  return (
    <div>
      <Navbar contactus={{ color: "gray" }} />
      <Backgroundimage pagetitle1='Contact us' pagetitle2='Contact us'>
      </Backgroundimage>
      <br />
      <br />
      <div className="container">
        <div>
          <h1 class="text-center a-h1 tw">Contact
            <span className="span-h1">Us</span></h1>
          <div className="text-center" style={{ display: 'none' }}>
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
                      <div class="alert alert-primary" role="alert" style={{ display: status ? 'block' : 'none' }}>
                        {status && <p>{status}</p>} {/* show user-friendly status */}
                      </div>
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
                    <Button variant="dark" type="submit">
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






