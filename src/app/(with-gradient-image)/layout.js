import { Montserrat, Saira_Condensed, Poiret_One } from "next/font/google";
import Header from "./components/Header";
import Image from "next/image";
import "./globals.css";

export const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
});

export const sairaCondensed = Saira_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
});

export const poiretOne = Poiret_One({
  weight: ["400"],
  subsets: ["latin"]
});

export const metadata = {
  "title": "Sapphire Robotics"
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Image src="/background.png" width={1280} height={1280} alt="Gradient" style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          position: "fixed",
          zIndex: "-1",
          left: "0",
          opacity: "100%"
        }} />
        <Header />
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}