import { Inter } from "next/font/google";
import "./globals.css";
import { GlobalProvider } from "../context/GlobalContext";
import { AnimeProvider } from "../context/AnimeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify Clone - Next.js",
  description: "This is a spotify clone built with Next.js",
};

const MainLayout = ({ children }) => {
  return (
    <GlobalProvider>
      <html lang="en">
        <body>
          <AnimeProvider>
            <main>{children}</main>
          </AnimeProvider>
        </body>
      </html>
    </GlobalProvider>
  );
};

export default MainLayout;
