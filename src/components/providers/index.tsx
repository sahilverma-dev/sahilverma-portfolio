import { CSPostHogProvider } from "./posthog-provider";

const Providers = ({ children }: React.PropsWithChildren) => {
  return <CSPostHogProvider>{children}</CSPostHogProvider>;
};
export default Providers;
