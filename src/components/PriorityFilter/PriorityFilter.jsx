import { Button } from '../Button/Button';
import css from './PriorityFilter.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setPriorityFilter } from '../../redux/filtersSlice';

export const PriorityFilter = () => {
    const filter = useSelector(state => state.filters.priority);//підписка на стор(отримати дані зі стору)
    const dispatch = useDispatch();

    const handleFilterChange = (newFilter) => {
        dispatch(setPriorityFilter(newFilter));//викликає екшен і відправляє дані на стор
    }

  return (
    <div className={css.wrapper}>
      <Button onClick={() => handleFilterChange("all")}>All {filter === "all" && "is active"}</Button>
      <Button onClick={() => handleFilterChange("high")}>High {filter === "high" && "is active"}</Button>
      <Button onClick={() => handleFilterChange("medium")}>Medium {filter === "medium" && "is active"}</Button>
      <Button onClick={() => handleFilterChange("low")}>Low {filter === "low" && "is active"}</Button>
    </div>
  );
};