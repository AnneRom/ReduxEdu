import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import { useSelector } from "react-redux";

export const RestrictedRoute = ({ redirectTo = "/", component }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return isLoggedIn ? <Navigate to={redirectTo} /> : component;
};

//вхід тільки для гостей