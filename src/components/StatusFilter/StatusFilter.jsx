import { Button } from '../Button/Button';
import css from './StatusFilter.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from '../../redux/filtersSlice';
import clsx from 'clsx';

export const StatusFilter = () => {
    const filter = useSelector(state => state.filters.status);//підписка на стор(отримати дані зі стору)
    const dispatch = useDispatch();

    const handleFilterChange = (newFilter) => {
        dispatch(setStatusFilter(newFilter));
    }

  return (
    <div className={css.wrapper}>
      <Button onClick={() => handleFilterChange("all")} className={clsx(css.button, filter === "all" && css.active)}>All </Button>
      <Button onClick={() => handleFilterChange("active")} className={clsx(css.button, filter === "active" && css.active)}>Active </Button>
      <Button onClick={() => handleFilterChange("completed")} className={clsx(css.button, filter === "completed" && css.active)}>Completed </Button>
    </div>
  );
};