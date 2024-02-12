import Footer from "./_Components/_Footer/Footer";
import Navbar from "./_Components/_Navbar/Navbar";
import "../app/_Assests/Style/global.css";
import ChatBox from "./_Components/_Home/ChatBox";
export const metadata = {
  title: "datainsights",
  description: "HumanCloud",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap"
        rel="stylesheet"
      />

      <Navbar />
      <body>{children}</body>
      <ChatBox />
      <Footer />
    </html>
  );
}
