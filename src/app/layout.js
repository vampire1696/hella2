import { Inter, Jost } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { Toaster } from "@/components/ui/sonner";

const font = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Hella Onboading Academy",
  description: "hella onboading academy made by Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className}`}>
        <Toaster />
        <div>{children}</div>
      </body>
    </html>
  );
}
