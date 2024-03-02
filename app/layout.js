import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/NavbarComponent";
import SessionProvider from "@/components/NextAuthProvider";
import { ContextProvider } from "@/utils/appcontext";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import {Toaster} from "@components/ui/toaster";
export const metadata = {
  title: "Task App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <ReactQueryProvider>
            <ContextProvider>
              <NavbarComponent />
              {children}
            </ContextProvider>
          </ReactQueryProvider>
        </SessionProvider>
        <Toaster />
      </body>
    </html>
  );
}
