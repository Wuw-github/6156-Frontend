import { Link } from "react-router-dom";
import { useContext } from "react";
import classes from "./MainNavigation.module.css";
import FavoriteContext from "../../store/favorite-context";

function MainNavigation() {
  const ctx = useContext(FavoriteContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/favorites">
              Favorite Meetups
              <span className={classes.badge}>{ctx.totalFavorites}</span>
            </Link>
          </li>
          <li>
            <Link to="/boards">All Boards</Link>
          </li>
          <li>
            <Link to="/boards/create">New Board</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
