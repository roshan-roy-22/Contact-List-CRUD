import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import { useState,useEffect } from "react";
import { v4 as uuid } from "uuid";
import {  Route,Routes  } from "react-router-dom";
import ContactDetails from "./components/ContactDetails";
import api from '../src/api/contacts'


function App() {
  
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );
  const addContactHandler = async (contact) => {
    console.log(contact);
    const request = {
      id: uuid(),
      ...contact,
    };

    const response = await api.post("/contact", request);
    console.log(response);
    setContacts([...contacts, response.data]);
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contact/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  // useEffect(() => {
  //   // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  //   const getAllcontacts= async ()=>{
  //     const allContacts=await retrieveContacts();
  //    if(allContacts) setContacts(allContacts);
  //   }
  //   getAllcontacts();
  // }, []);

  //RetrieveContacts
  const retrieveContacts = async () => {
    const response = await api.get("/contact");
    console.log(response);
    console.log(response.data);

    return response.data;
  };

  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveContacts) setContacts(retriveContacts);
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
      <Route path="/" element={<ContactList contacts={contacts} getContactId={removeContactHandler}/>} />
      <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />}/>
      <Route path="/contact/:id" element={<ContactDetails/>}/>
      </Routes>

      {/* 
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
    </div>
  );
}

export default App;
