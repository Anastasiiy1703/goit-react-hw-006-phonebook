import { useDispatch } from 'react-redux';
import { deleteContact } from 'store/contactSlice';
import ContactListItemCss from './ContactListItemCss.module.css';

const ContactListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteContact(id));
  };
  
  return (
    <li className={ContactListItemCss.item}>
      <p>{name}: {number}</p>
      <button className={ContactListItemCss.button} onClick={handleClick}>Delete</button>
    </li>
  );
};

export default ContactListItem;





