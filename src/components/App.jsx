import React from 'react';
import { useDispatch} from 'react-redux';
import ContactList from '../components/ContactList/ContactList';
import Form from '../components/Form/Form';
import Filter from '../components/Filter/Filter';
import { addContact } from 'store/contactSlice';


const App = () => {
  const dispatch = useDispatch();
  const handleAddContact = (name, number) => {
    dispatch(addContact({ name, number }));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <Form onAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;