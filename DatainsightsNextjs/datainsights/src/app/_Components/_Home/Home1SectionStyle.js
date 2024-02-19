import Background from "../../_Assests/_Images/Home1Background.png";
import Image1 from "../../_Assests/_Images/Home1Image1.svg";

export const styleTypography1 = {
  color: "#242331",
  fontFamily: "Nunito",
  fontSize: "50px",
  fontWeight: 800,
  lineHeight: "55px",
  width: "23ch",
};
export const styleTypography2 = {
  color: "#797979",
  fontFamily: "Nunito",
  fontSize: "22px",
  fontWeight: 400,
  lineHeight: "34.63px",
  width: "100%",
};
export const styleBox1 = {
  width: "30%",
  height: "80%",
  position: "relative",
  zIndex: 1,
};
export const styleBox2 = {
  background: `url(${Background.src})  no-repeat`,
  backgroundSize: "100% 100%",
  boxShadow: "none",
  height: "80%",
  width: "100%",
  position: "absolute",
  right: 0,
  zIndex: 1,
};
export const styleBox3 = {
  background: `url(${Image1.src})  no-repeat`,
  backgroundPosition: "center",
  boxShadow: "none",
  height: "70%",
  width: "85%",
  position: "absolute",
  zIndex: 2,
  top: "30%",
  left: "12%",
};
export const styleStack = {
  width: "90%",
  position: "absolute",
  bottom: 0,
  left: "10%",
  zIndex: 2,
};
