import "../css/splashscreen.css";
import logo from "../assets/aryabhatta_logo.png";

const SplashScreen = () => {
  return (
    <div className="splash-container">

      {/* ── Decorative watermarks ── */}
      <div className="splash-watermarks" aria-hidden="true">
        {/* Faint graph grid — top centre */}
        <div className="wm-grid" />

        {/* AΣ symbol — top centre overlay */}
        <div className="wm-logo-symbol">AΣ</div>

        {/* f(x) — right side */}
        <div className="wm-fx">f(x)</div>

        {/* Compass — bottom left */}
        <div className="wm-compass">⊹</div>
      </div>

      {/* ── Main content ── */}
      <div className="splash-content">
        <img src={logo} alt="Aryabhatta logo" className="logo" />

        <p className="splash-subtitle">Personalized MATH GURU!</p>

        <div className="loader" role="status" aria-label="Loading">
          <span />
          <span />
          <span />
        </div>
        <p className="splash-status">By ReignAgent</p>
      </div>

    </div>
  );
};

export default SplashScreen;
