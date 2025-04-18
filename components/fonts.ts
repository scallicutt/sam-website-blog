import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const finoSans = localFont({
  src: "../public/assets/fonts/Fino-Sans-Regular.ttf",
  display: "swap",
  variable: "--font-fino-sans",
});

export const obviouslyRegular = localFont({
  src: "../public/assets/fonts/Obviously-Regular.otf",
  display: "swap",
  variable: "--font-obviously-regular",
});

export const obviouslyLight = localFont({
  src: "../public/assets/fonts/Obviously-Light.otf",
  display: "swap",
  variable: "--font-obviously-light",
});
