export default function OtherLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex items-center justify-center w-full min-h-dvh max-w-5xl mx-auto px-4 md:px-8">
      {children}
    </main>
  );
}
