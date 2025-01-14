import "./Leaves.css";

export const Leaves = ({ TypeLeaves }) => {
  return (
    <div className={TypeLeaves}>
      <div className="leaveContainer">
        <div className="upLeave frac"></div>
        <div className="downLeave frac">
          <div className="textContainer">
            <p className="proyectTitle">Pet Myproductivity</p>
            <p> A minigame app about pets and produtivity</p>
          </div>
        </div>
      </div>
    </div>
  );
};
