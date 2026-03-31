import { NavLink } from "react-router-dom";
import css from './Header.module.scss';
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { UserMenu } from "../UserMenu/UserMenu";
import { AuthNav } from "../AuthNav/AuthNav";

const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
};

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
       <nav>
        <ul className={css.routerList}>
          <li>
            <NavLink to="/" className={buildLinkClass}>Головна</NavLink>
          </li>
          {isLoggedIn && (
          <li>
            <NavLink to="/tasks" className={buildLinkClass}>Список завдань</NavLink>
          </li>
          )}
           
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
         
        </ul>
      </nav>
    </header>
  );
};

export default Header;