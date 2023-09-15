import "./globals.css";
import { Quicksand } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import React from "react";
import Footer from "@/components/common/Footer";
import { useLocale, useMessages } from "next-intl";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "FIBERITECH",
  description: "Fiber optical equiment shop",
};

export default function RootLayout({ children, params }) {
  const locale = useLocale();

  const messages = useMessages();

  // // Validate that the incoming `locale` parameter is a valid locale
  // if (params.locale !== locale) {
  //   notFound();
  // }

  return (
    <html lang={locale}>
      <body className={quicksand.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
