import { LeavesDeco } from "../LeavesDeco/LeavesDeco";

 export const FlowerCornerDeco = () => {


    return (
        <>
        {/* <LeavesDeco TypeLeaves={"cornerRightLDeco"} Rotationnum={10} translateXnum={-10} translateYnum={5} scale={1.3} Color1={"rgb(252,209,215)"} Color2={"rgb(233,177,205)"} Color1Opacity={"rgba(253, 158, 225, 0.222)"}/> */}
          <LeavesDeco TypeLeaves={"cornerRightLDeco"} Rotationnum={10} translateXnum={-10} translateYnum={5} scale={1.3} Color1={"rgb(236,123,164)"} Color2={"rgb(240, 78, 137)"} Color1Opacity={"rgba(253, 158, 225, 0.14)"}/>
          <LeavesDeco TypeLeaves={"cornerRightLDeco"} Rotationnum={55} translateXnum={-3} translateYnum={5} scale={1.3} Color1={"rgb(236,123,164)"} Color2={"rgb(240, 78, 137)"} Color1Opacity={"rgba(253, 158, 225, 0.05)"} />
           <LeavesDeco TypeLeaves={"cornerRightLDeco"} Rotationnum={80} translateXnum={-10} translateYnum={10} scale={1.4} Color1={"rgb(236,123,164)"} Color2={"rgb(240, 78, 137)"} Color1Opacity={"rgba(253, 158, 225, 0.222)"}/>
        </>
    );
 }