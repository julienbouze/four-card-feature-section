import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"],weight: ["200", "400", "600"] });

export const metadata = {
  title: "Four card feature section",
  description: "A nice layout-based challenge for beginners. This will test anyone who is new to multi-column and responsive layouts.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} w-full`}>{children}</body>
    </html>
  );
}
