import * as React from "react"
import { cn } from "@/lib/utils/index"

// Stub: Promo badge component
export default function ShinyPromoBadge({
  className,
  children,
  showArrow,
  ...props
}: React.ComponentProps<"span"> & { showArrow?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        className
      )}
      {...props}
    >
      {children}
      {showArrow && <span className="ml-1">→</span>}
    </span>
  )
}
