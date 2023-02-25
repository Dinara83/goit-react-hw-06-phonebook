import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    text: 'Phonebook',
    link: '/',
  },
  {
    id: nanoid(),
    text: 'My Contacts',
    link: '/my-contacts',
  },
];

export default items;
