import { cn } from "@/lib/utils";
import {
  CheckCheckIcon,
  CircleAlertIcon,
  InfoIcon,
  TriangleAlertIcon,
} from "lucide-react";

type CallOutType = "info" | "warn" | "danger" | "success";

interface Props {
  type: CallOutType;
  children: React.ReactNode;
}

const CallOutIcon = ({ type }: { type: CallOutType }) => {
  switch (type) {
    case "info":
      return <InfoIcon size={18} />;
    case "warn":
      return <TriangleAlertIcon size={18} />;
    case "danger":
      return <CircleAlertIcon size={18} />;
    case "success":
      return <CheckCheckIcon size={18} />;
    default:
      return <InfoIcon size={18} />;
  }
};

const CallOut: React.FC<Props> = ({ type, children }) => {
  return (
    <div
      className={cn(
        "relative w-full rounded-2xl  backdrop-blur-sm px-8 py-2 mb-8",
        type === "info" && "bg-white/5",
        type === "warn" && "bg-yellow-500/20",
        type === "success" && " bg-green-500/20",
        type === "danger" && "bg-red-500/20"
      )}
    >
      <div
        className={cn(
          "absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 rounded-full aspect-square text-white p-2 border-4 border-background",
          type === "info" && " bg-blue-500",
          type === "warn" && " bg-yellow-500",
          type === "success" && " bg-green-500",
          type === "danger" && " bg-red-500"
        )}
      >
        <CallOutIcon type={type} />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default CallOut;
