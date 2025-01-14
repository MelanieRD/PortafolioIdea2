import { Leaves } from "../../components/Leaves/Leaves";
import "./proyects.css";

export const Proyects = () => {
  return (
    <div className="proyectsContainer">
      <div className="titleProyects">
        <h1>Proyects</h1>
      </div>

      <div className="branchContainer">
        <div className="branch">
          <h2>websites</h2>
          <div className="leaves">
            <Leaves TypeLeaves={"upLeaves"} />
            <Leaves TypeLeaves={"upLeaves"} />
            <Leaves TypeLeaves={"upLeaves"} />
            <Leaves TypeLeaves={"upLeaves"} />
          </div>
          <div className="trunk">
            <div className="trunkhole"></div>
          </div>

          <div className="leaves">
            <Leaves TypeLeaves={"downLeaves"} />
            <Leaves TypeLeaves={"downLeaves"} />
          </div>
          <h2>mini-games & mods</h2>
        </div>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia est aperiam dolores, quos omnis nostrum magnam iure adipisci nulla, praesentium suscipit temporibus error atque
        necessitatibus voluptatum soluta neque nam dolorem.
      </p>
    </div>
  );
};
