import { NavLink } from "react-router-dom";
import css from './Header.module.scss';
import clsx from "clsx";

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
};

const Header = () => {

  return (
    <header>
       <nav>
        <ul className={css.routerList}>
          <li>
            <NavLink to="/" className={buildLinkClass}>Головна</NavLink>
          </li>
           <li>
            <NavLink to="/tasks" className={buildLinkClass}>Список завдань</NavLink>
          </li>
         
        </ul>
      </nav>
    </header>
  );
};

export default Header;