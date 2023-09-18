import "./globals.css";
import { Quicksand } from "next/font/google";
import Navbar from "@/components/common/Navbar";
import React from "react";
import Footer from "@/components/common/Footer";
import { useLocale, useMessages } from "next-intl";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToastNotification from "@/components/common/ToastNotification";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "FIBERITECH",
  description: "Fiber optical equiment shop",
};

export default function RootLayout({ children, params }) {
  const locale = useLocale();

  const messages = useMessages();

  // Validate that the incoming `locale` parameter is a valid locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={quicksand.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
          <ToastNotification />
          <ToastContainer
            position="top-right"
            autoClose="3000"
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
          />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
