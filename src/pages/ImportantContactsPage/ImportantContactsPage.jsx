import { useSelector } from 'react-redux';
import { getImportandContacts } from 'redux/contacts/contacts-selectors';

import css from './important-contacts-page.module.css';

const ImportantContactsPage = () => {
  const contacts = useSelector(getImportandContacts);

//   const removeContact = id => {
//     setContacts(prevContacts =>
//       prevContacts.filter(contact => contact.id !== id)
//     );
//   };


  const elements = contacts.map(({ id, name, number }) => (
    <li key={id} className={css.contactsItem}>
      <span className={css.contactsText}>
        {name}: {number}
      </span>
      {/* <button className={css.contactsBtn} onClick={() => removeContact(id)}>
        Delete
      </button> */}
    </li>
  ));

  return <ul className={css.contactsList}>
        {elements}
  </ul>;
};

export default ImportantContactsPage;
