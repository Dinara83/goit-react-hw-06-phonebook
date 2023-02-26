export const getAllContacts = store => store.contacts;

export const getImportandContacts = ({ contacts }) => {
  const onlyImportandContacts = contacts.filter(
    ({ importantContact }) => importantContact
  );
  return onlyImportandContacts;
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
