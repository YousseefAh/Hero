import { Poppins } from "next/font/google";
import "./globals.css";
import StagewiseToolbarWrapper from "../components/layout/StagewiseToolbarWrapper";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Yadora",
  description: "Learn from your favorite creators about fantasy reports",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} font-sans`}
        suppressHydrationWarning
      >
        <StagewiseToolbarWrapper />
        {children}
      </body>
    </html>
  );
} 