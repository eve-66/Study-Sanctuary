import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Study Sanctuary",
  description: "A sanctuary for learning and growth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
