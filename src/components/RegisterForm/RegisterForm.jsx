import css from "./RegisterForm.module.scss";
import { register } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

export const RegisterForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.elements.email.value;
        const password = form.elements.password.value;

        dispatch(register({ email, password }));
        form.reset();

    }
    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" placeholder="Enter your email" defaultValue="@gmail.com" className={css.input} />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" placeholder="Enter your password" className={css.input} />
            <button type="submit" className={css.button}>Register</button>
        </form>
    );
};