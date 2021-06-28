import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { AuthAction } from "../store/Redux-Index";

const Header = () => {
  const auth = useSelector((state) => state.auth.isAuthenticate);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(AuthAction.logOut());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {auth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
