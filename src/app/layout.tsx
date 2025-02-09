import "./globals.css";
import type {Metadata} from "next";
import {Close, TicketPercent} from "@/constants/icons";
import {inter, poppins, spaceGrotesk} from "@/lib/utils/fonts";
import Action from "@/components/action";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";


export const metadata: Metadata = {
  title: "3legant",
  description: "Furniture store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable} antialiased`}
      >
      {children}
      </body>
    </html>
  );
}
