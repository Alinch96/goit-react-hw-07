import Contact from '../Contact/Contact.jsx';
import css from './ContactList.module.css';
import { selectContacts } from '../../redux/contactsSlice.js';
import { selectNameFilter } from '../../redux/filtersSlice.js';
import { createSelector } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const selectfilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filter) => {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  );
  const filteredContacts = useSelector(selectfilteredContacts);

  return (
    <ul className={css['contact-list']}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css['contactList-item']}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
