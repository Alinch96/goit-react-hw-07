import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const initialValues = {
  name: '',
  number: '',
};

const phoneRegExp = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required!'),
  number: Yup.string()
    .matches(phoneRegExp, "The phone format 'xxx-xx-xx' is required")
    .required('Required!'),
});

const ContactForm = () => {
  const nameFieldId = useId();
  const telFieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <div className={css['label-input-wrapper']}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name"></Field>
          <ErrorMessage name="name" component="span" />
        </div>
        <div className={css['label-input-wrapper']}>
          <label htmlFor={telFieldId}>Number</label>
          <Field type="tel" name="number"></Field>
          <ErrorMessage name="number" component="span" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
