import css from './Layout.module.scss';

export const Layout = ({ children }) => {
  return <main className={css.container}>{children}</main>;
};