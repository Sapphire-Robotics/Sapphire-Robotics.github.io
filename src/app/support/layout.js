import Header from "../(with-gradient-image)/components/Header";
import { montserrat } from "../(with-gradient-image)/layout.js";
import "./globals.css";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}