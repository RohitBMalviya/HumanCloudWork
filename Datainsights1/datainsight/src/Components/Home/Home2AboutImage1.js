import React from "react";
import Group1 from "../../Images/Home2Group1.svg";
import Group2 from "../../Images/Home2Group2.svg";
import Group3 from "../../Images/Home2Group3.svg";
import Group4 from "../../Images/Home2Group4.svg";
import Group5 from "../../Images/Home2Group5.svg";
import Group6 from "../../Images/Home2Group6.svg";

const UseCaseImage = [
  {
    id: 1,
    img: Group1,
    alts: "-",
  },
  {
    id: 2,
    img: Group2,
    alts: "-",
  },
  {
    id: 3,
    img: Group3,
    alts: "-",
  },
  {
    id: 4,
    img: Group4,
    alts: "-",
  },
  {
    id: 5,
    img: Group5,
    alts: "-",
  },
  {
    id: 6,
    img: Group6,
    alts: "-",
  },
];

function Home2AboutImage1({ ids, widths, tops, lefts }) {
  const imgs = UseCaseImage.filter((items) => items.id === ids);
  const styleImg = {
    position: "absolute",
    zIndex: 6,
    width: widths,
    top: tops,
    left: lefts,
  };
  return (
    <>
      {imgs.map((items, index) => (
        <img key={index} src={items.img} alt={items.alts} style={styleImg} />
      ))}
    </>
  );
}

export default Home2AboutImage1;
