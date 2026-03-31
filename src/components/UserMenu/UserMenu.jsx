import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../../redux/auth/selectors";
import css from './UserMenu.module.scss';
import { logOut } from "../../redux/auth/operations";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const name = useSelector(selectUserName);

    const handleLogOut = () => {
        dispatch(logOut());
    }
    return (
        <div>
            <p>{name}</p>
            <button type="button" onClick={handleLogOut}>
                Вихід
            </button>
        </div>
    )
};