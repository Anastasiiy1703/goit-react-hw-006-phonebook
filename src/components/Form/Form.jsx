import { nanoid } from 'nanoid';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'store/selectors';
import { addContact } from 'store/contactSlice';
import FormCss from '../Form/FormCss.module.css';

const Form = () => {
 const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
 
  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === name.toLowerCase()
      ) === undefined
    ) {
      const item = { id: nanoid(), name, number };
      dispatch(addContact(item));
      setName('');
      setNumber('');
     
    } else {
      alert(`${name} is already in contacts.`);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  return (
    <form className={FormCss.form} onSubmit={handleSubmit}>
      <ul className={FormCss.list}>
        <li className={FormCss.item}>
          <label className={FormCss.name}>Name</label>
          <input
            className={FormCss.formInput}
            type="text"
            name="name"
            placeholder="Enter name"
            value={name}
            onChange={handleChange}
            required
          />
        </li>
        <li className={FormCss.item}>
          <label className={FormCss.name}>Number</label>
          <input
            className={FormCss.formInput}
            type="tel"
            name="number"
            placeholder="Enter phone number"
            value={number}
            onChange={handleChange}
            required
          />
        </li>
        <li>
          <button type="submit">Add Contact</button>
        </li>
      </ul>
    </form>
  );
};

export default Form;






