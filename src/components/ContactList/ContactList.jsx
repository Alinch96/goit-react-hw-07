import { selectfilteredContacts } from '../../redux/contactsSlice.js';
import Contact from '../Contact/Contact.jsx';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';

const ContactList = () => {
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
