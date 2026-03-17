import css from './Layout.module.scss';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

export const Layout = () => {
  return (
    <>
      <Header />
      <main className={css.container}>
        <Outlet />
      </main>
      <Footer />
    </>
    
  )
};