import BlurBackground from "@/components/blur-background";
import { Navbar } from "@/components/navbar";
import ScrollbarWrapper from "@/components/scrollbar";
import { fontSans } from "@/config/fonts";
import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Providers } from "./providers";
import Footer from "@/components/footer";
import { metaConfig } from "@/config/meta";

export const metadata: Metadata = {
  ...metaConfig,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <BlurBackground />
          <ScrollbarWrapper>
            <div className="relative flex h-full flex-col">
              <Navbar />
              <main className="container mx-auto max-w-7xl flex-grow px-6">
                {children}
              </main>
              <Footer />
            </div>
          </ScrollbarWrapper>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </Providers>
      </body>
    </html>
  );
}
