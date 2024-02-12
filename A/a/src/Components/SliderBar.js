import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import MenuItems from "./MenuItems";

function SliderBar() {
  const SlidebarData = [
    // Cluster
    {
      name: "Cluster",
      iconOpened: <KeyboardArrowUpIcon />,
      iconClosed: <KeyboardArrowDownIcon />,
      subItem: [
        { name: "Upload", link: "/" },
        { name: "Export", link: "/" },
      ],
    },
    // Namespace
    {
      name: "Namespace",
      iconOpened: <KeyboardArrowUpIcon />,
      iconClosed: <KeyboardArrowDownIcon />,
      subItem: [{ name: "List", link: "/" }],
    },
    // Workload
    {
      name: "Workload",
      iconOpened: <KeyboardArrowUpIcon />,
      iconClosed: <KeyboardArrowDownIcon />,
      subItem: [
        {
          name: "Deployment",
          iconOpened: <KeyboardArrowUpIcon />,
          iconClosed: <KeyboardArrowDownIcon />,
          subItem: [{ name: "List", link: "/" }],
        },
        {
          name: "Pod",
          iconOpened: <KeyboardArrowUpIcon />,
          iconClosed: <KeyboardArrowDownIcon />,
          subItem: [{ name: "List", link: "/" }],
        },
      ],
    },
    //Network
    {
      name: "Network",
      iconOpened: <KeyboardArrowUpIcon />,
      iconClosed: <KeyboardArrowDownIcon />,
      subItem: [
        {
          name: "Service",
          iconOpened: <KeyboardArrowUpIcon />,
          iconClosed: <KeyboardArrowDownIcon />,
          subItem: [{ name: "List", link: "/" }],
        },
      ],
    },
    // Config
    {
      name: "Config",
      iconOpened: <KeyboardArrowUpIcon />,
      iconClosed: <KeyboardArrowDownIcon />,
      subItem: [
        {
          name: "HPA",
          iconOpened: <KeyboardArrowUpIcon />,
          iconClosed: <KeyboardArrowDownIcon />,
          subItem: [{ name: "List", link: "/" }],
        },
      ],
    },
    //Node
    {
      name: "Node",
      iconOpened: <KeyboardArrowUpIcon />,
      iconClosed: <KeyboardArrowDownIcon />,
      subItem: [{ name: "List", link: "/" }],
    },
    //Prometheus
    {
      name: "Prometheus",
      iconOpened: <KeyboardArrowUpIcon />,
      iconClosed: <KeyboardArrowDownIcon />,
      subItem: [
        { name: "Metric", link: "/" },
        { name: "Generate Query", link: "/" },
      ],
    },
    //Datadog
    {
      name: "Datadog",
      iconOpened: <KeyboardArrowUpIcon />,
      iconClosed: <KeyboardArrowDownIcon />,
      subItem: [
        { name: "Metric", link: "/" },
        { name: "Generate Query", link: "/" },
      ],
    },
  ];

  return (
    <>
      {SlidebarData.map((item, index) => (
        <MenuItems
          key={index}
          name={item.name}
          iconOpened={item.iconOpened}
          iconClosed={item.iconClosed}
          subItems={item.subItem || null}
        />
      ))}
    </>
  );
}

export default SliderBar;
