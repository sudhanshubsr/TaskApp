import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/NavbarComponent";
import SessionProvider from "@/components/NextAuthProvider";
import {ContextProvider} from "@/utils/appcontext";
export const metadata = {
  title: "Task App",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
        <ContextProvider>
        <NavbarComponent />
        {children}
        </ContextProvider>
        </SessionProvider>
        </body>
    </html>
  );
}
