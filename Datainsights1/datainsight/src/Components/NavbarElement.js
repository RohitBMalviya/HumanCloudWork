import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const navbarElements = [
  {
    id: 1.0,
    title: "Home",
    link: "/",
  },
  {
    id: 2.0,
    title: "About",
    link: "/about",
  },
  {
    id: 3.0,
    title: "Why us",
    link: "/whyus",
    icon: <ArrowDropDownIcon />,
    subtitle: [
      {
        id: 3.1,
        title: "Features",
        link: "/features",
      },
      {
        id: 3.2,
        title: "How it Works",
        link: "/howitworks",
      },
    ],
  },
  {
    id: 4.0,
    title: "Use Case",
    link: "/usecases",
  },
];

export default navbarElements;
