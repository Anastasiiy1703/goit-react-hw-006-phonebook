import ContactList from '../components/ContactList/ContactList';
import Form from '../components/Form/Form';
import Filter from '../components/Filter/Filter';

const App = () => {
 
  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;


