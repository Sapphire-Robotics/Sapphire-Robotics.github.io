import { Montserrat } from "next/font/google";
import { Saira_Condensed  } from "next/font/google";
import Header from "./components/Header";
import Image from "next/image";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
});

export const sairaCondensed = Saira_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
});

export const metadata = {
  "title": "Sapphire Robotics"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Image src="/background.svg" width={1280} height={1280} alt="Placeholder picture" style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          position: "fixed",
          zIndex: "-1",
          left: "0",
          opacity: "17%"
        }} />
        <Header />
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}