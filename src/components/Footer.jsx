import { Link } from "react-scroll";
import Logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="footer__container">
      <Link to="/"><img className="logo" width="150px" height="64px" src={Logo} alt="Logo" /></Link>
      <div>
        <h3>Saxo Jazz Djs</h3>
        <p>phone: +48 777 555 666</p>
        <p>emial: saxojazzdjs@gmail.com</p>
      </div>
    </div>
  );
}

export default Footer;