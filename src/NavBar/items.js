import { nanoid } from 'nanoid';

const items = [
  {
    id: nanoid(),
    text: 'Phonebook page',
    link: '/',
  },
  {
    id: nanoid(),
    text: 'MyContacts page',
    link: '/my-contacts',
  },
];

export default items;
