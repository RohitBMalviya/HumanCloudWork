import LinkedINLogo from "../Images/LinkedInlogo.svg";
import InstagramLogo from "../Images/Instagramlogo.svg";
import XLogo from "../Images/Xlogo.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export const Pages = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "How it Work",
    link: "/howitworks",
  },
  {
    id: 4,
    title: "Use Cases",
    link: "/usecases",
  },
];
export const Help = [
  {
    id: 1,
    title: "Help Center",
    link: "/helpcenter",
  },
  {
    id: 2,
    title: "Contact Support ",
    link: "/contactSupport",
  },
];
export const ContactUs = [
  {
    id: 1,
    title: "info@datainsights.Ltd",
    link: "/contactus",
  },
  {
    id: 2,
    title: "+91 8530116304",
  },
];
export const Followus = [
  {
    id: 1,
    Logo: XLogo,
  },
  {
    id: 2,
    Logo: LinkedINLogo,
  },
  {
    id: 3,
    Logo: InstagramLogo,
  },
];

export const Data = [
  {
    id: 1,
    title: "Try Datainsights",
    desc: "Download and start your trail today",
    text: "START TRIAL",
    link: "/contactus",
    logo: <ArrowForwardIcon />,
  },
  {
    id: 2,
    title: "Get Datainsights today",
    desc: "Choose the best analytics option for you",
    text: "BUY NOW",
    link: "#",
    logo: <ArrowForwardIcon />,
  },
];
