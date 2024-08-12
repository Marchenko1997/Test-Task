import { lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import ModalsNav from "./components/Modal/ModalsNav/ModalsNav";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));

function App() {
  console.log("Rendering App component");
  return (
    <>
      <Router  >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="catalog" element={<CatalogPage />} />
            <Route path="favorites" element={<FavoritesPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>

      <ModalsNav />
    </>
  );
}

export default App;
