import { useState } from 'react';
// import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';

import ContactForm from 'components/PhonebookContact/ContactForm';
import FilterPhonebook from 'components/FilterPhonebook/FilterPhonebook';
import ContactList from 'components/Contacts/ContactList';

import { addContact, deleteContact } from 'redux/actions';

import css from './home-page.module.css';

const HomePage = () => {
  const contacts = useSelector(store => store.contacts);
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();

  const isDublicate = name => {
    const normalizedName = name.toLowerCase();
    const result = contacts.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });

    return Boolean(result);
  };

  const handleAddContact = ({ name, number }) => {
    if (isDublicate(name)) {
      alert(`${name} is already in contacts.`);
      return false;
    }

    const action = addContact({ name, number });
    dispatch(action);
  };

    const handleDeleteContact = id => {
		const action = deleteContact(id)
		dispatch(action)
    };

  const changeFilter = ({ target }) => setFilter(target.value);

  const getfilterContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedContact = filter.toLowerCase();
    const result = contacts.filter(({ name, number }) => {
      return (
        name.toLowerCase().includes(normalizedContact) ||
        number.toLowerCase().includes(normalizedContact)
      );
    });
    return result;
  };

  const filteredContacts = getfilterContacts();
  const isContacts = Boolean(filteredContacts.length);
  return (
    <main className={css.conteinerPhonebook}>
      <ContactForm onSubmitForm={handleAddContact} />
      <h2 className={css.text}>Contacts</h2>
      <FilterPhonebook onChange={changeFilter} />
      <ContactList
        contacts={getfilterContacts()}
        onDeleteContact={handleDeleteContact}
      />
      {!isContacts && <p>No contacts</p>}
    </main>
  );
};

export default HomePage;
