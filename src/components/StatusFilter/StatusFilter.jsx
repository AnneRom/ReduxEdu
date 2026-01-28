import { Button } from '../Button/Button';
import css from './StatusFilter.module.scss';

export const StatusFilter = () => {
  return (
    <div className={css.wrapper}>
      <Button>All</Button>
      <Button>Active</Button>
      <Button>Completed</Button>
    </div>
  );
};