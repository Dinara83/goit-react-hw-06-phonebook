import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-slice';
import {
  getAllContacts,
  getFilteredContacts,
} from 'redux/contacts/contacts-selectors';

import css from './contact-list.module.css';

const ContactList = () => {
  const filterContacts = useSelector(getFilteredContacts);
  const allContacts = useSelector(getAllContacts);

  const dispatch = useDispatch();

  const onDeleteContact = id => {
    const action = deleteContact(id);
    dispatch(action);
  };

  const elements = filterContacts.map(
    ({ id, name, number, importantContact }) => (
      <li style={{ fontWeight: importantContact ? 'bold' : 'normal' }} key={id}>
        <span className={css.contactsText}>
          {name}: {number}
        </span>
        <button className={css.contactsBtn} onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </li>
    )
  );
  const isContacts = Boolean(allContacts.length);

  return (
    <>
      <div>
        <ul className={css.contactsList}>{elements}</ul>
      </div>
      {!isContacts && <p>No contacts</p>}
    </>
  );
};

export default ContactList;
