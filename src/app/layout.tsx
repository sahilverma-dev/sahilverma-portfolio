import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "@/styles/globals.css";

import AnimatedBackground from "@/components/animated/animated-background";
import Providers from "@/components/providers";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sahilverma.dev"),
  title: {
    default: "Sahil Verma a fullstack developer from India 🇮🇳",
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
        <body className={`${poppins.className} antialiased`}>
          {children}
          <AnimatedBackground />
        </body>
      </Providers>
    </html>
  );
}
