import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AddContact({addContactHandler}) {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: "",
    email: "",
  });
  const add = (e) => {
    e.preventDefault();
    if (state.name === "" || state.email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    addContactHandler(state);
    setState({ name: "", email: "" });
    navigate("/");
  };
  return (
    <div className="container ">
      <h4>Add Contacts</h4>
      <Form onSubmit={add}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
        </Form.Group>
        <Button type="submit" className="px-3 " variant="primary">
          Add
        </Button>{" "}
      </Form>
    </div>
  );
}

export default AddContact;
