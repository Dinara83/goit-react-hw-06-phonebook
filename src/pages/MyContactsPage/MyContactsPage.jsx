import { useSelector } from 'react-redux';
import css from './my-contacts-page.module.css';

const MyContactsPage = () => {
  const contacts = useSelector(store => store.contacts);
  console.log(contacts);

//   const removeContact = id => {
//     setContacts(prevContacts =>
//       prevContacts.filter(contact => contact.id !== id)
//     );
//   };

  const elements = contacts.map(({ id, name, number }) => (
    <li className={css.contactsItem}>
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

export default MyContactsPage;
