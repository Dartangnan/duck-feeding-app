import "./Header.css";
import duckImg from "../../images/duck.png";

const Header = () => {
  return (
    <header className="app-header">
      <div className="header-icon">
        <img alt="Vectorized face of a white duck." src={duckImg} />
        <div className="main-title">
          <h1>Feed</h1>
          <h1>Me🧡</h1>
        </div>
      </div>
      <div className="site-description">
        <p>
          Through this website, you can submit information about how you feed
          ducks! The information submitted is going to be used by the scientist
          Duckanna Flybird in her research and is available for download through
          the link found below.
        </p>
      </div>
    </header>
  );
};

export default Header;
