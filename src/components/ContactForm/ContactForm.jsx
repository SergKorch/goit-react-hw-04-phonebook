import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  nameInpId = nanoid();
  numbInpId = nanoid();

  changeInp = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  submitInp = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.submitInp}>
        <label htmlFor={this.nameInpId}>
          <p>Name</p>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.changeInp}
            id={this.nameInpId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter name here"
          />
        </label>
        <label htmlFor={this.numbInpId}>
          <p>Number</p>
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.changeInp}
            id={this.numbInpId}
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
  }
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default ContactForm;
