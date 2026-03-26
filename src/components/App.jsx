//App.jsx
import { Layout } from './Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import TasksPage from './pages/TasksPage/TasksPage';
import NotFound from './pages/NotFound/NotFound';
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
            <Route path="tasks" element={<TasksPage />} />
            <Route path="*" element={<NotFound />} />
        </Route>

    </Routes>
  );
};