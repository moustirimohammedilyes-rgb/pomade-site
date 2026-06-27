import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Datélys by I&C | Crème Anti-Âge Naturelle",
  description: "Crème anti-âge naturelle à base de noyaux de dattes. Une beauté naturelle inspirée de la nature. Formulée avec de l'huile et de la poudre de noyaux de dattes.",
  keywords: ["Datélys", "crème anti-âge", "noyaux de dattes", "beauté naturelle", "I&C", "cosmétiques naturels"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
