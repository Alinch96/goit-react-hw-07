import { useDispatch, useSelector } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm.jsx';
import ContactList from './components/ContactList/ContactList.jsx';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import {
  selectContacts,
  selectError,
  selectLoading,
} from './redux/contactsSlice.js';
import ErrorMessage from './components/ErrorMessage/ErrorMessage.jsx';
import Loader from './components/Loader/Loader.jsx';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps.js';

function App() {
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}

export default App;
