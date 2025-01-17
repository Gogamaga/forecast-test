import type { Metadata } from "next";
import localFont from "next/font/local";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import "./globals.css";
import {SearchLocationProvider} from "@/app/context/search-location";
import {LoadingForecastProvider} from "@/app/context/loading-forecast";
import {ErrorFetchingProvider} from "@/app/context/error-fetching";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

        <AntdRegistry>
            <LoadingForecastProvider>
                <SearchLocationProvider>
                    <ErrorFetchingProvider>
                        {children}
                    </ErrorFetchingProvider>
                </SearchLocationProvider>
            </LoadingForecastProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
