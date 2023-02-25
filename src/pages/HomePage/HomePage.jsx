import { useState } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from 'components/PhonebookContact/ContactForm';
import FilterPhonebook from 'components/FilterPhonebook/FilterPhonebook';
import ContactList from 'components/Contacts/ContactList';

import css from './home-page.module.css';

const HomePage = () => {
  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState('');

  const isDublicate = name => {
    const normalizedName = name.toLowerCase();
    const result = contacts.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });

    return Boolean(result);
  };

  const addFormSubmitContact = ({ name, number }) => {
    if (isDublicate(name)) {
      alert(`${name} is already in contacts.`);
      return false;
    }

    setContacts(prevContacts => {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      return [newContact, ...prevContacts];
    });

    return true;
  };

  const removeContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
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

  const filteredContacts = getfilterContacts()
  const isContacts = Boolean(filteredContacts.length);
  return (
    <main className={css.conteinerPhonebook}>
      <ContactForm onSubmitForm={addFormSubmitContact} />

      <h2 className={css.text}>Contacts</h2>
      <FilterPhonebook onChange={changeFilter} />
      <ContactList
        contacts={getfilterContacts()}
        onDeleteContact={removeContact}
      />
	  {!isContacts && <p>No contacts</p>}
    </main>
  );
};

export default HomePage;
