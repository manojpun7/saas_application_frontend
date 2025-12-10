"use client";
import "./globals.css";
import { Provider } from "react-redux";
import store from "@/lib/store/store";
import Navbar from "@/lib/components/navbar/Navbar";
import Footer from "@/lib/components/footer/Footer";
import { poppins } from "@/fonts/fonts";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Do not show footer on dashboard routes
  const hideFooter = pathname.startsWith("/institute/dashboard");

  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-screen flex flex-col">
        <Provider store={store}>
          <Navbar />

          <main className="flex-1">{children}</main>

          {!hideFooter && <Footer />}
        </Provider>
      </body>
    </html>
  );
}
