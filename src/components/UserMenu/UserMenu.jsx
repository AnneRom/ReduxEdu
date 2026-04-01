import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";
import clsx from "clsx";
import css from './UserMenu.module.scss';
import { logOut } from "../../redux/auth/operations";


const buildLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
};

export const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectUserName);

    const handleLogOut = () => {
        dispatch(logOut());
    }
    return (
        <div>
            <p>{name}</p>
            <button type="button" className={buildLinkClass}onClick={handleLogOut}>
                Вихід
            </button>
        </div>
    )
};