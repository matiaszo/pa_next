import localFont from "next/font/local";
import { Roboto } from "next/font/google"
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const roboto = Roboto({
  weight: ["100", "400", "900"],
  style:"italic",
  variable: "--roboto",
  subsets: ["latin"]
})
import next from "next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} antialiased min-h-screen flex flex-col justify-between`}
      >
        {/* <Header/> */}
        <main className="flex flex-wrap min-h-[100vh] justify-center items-center gap-12 bg-gradiente p-10">{children}</main>
        {/* <Footer thi="i'm" is= "the" a="footer" foot/> */}
      </body>
    </html>
  );
}
