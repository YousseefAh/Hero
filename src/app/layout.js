import { Noto_Kufi_Arabic, Space_Grotesk } from "next/font/google";
import "./globals.css";

const notoKufi = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-kufi",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata = {
  title: "BePrime — أنت المدرب. إحنا المنظومة.",
  description: "BePrime بيحوّل شغلك لمنظومة احترافية كاملة — من البراندينج لحد ما العميل يجدد اشتراكه. كل ده وأنت مركز بس على اللي بتحبه: التدريب.",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${notoKufi.variable} ${spaceGrotesk.variable} font-sans`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
