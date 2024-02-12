import Image2Back from "../../Images/Home8Image2backside.png";
import Image3Front from "../../Images/Home8Image3front.png";
import Group from "../../Images/Home8Group.svg";

export const styleBox1 = {
  background: "rgba(190, 55, 136, 1)",
  width: "100%",
  height: "830px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  zIndex: 0,
  overflow: "hidden",
};
export const styleBox2 = {
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  width: "50%",
};

export const styleBox3 = {
  background: `url(${Image2Back})  no-repeat`,
  position: "relative",
  backgroundSize: "100% 100%",
  boxShadow: "none",
  height: "430px",
  width: "640px",
  zIndex: 0,
};
export const styleBox4 = {
  background: `url(${Image3Front})  no-repeat`,
  position: "absolute",
  backgroundSize: "100% 100%",
  boxShadow: "none",
  height: "186px",
  width: "374px",
  zIndex: 1,
  top: "73%",
  left: "-15%",
};
export const styleBox41 = {
  background: `url(${Group})  no-repeat`,
  position: "absolute",
  backgroundSize: "100% 100%",
  boxShadow: "none",
  height: "85px",
  width: "230px",
  zIndex: 2,
  top: "25%",
  left: "15%",
};

export const styleTypography1 = {
  color: "#FFF",
  fontFamily: "Nunito",
  fontSize: "40px",
  fontWeight: 800,
  width: "100%",
  lineHeight: "40px",
  height: "130px",
};
export const styleTypography2 = {
  color: "#FFF",
  fontFamily: "Nunito",
  fontSize: "22px",
  fontWeight: 400,
  width: "86%",
  lineHeight: "34px",
};
export const styleFormcontrol = {
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "40px",
    border: "white",
    background: "rgba(255, 255, 255, 0.20)",
    color: "#FFF",
  },
  "& ::placeholder": {
    color: "#FFF",
    fontSize: "18px",
    fontWeight: 400,
  },
  backdropFilter: "blur(10px)",
  width: "330px",
  WebkitTextFillColor: "white",
};
