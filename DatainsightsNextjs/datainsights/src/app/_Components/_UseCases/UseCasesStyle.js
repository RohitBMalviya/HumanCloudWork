import Icons1 from "../../_Assests/_Images/StyleIcon1.svg";
import Icons2 from "../../_Assests/_Images/StyleIcon2.svg";

export const styleTypography1 = {
  fontFamily: "Nunito",
  fontWeight: 700,
  fontSize: "50px",
  lineHeight: "55px",
  alignContent: "center",
  color: "#242331",
};
export const styleTypography2 = {
  fontFamily: "Nunito",
  width: "98%",
  fontWeight: 500,
  lineHeight: "24px",
  textAlign: "center",
  color: "#797979",
  fontSize: "22px",
};

export const styleBox1 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
export const styleBox2 = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "500px",
};
export const styleTypography3 = {
  color: "rgba(36, 35, 49, 1)",
  fontFamily: "Nunito",
  fontSize: "30px",
  fontWeight: 700,
  lineHeight: "33px",
  textTransform: "capitalize",
};
export const styleTypography4 = {
  color: "#242331",
  fontFamily: "Nunito",
  fontSize: "40px",
  fontWeight: 700,
  lineHeight: "44px",
  width: "80%",
};

export const styleTypography5 = {
  color: "#797979",
  fontFamily: "Nunito",
  fontSize: "22px",
  fontWeight: 400,
  lineHeight: "34px",
  width: "75%",
};

export const styleTypography6 = {
  color: "#242331",
  fontFamily: "Nunito",
  fontSize: "40px",
  fontStyle: "normal",
  fontWeight: 800,
  lineHeight: "normal",
};
export const styleTypography7 = {
  color: "#242331",
  fontFamily: "Nunito",
  fontSize: "30px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "47px",
  width: "100%",
};
export const styleTypography8 = {
  color: "#797979",
  fontFamily: "Nunito",
  fontSize: "22px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "34.63px",
  width: "100%",
};

export const styleTypography9 = {
  color: "#CBC2C2",
  fontFamily: "Nunito",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  textAlign: "center",
};
export const styleTypography10 = {
  color: "#797979",
  fontFamily: "Nunito",
  fontSize: "22px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "34.63px",
  width: "80%",
};

export const styleTypography11 = {
  color: "white",
  fontFamily: "Nunito",
  fontSize: "22px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "34.63px",
  width: "90%",
};
export const styleGrid = {
  backgroundColor: "#FFFFFF",
  borderRadius: "40px",
  height: "540px",
  boxShadow: "4px 4px 7px 0px #D9D9D9",
  paddingTop: "30px",
};

export const StyleButton = {
  background: "rgba(249, 249, 249, 1)",
  width: "448px",
  height: "112px",
  borderRadius: "20px",
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: `url(${Icons1})  no-repeat`,
        backgroundSize: "100% 100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "120px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: `url(${Icons2})  no-repeat`,
        backgroundSize: "100% 100%",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "1300px",
        marginTop: "120px",
      }}
      onClick={onClick}
    />
  );
}

export const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
