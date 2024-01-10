import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'; // Імпортуйте функцію v4 з пакету uuid
import FormCss from '../Form/FormCss.module.css';
import { addContact } from 'store/contactSlice';

const Form = () => {
  const dispatch = useDispatch();

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

    const id = uuidv4(); // Генеруємо новий ID

    dispatch(addContact({ id, name, number })); // Передаємо ID разом з іншими даними контакту
    setName('');
    setNumber('');
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
