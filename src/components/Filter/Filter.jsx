import { useDispatch, useSelector } from 'react-redux';
import FilterCss from '../Filter/FilterCss.module.css';
import { setFilter } from 'store/filter';
import { getFilter } from 'store/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <label className={FilterCss.label}>
      Find contacts by name:
      <input
        className={FilterCss.input}
        type="text"
        value={filter}
        onChange={e => {
          dispatch(setFilter(e.target.value));
        }}
      />
    </label>
  );
};

export default Filter;




