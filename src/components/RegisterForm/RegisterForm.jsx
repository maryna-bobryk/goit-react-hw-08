import s from './RegisterForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { registerThunk } from '../../redux/auth/operations';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const applySchema = () =>
    Yup.object().shape({
      name: Yup.string()
        .min(2, 'Too Short!')
        .max(15, 'Too Long!')
        .required('Name is required'),
      email: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .max(10, 'Password must be at most 10 characters')
        .required('Password is required'),
    });

  const handleSubmit = (values, options) => {
    // console.log(values);
    dispatch(registerThunk(values));
  };
  return (
    <div className={s.formWrapper}>
      <h1 className={s.titel}>SignUp</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={applySchema}
      >
        <Form className={s.form}>
          <div className={s.inputWrapper}>
            <label className={s.label}>Name</label>
            <Field
              name="name"
              type="text"
              className={s.input}
              placeholder="Max Musterman"
            />
            <ErrorMessage
              name="name"
              component="div"
              className={s.errorMessage}
            />
          </div>
          <div className={s.inputWrapper}>
            <label className={s.label}>Email</label>
            <Field
              name="email"
              type="email"
              className={s.input}
              placeholder="muster@mail.com"
            />
            <ErrorMessage
              name="email"
              component="div"
              className={s.errorMessage}
            />
          </div>
          <div className={s.inputWrapper}>
            <label className={s.label}>Password</label>
            <Field
              name="password"
              type="password"
              className={s.input}
              placeholder="g#TaMawocu!90"
            />
            <ErrorMessage
              name="password"
              component="div"
              className={s.errorMessage}
            />
          </div>
          <div>
            <Link to="/login" className={s.link}>
              Already have an account? Sign in!
            </Link>
          </div>
          <button type="submit" className={s.btn}>
            Sign Up
          </button>
        </Form>
      </Formik>
      <div className={s.line}></div>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default RegisterForm;
