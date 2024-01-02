import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom"; 

const ContactList = (props) => {
  console.log(props);

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
// let contacts=[{
//   id:"2",
//   name:"roshan",
//   email:"roshan@gmail.com"
// }]
  const renderContactList = props.contacts.map((contact) => (
    <ContactCard
      contact={contact}
      clickHandler={deleteContactHandler}
      key={contact.id}
    />
  ));

  return (

    <>
      <div className="d-flex justify-content-between my-2 ">
        <h4 className="fw-bolder ">Contact List</h4>
        <Link to={'/add'}><Button variant="primary">Add Contacts</Button></Link>
      </div>
      <div>
        <ListGroup className="my-2 ">
          {renderContactList}
        </ListGroup>
      </div>
    </>
  );
};

export default ContactList;
