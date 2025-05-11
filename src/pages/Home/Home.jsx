import s from './Home.module.css';

const Home = () => {
  return (
    <>
      <h1>My Phonebook</h1>
      <div className={s.container}>
        <h2 className={s.title}>Contacts manager</h2>
      </div>
    </>
  );
};

export default Home;
