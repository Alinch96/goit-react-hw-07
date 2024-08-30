import { useSelector } from 'react-redux';
import css from './ErrorMessage.module.css';
import { selectError } from '../../redux/contactsSlice';

export default function ErrorMessage() {
  const error = useSelector(selectError);
  return <p className={css.error}>Oops! 🤒 {error}</p>;
}
