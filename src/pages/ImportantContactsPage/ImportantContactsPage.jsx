import { useSelector, useDispatch } from 'react-redux';
import { getImportantContacts } from 'redux/contacts/contacts-selectors';
import { deleteContact } from 'redux/contacts/contacts-slice';

import css from './important-contacts-page.module.css';

const ImportantContactsPage = () => {
  const contacts = useSelector(getImportantContacts);

  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    const action = deleteContact(id);
    dispatch(action);
  };


  const elements = contacts.map(({ id, name, number }) => (
    <li key={id} className={css.contactsItem}>
      <span className={css.contactsText}>
        {name}: {number}
      </span>
      <button className={css.contactsBtn} onClick={() => handleDeleteContact(id)}>
        Delete
      </button>
    </li>
  ));

  return <ul className={css.contactsList}>
        {elements}
  </ul>;
};

export default ImportantContactsPage;
