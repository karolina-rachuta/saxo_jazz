import { Link as ScrollLink } from "react-scroll";
import Logo from "../../assets/logo.png";

function Navbar() {
  return (
    <div className="navbar__container">
      <img className="logo" width="150px" height="64px" src={Logo} alt="Logo" />
      <nav>
        <ScrollLink to="about">About</ScrollLink>
        <ScrollLink to="events">Events</ScrollLink>
        <ScrollLink to="contact">Contact</ScrollLink>
      </nav>
    </div>
  );
}
export default Navbar;
