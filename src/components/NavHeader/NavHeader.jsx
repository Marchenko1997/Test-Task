import css from "./NavHeader.module.css";
import { NavLink } from "react-router-dom";

import clsx from "clsx";

const linkClasses = ({ isActive }) =>
  clsx(css.navLink, {
    [css.active]: isActive,
  });

const NavHeader = () => {
  return (
    <header className={css.header}>
      <nav className={css.headNavigation}>
        <NavLink className={linkClasses} to="/">
          Home
        </NavLink>

        <NavLink className={linkClasses} to="/catalog">
          Catalog
        </NavLink>
        <NavLink className={linkClasses} to="/favorites">
          Favorites
        </NavLink>
      </nav>
    </header>
  );
};

export default NavHeader;
