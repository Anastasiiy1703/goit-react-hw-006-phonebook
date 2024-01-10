import React from 'react';
import { useDispatch } from 'react-redux';
import ContactListItemCss from './ContactListItemCss.module.css';
import { deleteContact } from 'store/contactSlice';


const ContactListItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteContact(id));
  };
  console.log('ID:', id); 
  return (
    <li className={ContactListItemCss.item}>
      <p>{name}: {number}</p>
      <button className={ContactListItemCss.button} onClick={handleClick}>Delete</button>
    </li>
  );
};

export default ContactListItem;
