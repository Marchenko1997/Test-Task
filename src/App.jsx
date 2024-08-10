import { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
import ModalsNav from './components/Modal/ModalsNav/ModalsNav';


const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('./pages/FavoritesPage/FavoritesPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFoundPage to="/" replace />} />
        </Route>
      </Routes>
    </Router>
    <ModalsNav />
    </>
  );
}

export default App;