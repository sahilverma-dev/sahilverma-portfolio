import { Toaster } from "sonner";
import { CSPostHogProvider } from "./posthog-provider";
import NextTopLoader from "nextjs-toploader";

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <CSPostHogProvider>
      <NextTopLoader color="#eb5200" showSpinner={false} />
      <Toaster richColors />
      {children}
    </CSPostHogProvider>
  );
};
export default Providers;
