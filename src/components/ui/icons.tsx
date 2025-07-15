/* eslint-disable @next/next/no-img-element */

import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

export const CalDotComIcon: React.FC<IconProps> = ({ className }) => (
  <img
    src="https://avatars.githubusercontent.com/u/79145102?v=4"
    alt=""
    className={cn(
      "flex-shrink-0 h-8 w-8 aspect-square object-cover rounded-md",
      className
    )}
  />
);
