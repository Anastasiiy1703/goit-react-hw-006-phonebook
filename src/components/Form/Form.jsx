import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'; 
import FormCss from '../Form/FormCss.module.css';
import { addContact } from 'store/contactSlice';

const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const existingContact = contacts?.find(
      (contact) => contact.name === name && contact.number === number
    );

    if (existingContact) {
      alert('Contact already exists with the same name and number.');
    } else {
      const id = uuidv4();
       console.log({id, name, number });
      
      dispatch(addContact({ id, name, number }));
        console.log({id, name, number });
      setNumber('');
      setName('');
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
          <button type="submit" >Add Contact</button>
        </li>
      </ul>
    </form>
  );
};

export default Form;
