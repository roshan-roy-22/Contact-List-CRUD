import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { Route, Routes } from "react-router-dom";
import ContactDetails from "./components/ContactDetails";
import api from "../src/api/contacts";
import EditContact from "./components/EditContact";

function App() {
  const [contacts, setContacts] = useState([]);

  //Function to add contacts
  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = {
      id: uuid(),
      ...contact,
    };
    //post
    const response = await api.post("/contact", request);
    console.log(response);
    setContacts([...contacts, response.data]);
  };

  //function to remove contact by id 

  const removeContactHandler = async (id) => {
    await api.delete(`/contact/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  //function to update uthe conatcts

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contact/${contact.id}`, contact);
    const { id } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  //RetrieveContacts
  const retrieveContacts = async () => {
    const response = await api.get("/contact");
    console.log(response);
    console.log(response.data);

    return response.data;
  };

  useEffect(() => {
    const getAllCOntacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };

    getAllCOntacts();
  }, []);

  return (
    <div className=" container">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ContactList
              contacts={contacts}
              getContactId={removeContactHandler}
            />
          }
        />
        <Route
          path="/add"
          element={<AddContact addContactHandler={addContactHandler} />}
        />
        <Route
          path="/edit"
          element={<EditContact updateContactHandler={updateContactHandler} />}
        />
        <Route path="/contact/:id" element={<ContactDetails />} />
      </Routes>
    </div>
  );
}

export default App;
