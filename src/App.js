import './App.css';
import { ContactForm } from './components/ContactForm/ContactForm.jsx';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from './components/ContactList/ContactList';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFilterTextChange = filterText => {
    this.setState({
      filter: filterText.target.value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.setState({ name: '', number: '' });
    if (this.state.contacts.find(contact => contact.name === this.state.name)) {
      return alert(`dssd`);
    }
    this.state.contacts.push({
      name: this.state.name,
      number: this.state.number,
      id: `id-` + Number(this.state.contacts.length + 1),
    });
  };
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };
  deleteItem = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };
  render() {
    const { name, number, filter, contacts } = this.state;
    const { handleChange, handleSubmit, handleFilterTextChange, deleteItem } =
      this;

    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          name={name}
          number={number}
        />
        <h2>Contacts</h2>
        <Filter
          filter={filter}
          handleFilterTextChange={handleFilterTextChange}
        />
        <ContactList
          contacts={contacts}
          filter={filter}
          deleteItem={deleteItem}
        />
      </>
    );
  }
}
App.propTypes = {
  number: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
};
