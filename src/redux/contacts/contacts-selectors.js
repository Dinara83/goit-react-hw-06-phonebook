export const getAllContacts = store => store.contacts;

export const getImportantContacts = ({ contacts }) => {
  const onlyImportantContacts = contacts.filter(
    ({ importantContact }) => importantContact
  );
  return onlyImportantContacts;
};

export const getFilteredContacts = ({ contacts, filter }) => {
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
