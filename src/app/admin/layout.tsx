import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "پنل مدیریت | پورتفولیو",
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" data-theme="dark">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}