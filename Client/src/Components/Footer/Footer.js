import duckShadow from "../../images/duck_shadow.png";
import duckShadowDouble from "../../images/duck_shadow_double.png";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="app-footer">
      <img alt="Small shadow of a duck flying." src={duckShadow} />
      <p>© 2021 Dartangnan Theml</p>
      <img alt="Small shadow of two ducks flying." src={duckShadowDouble} />
    </footer>
  );
};

export default Footer;
