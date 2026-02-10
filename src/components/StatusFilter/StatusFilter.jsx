import { Button } from '../Button/Button';
import css from './StatusFilter.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from '../../redux/actions';

export const StatusFilter = () => {
    const filter = useSelector(state => state.filters.status);
    const dispatch = useDispatch();

    const handleFilterChange = (newFilter) => {
        dispatch(setStatusFilter(newFilter));
    }

  return (
    <div className={css.wrapper}>
      <Button onClick={() => handleFilterChange("all")}>All {filter === "all" && "is active"}</Button>
      <Button onClick={() => handleFilterChange("active")}>Active {filter === "active" && "is active"}</Button>
      <Button onClick={() => handleFilterChange("completed")}>Completed {filter === "completed" && "is active"}</Button>
    </div>
  );
};