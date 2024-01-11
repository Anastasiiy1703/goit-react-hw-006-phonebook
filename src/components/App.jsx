import React from 'react';
import { useDispatch } from 'react-redux';
import ContactList from '../components/ContactList/ContactList';
import Form from '../components/Form/Form';
import Filter from '../components/Filter/Filter';
import { addContact, deleteContact } from 'store/contactSlice';

const App = () => {
  const dispatch = useDispatch();

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Form onAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList onDeleteContact={handleDeleteContact} />
    </div>
  );
};

export default App;
