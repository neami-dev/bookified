import type { Metadata } from "next";
import { IBM_Plex_Serif, Mona_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";
import Navbar from "@/components/Navbar";
// import {Toaster} from "@/components/ui/sonner";

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap'
});

const monaSans = Mona_Sans({
  variable: '--font-mona-sans',
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Bookified",
  description: "Transform your books into interactive AI conversations. Upload PDFs, and chat with your books using voice.",
};

/**
 * Root layout that wraps application pages with global fonts, authentication, and navigation.
 *
 * Renders the top-level HTML and BODY elements, applies configured font CSS variables and base
 * body classes, and provides Clerk authentication context around the Navbar and page content.
 *
 * @param children - The page content to render inside the layout
 * @returns The root HTML structure for the application, including the auth provider, navbar, and children
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ibmPlexSerif.variable} ${monaSans.variable} relative font-sans antialiased`}
      >
        <ClerkProvider>
          <Navbar />
          {children}
          {/* <Toaster /> */}
        </ClerkProvider>
      </body>
    </html>
  );
}