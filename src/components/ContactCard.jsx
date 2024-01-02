import React from "react";
import user from "../images/user.png";
import { ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ContactCard(props) {
  const { id, name, email } = props.contact;
  const linkStyle = {
    textDecoration: "none",
    color: "inherit",
  };

  console.log(props.contact);

  return (
    <div>
      <ListGroup.Item className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">
          <img
            style={{ height: "60px" }}
            className="img-fluid"
            src={user}
            alt="user"
          />
          <Link style={linkStyle} to={`/contact/${id}`} state={props.contact}>
            <div className="d-flex flex-column">
              <div>{name}</div>
              <div>{email}</div>
            </div>
          </Link>
        </div>
        <div>
          <Button variant="danger" onClick={() => props.clickHandler(id)}>
            <i className="fas fa-trash"></i>
          </Button>
        </div>
      </ListGroup.Item>
    </div>
  );
}

export default ContactCard;
