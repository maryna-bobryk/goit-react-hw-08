import s from './LoginForm.module.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { loginThunk } from '../../redux/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const applySchema = () =>
    Yup.object().shape({
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
    console.log(values);
    dispatch(loginThunk(values));
  };
  return (
    <div className={s.formWrapper}>
      <h1 className={s.titel}>Login now</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={applySchema}
      >
        <Form className={s.form}>
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
            <Link to="/register" className={s.link}>
              Don't have an account? Sign up!
            </Link>
          </div>
          <button type="submit" className={s.btn}>
            Login
          </button>
        </Form>
      </Formik>
      <div className={s.line}></div>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default LoginForm;
