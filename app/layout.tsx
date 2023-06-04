// import { Inter } from "next/font/google";

import ToasterContext from "./context/ToasterContext";

import "./globals.css";
import AuthContext from "./context/AuthContext";
import ActiveStatus from "./components/ActiveStatus";
import { SocketConnect } from './components/SocketConnet';

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Messenger",
  description: "Messenger",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SocketConnect/>
        <AuthContext>
          <ActiveStatus />
          <ToasterContext />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
