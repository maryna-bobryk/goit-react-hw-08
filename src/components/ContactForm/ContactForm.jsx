import s from './ContactForm.module.css';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const initialValues = {
    name: '',
    number: '',
  };

  const dispatch = useDispatch();
  // const handleAddContact = values => {
  //   const newContact = {
  //     name: values.name,
  //     number: values.number,
  //   };
  //   dispatch(addContact(newContact));
  // };

  const handleAddContact = async values => {
    try {
      const newContact = {
        name: values.name,
        number: values.number,
      };
      await dispatch(addContact(newContact)).unwrap();
      toast.success(`Contact "${newContact.name}" added successfully`);
    } catch (error) {
      toast.error(`Failed to add contact: ${error}`);
    }
  };

  const onSubmit = (values, options) => {
    handleAddContact(values);
    options.resetForm();
  };

  const applySchema = () =>
    Yup.object().shape({
      name: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      number: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .matches(/^\+?\d{5,13}$/, 'Number must be 5-13 digits')
        .required('Required'),
    });

  return (
    <div className={s.formWrapper}>
      <h1 className={s.titel}>Phonebook</h1>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={applySchema}
      >
        <Form className={s.form}>
          <div className={s.inputWrapper}>
            <label htmlFor="name" className={s.label}>
              <span>Name</span>
              <Field
                id="name"
                type="text"
                name="name"
                className={s.input}
                placeholder="Enter your name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className={s.errorMessage}
              />
            </label>
          </div>
          <div className={s.inputWrapper}>
            <label htmlFor="number" className={s.label}>
              <span>Number</span>
              <Field
                id="number"
                type="tel"
                pattern="^\+?[0-9\s\-]{7,20}$"
                name="number"
                className={s.input}
                placeholder="+49 170 1234567"
              />
              <ErrorMessage
                name="number"
                component="div"
                className={s.errorMessage}
              />
            </label>
          </div>
          <button type="submit" className={s.btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
