import { useDispatch, useSelector } from 'react-redux';
import FilterCss from '../Filter/FilterCss.module.css';
import { setFilter } from 'store/filter';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.data);

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <label className={FilterCss.label}>
      Find contacts by name:
      <input
        className={FilterCss.input}
        type="text"
        value={filter}
        onChange={handleFilterChange}
      />
    </label>
  );
};

export default Filter;
