import * as React from "react";
import SpeedDial from "@mui/material/SpeedDial";
// import CloseIcon from "@mui/icons-material/Close";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Icon1 from "../../_Assests/_Images/ChatBotIcon1.svg";
import Icon2 from "../../_Assests/_Images/ChatBotIcon2.svg";
import Icon3 from "../../_Assests/_Images/ChatBotIcon3.svg";
import Icon4 from "../../_Assests/_Images/ChatBoxIcon4.svg";
import { Avatar } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
const withLink = (to, children) => <Link href={to}>{children}</Link>;

const actions = [
  {
    icon: <Image src={Icon2} style={{ width: "50px", height: "50px" }} />,
    name: "Mail",
  },
  {
    icon: withLink(
      "/contactus",
      <Image src={Icon3} style={{ width: "50px", height: "50px" }} />
    ),
    name: "Sms",
  },
];

export default function ChatBox() {
  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{
        position: "fixed",
        bottom: "10px",
        left: "1820px",
        zIndex: 4,
        "& .MuiFab-primary": { backgroundColor: "#6A1152", color: "#6A1152" },
        "& .MuiSpeedDial-actions": {
          height: "120px",
          justifyContent: "space-between",
        },
      }}
      icon={<Image src={Icon4} style={{ width: "58px", height: "55px" }} />}
    >
      {actions.map((action) => (
        <SpeedDialAction key={action.name} icon={action.icon} />
      ))}
    </SpeedDial>
  );
}
