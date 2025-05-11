import React, { useEffect } from 'react';
import ContactList from '../../components/ContactList/ContactList';
import { fetchContacts } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
import SearchBox from '../../components/SearchBox/SearchBox';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default Contacts;
