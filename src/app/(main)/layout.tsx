import Footer from "@/components/footer";
import Navigation from "@/components/navigation";

const MainLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Navigation />
      <main className="w-full min-h-dvh max-w-5xl mx-auto mt-24 md:mt-40 px-4 py-4 md:px-8">
        {children}
        {/* <ScrollToTop /> */}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
