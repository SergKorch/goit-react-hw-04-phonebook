import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const nameInpId = nanoid();
  const numbInpId = nanoid();

  const changeInp = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const submitInp = event => {
    event.preventDefault();
    onSubmit({ name, number });
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={submitInp}>
      <label htmlFor={nameInpId}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          value={name}
          onChange={changeInp}
          id={nameInpId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name here"
        />
      </label>
      <label htmlFor={numbInpId}>
        <p>Number</p>
        <input
          type="tel"
          name="number"
          value={number}
          onChange={changeInp}
          id={numbInpId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter number here"
        />
      </label>
      <button className={s.submitButton} type="submit">
        Add contact
      </button>
    </form>
  );
};
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;
