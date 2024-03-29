import React from "react";
import user from "../images/user.png";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function ContactDetails(props) {
  const { state } = useLocation();
  const { name, email, image } = state;
  const picture =
    "https://img.freepik.com/premium-vector/anonymous-user-flat-icon-vector-illustration-with-long-shadow_520826-1932.jpg";

  return (
    <div className="main">
      <Card className="mx-auto mt-5" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image || picture} alt="user" />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{email}</Card.Text>
        </Card.Body>
      </Card>
      <div className="text-center mt-3">
        <Link to={"/"}>
          <Button variant="primary">Back to Contact List</Button>
        </Link>
      </div>
    </div>
  );
}

export default ContactDetails;
