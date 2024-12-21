import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import AnimatedBackground from "@/components/animated/animated-background";
import Footer from "@/components/footer";
import ScrollToTop from "@/components/scroll-to-top";
import Providers from "@/components/providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sahilverma.dev"),
  title: {
    default: "Sahil Verma",
    template: `%s - Sahil Verma`,
  },
  description:
    "Hello, I'm Sahil Verma. - I'm a full stack developer from Himachal Pradesh India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Providers>
        <body className={` ${poppins.className}  antialiased`}>
          <AnimatedBackground />
          <Navigation />
          <main className="w-full min-h-dvh max-w-5xl mx-auto mt-20 md:mt-36 px-4 md:px-8">
            {children}
            <ScrollToTop />
          </main>
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
