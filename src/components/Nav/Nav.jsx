import "./nav.css";

export const Nav = () => {
  return (
    <div className="nav">
      <img className={"logo"} src="#" alt=" MelyCoconut logo" />

      <ul className="nav-links">
        <li>Home</li>
        <li>Proyects</li>
        <li>Contact</li>
      </ul>

      <div className="toggleMenu"> icon</div>
    </div>
  );
};
