import PropTypes from 'prop-types';

import css from './contact-list.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  const elements = contacts.map(({ id, name, number, importantContact }) => (
    <li key={id} className={{ fontWeight: importantContact ? 'bold' : 'normal' }}>
      <span className={css.contactsText}>
        {name}: {number}
      </span>
      <button className={css.contactsBtn} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </li>
  ));

  return (
    <div>
      <ul className={css.contactsList}>{elements}</ul>
    </div>
  );
};


ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
