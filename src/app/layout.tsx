import SmoothScrollProvider from "@/components/shared/SmoothScroll";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import DemoShowcase from "@/components/shared/demo-showcase";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import { interTight } from "@/utils/font";
import { generateMetadata } from "@/utils/generateMetaData";
import { Metadata } from "next";
import { ReactNode, Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Felysyum : Elysium's Digital Gold",
  description: "Felysyum is Elysium's Digital Gold.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="connect-src 'self' https://www.google-analytics.com https://gasstation.polygon.technology https://polygon-rpc.com"
        />
      </head>
      <body className={`${interTight.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense>
            <SmoothScrollProvider>
              <Navbar />
              <DemoShowcase activeDemoId={22} />
              {children}
              <Footer />
            </SmoothScrollProvider>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
