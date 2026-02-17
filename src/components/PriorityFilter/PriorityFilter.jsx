import { Button } from '../Button/Button';
import css from './PriorityFilter.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setPriorityFilter } from '../../redux/filtersSlice';
import clsx from 'clsx';

export const PriorityFilter = () => {
    const filter = useSelector(state => state.filters.priority);//підписка на стор(отримати дані зі стору)
    const dispatch = useDispatch();

    const handleFilterChange = (newFilter) => {
        dispatch(setPriorityFilter(newFilter));//викликає екшен і відправляє дані на стор
    }

  return (
    <div className={css.wrapper}>
      <Button onClick={() => handleFilterChange("all")} className={clsx(css.button, filter === "all" && css.active)}>All </Button>
      <Button onClick={() => handleFilterChange("high")} className={clsx(css.button, filter === "high" && css.active)}>High </Button>
      <Button onClick={() => handleFilterChange("medium")} className={clsx(css.button, filter === "medium" && css.active)}>Medium </Button>
      <Button onClick={() => handleFilterChange("low")} className={clsx(css.button, filter === "low" && css.active)}>Low </Button>
    </div>
  );
};