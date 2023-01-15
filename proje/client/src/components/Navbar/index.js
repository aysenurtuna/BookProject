import { SlMenu } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom";

function Navbar(props) {
  function showLinks() {
    document.querySelector(".toggle-menu").classList.toggle("show");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <Link to="/">
          <img src="../images/logo.png" alt="logo" className="logo"></img>
        </Link>
        <form className="d-flex form">
          <input
            className="form-control me-1"
            type="search"
            placeholder="Kitap Ara"
            aria-label="Search"
            onChange={props.handleChange}
            value={props.search}
          />
        </form>
        <ul className="nav-links">
          <li>
            <NavLink to="/okunacaklistesi" className={"nav-link"}>
              Okunacak Listesi
            </NavLink>
          </li>
          <li>
            <NavLink to="/okuduklarim" className={"nav-link"}>
              Okuduklarım
            </NavLink>
          </li>
        </ul>
        
        <SlMenu className="menu-icon" onClick={showLinks}></SlMenu>
      </nav>
      <ul className="toggle-menu">
        <li className="openMenuLink">
          <input
            className="search"
            type="search"
            placeholder="Kitap Ara"
            aria-label="Search"
            onChange={props.handleChange}
            value={props.search}
          />
        </li>
        <li className="openMenuLink">
          <NavLink to="/okunacaklistesi">Okunacak Listesi</NavLink>
        </li>
        <li className="openMenuLink">
          <NavLink to="/okuduklarim">Okuduklarım</NavLink>
        </li>
      </ul>
    </>
  );
}

export default Navbar;
