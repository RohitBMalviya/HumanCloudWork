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
const withLink = (to, children) => <Link to={to}>{children}</Link>;

const actions = [
  {
    icon: <Avatar src={Icon1} sx={{ width: "56px", height: "55px" }} />,
    name: "Call",
  },
  {
    icon: <Avatar src={Icon2} sx={{ width: "56px", height: "55px" }} />,
    name: "Mail",
  },
  {
    icon: withLink(
      "/contactus",
      <Avatar src={Icon3} sx={{ width: "56px", height: "55px" }} />
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
        bottom: "5px",
        left: "1830px",
        zIndex: 4,
        "& .MuiFab-primary": { backgroundColor: "#6A1152", color: "#6A1152" },
        "& .MuiSpeedDial-actions": {
          height: "200px",
          justifyContent: "space-between",
        },
      }}
      icon={<Avatar src={Icon4} sx={{ width: "56px", height: "55px" }} />}
    >
      {actions.map((action) => (
        <SpeedDialAction key={action.name} icon={action.icon} />
      ))}
    </SpeedDial>
  );
}
