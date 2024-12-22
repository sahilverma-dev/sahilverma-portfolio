import "@/styles/globals.css";

import Navigation from "@/components/navigation";

import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navigation />
      <main className="w-full min-h-dvh max-w-5xl mx-auto mt-24 md:mt-40 px-4 md:px-8">
        {children}
        <ScrollToTop />
      </main>
      <Footer />
    </>
  );
}
