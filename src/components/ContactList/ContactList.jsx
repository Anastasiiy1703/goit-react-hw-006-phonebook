import { useSelector } from 'react-redux';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = ({ onDeleteContact }) => {
  const contacts = useSelector((state) => state.contacts.data);

  if (!contacts || !Array.isArray(contacts) || contacts.length === 0) {
    return <p>No contacts available</p>;
  }

  return (
    <ul>
      {contacts.map((contact) => (
        <ContactListItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;