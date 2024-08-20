import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./App";
import Login from "./Login";
import UserMenu from "./UserMenu";

export default function NavBar() {
  const { session } = useContext(UserContext);
  return (
    <>
      <nav className="nav-bar">
        <Link className="nav-logo-link" to="/">
          <img id="logo" className="nav-logo" src="/logo2.png" alt="logo" />
        </Link>

        <div className="absolute left-1 top-1 flex flex-col gap-2 text-sm">
          <div className="flex justify-start gap-1">
            <p>Made by:</p>
            <p className="text-orange-500">Eduard Teller</p>
          </div>
          <div className="flex gap-1 text-xs">
            <p>{`(This web app was developed with the guidance of fireship's`}</p>
            <p className="text-green-500">supabase</p>
            <p>{`course)`}</p>
          </div>
        </div>

        <ul className="nav-right-list">
          <li className="nav-message-board-list-item">
            <Link to="/1" className="nav-message-board-link">
              message board
            </Link>
          </li>
          <li className="nav-auth-item">
            {session?.user ? <UserMenu /> : <Login />}
          </li>
        </ul>
      </nav>
    </>
  );
}
