//App.jsx
import { Layout } from './Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import TasksPage from './pages/TasksPage/TasksPage';
import NotFound from './pages/NotFound/NotFound';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from '../redux/auth/operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes> 
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="login" element={
              <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
            } />
            <Route path="register" element={
              <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
            } />
            <Route path="tasks" element={
              <PrivateRoute redirectTo="/login" component={<TasksPage />} />
            } />
        </Route>

    </Routes>
  );
};