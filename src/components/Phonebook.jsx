import { useSelector, useDispatch } from 'react-redux';

import ContactForm from 'components/PhonebookContact/ContactForm';
import FilterPhonebook from 'components/FilterPhonebook/FilterPhonebook';
import ContactList from 'components/Contacts/ContactList';

import { addContact, deleteContact } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filter-slice';

import {
  getAllContacts,
  getFilteredContacts,
} from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

import css from './phonebook.module.css';

const Phonebook = () => {
  const filterContacts = useSelector(getFilteredContacts);
  const allContacts = useSelector(getAllContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const isDublicate = name => {
    const normalizedName = name.toLowerCase();
    const result = allContacts.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });

    return Boolean(result);
  };

  const handleAddContact = ({ name, number, importantContact }) => {
    if (isDublicate(name)) {
      alert(`${name} is already in contacts.`);
      return false;
    }

    const action = addContact({ name, number, importantContact });
    dispatch(action);
  };

  const handleDeleteContact = id => {
    const action = deleteContact(id);
    dispatch(action);
  };

  const changeFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  const isContacts = Boolean(filterContacts.length);
  return (
    <main className={css.conteinerPhonebook}>
      <ContactForm onSubmitForm={handleAddContact} />
      <h2 className={css.text}>Contacts</h2>
      <FilterPhonebook value={filter} onChange={changeFilter} />
      <ContactList
        contacts={filterContacts}
        onDeleteContact={handleDeleteContact}
      />
      {!isContacts && <p>No contacts</p>}
    </main>
  );
};

export default Phonebook;
