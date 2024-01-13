import { useSelector } from 'react-redux';
import ContactListItem from '../ContactListItem/ContactListItem';
import { getContacts, getFilter } from 'store/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = filter
    ? contacts.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

 return (
    <ul>
      {filteredContacts.map(item => (
        <ContactListItem
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
        />
      ))}
    </ul>
  );
};

export default ContactList;




