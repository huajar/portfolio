import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import "./globals.css";
import { LocaleProvider } from "@/contexts/LocaleContext";
import IntlProvider from "@/components/IntlProvider";
import { displayFont, bodyFont, monoFont } from "./fonts";
import { Header } from "@/components/header";
import Footer from "@/components/footer";


export const metadata: Metadata = {
  title: "Rodrigo's Portfolio",
  description: "Searching for a new opportunity as a Full Stack Developer",
};

export const viewport: Viewport = {
  themeColor: "#F5F0EB",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale")?.value === "es" ? "es" : "en";

  return (
    <html lang={locale} className="light">
      <body className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} antialiased bg-bg font-body`}>
        <LocaleProvider>
          <IntlProvider>
              <a
                href="#main-content"
                className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-[100] focus-visible:bg-surface focus-visible:px-4 focus-visible:py-2 focus-visible:font-bold focus-visible:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                Skip to main content
              </a>
              <Header />
              <main id="main-content" tabIndex={-1}>{children}</main>
              <Footer />
          </IntlProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
