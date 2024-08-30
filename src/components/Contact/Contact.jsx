import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoPerson } from 'react-icons/io5';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';

const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className={css['contact-wrapper']}>
        <div className={css['text-icon-wrapper']}>
          <IoPerson size={42} />
          <p>{name}</p>
        </div>
        <div className={css['text-icon-wrapper']}>
          <BsFillTelephoneFill size={42} />
          <p>{number}</p>
        </div>
      </div>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </>
  );
};

export default Contact;
