import Image from "next/image";
import React from "react";
import Group1 from "../../_Assests/_Images/Home2Group1.svg";
import Group2 from "../../_Assests/_Images/Home2Group2.svg";
import Group3 from "../../_Assests/_Images/Home2Group3.svg";
import Group4 from "../../_Assests/_Images/Home2Group4.svg";
import Group5 from "../../_Assests/_Images/Home2Group5.svg";
import Group6 from "../../_Assests/_Images/Home2Group6.svg";

const UseCaseImage = [
  {
    id: 1,
    img: Group1,
    alts: "-",
    height: "10%",
  },
  {
    id: 2,
    img: Group2,
    alts: "-",
    height: "10%",
  },
  {
    id: 3,
    img: Group3,
    alts: "-",
    height: "10%",
  },
  {
    id: 4,
    img: Group4,
    alts: "-",
    height: "20%",
  },
  {
    id: 5,
    img: Group5,
    alts: "-",
    height: "15%",
  },
  {
    id: 6,
    img: Group6,
    alts: "-",
    height: "10%",
  },
];

function Home2AboutImage1({ ids, tops, lefts, rights }) {
  const imgs = UseCaseImage.filter((items) => items.id === ids);
  const styleImg = {
    position: "absolute",
    zIndex: 6,
    width: "100%",
    top: tops,
    left: lefts,
    right: rights,
  };
  return (
    <>
      {imgs.map((items, index) => (
        <Image
          key={index}
          src={items.img}
          alt={items.alts}
          style={{ ...styleImg, height: `${items.height}` }}
        />
      ))}
    </>
  );
}

export default Home2AboutImage1;
