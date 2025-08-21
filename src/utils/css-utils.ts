import { withFluid } from "@fluid-tailwind/tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twMerge = extendTailwindMerge({}, withFluid);

/**
 * 合并CSS类名，支持条件类名和Tailwind冲突解决
 * 支持Fluid Tailwind功能
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * 液体玻璃效果样式
 */
export function liquidGlass(...args: ClassValue[]) {
  return cn(
    "shadow-[0px_-1px_0px_0px_#FFFFFF40_inset,_0px_1px_0px_0px_#FFFFFF40_inset]",
    args
  );
}
