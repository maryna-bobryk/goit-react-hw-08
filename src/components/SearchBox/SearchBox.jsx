import s from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice';
import { selectFilteredContactsMemo } from '../../redux/contacts/selectors';
import { selectNameFilter } from '../../redux/filters/selectors';
import toast from 'react-hot-toast';

const SearchBox = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);
  const contacts = useSelector(selectFilteredContactsMemo);
  const handleFilter = e => {
    const query = e.target.value;
    dispatch(changeFilter(query));
    if (contacts.length === 0) {
      toast.error('Keine Kontakte gefunden.');
    }
  };

  return (
    <div className={s.searchBoxWrapper}>
      <label className={s.searchBoxLabel}>
        <span>Finde contact by name</span>
        <input
          type="text"
          className={s.searchBoxInput}
          value={value}
          onChange={handleFilter}
        ></input>
      </label>
    </div>
  );
};

export default SearchBox;
