import React, { useState, useEffect } from "react";
import {  useLocation,useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const EditContact = ({ updateContactHandler }) => {
  const location = useLocation();
  const navigate = useNavigate();


  
  const [contact, setContact] = useState({
    id: "",
    name: "",
    email: "",
  });

  useEffect(() => {
    const { id, name, email } = location.state;
    setContact({ id, name, email });
  }, [location.state]);

  const update = (e) => {
    e.preventDefault();
    if (contact.name === "" || contact.email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    updateContactHandler(contact);
    setContact({ id: "", name: "", email: "" });
    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Edit Contact</h2>
      <Form onSubmit={update}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3 " controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default EditContact;
