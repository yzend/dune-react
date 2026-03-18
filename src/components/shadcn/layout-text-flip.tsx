"use client"

import * as React from "react"
import { cn } from "@/lib/utils/index"

// Stub: Layout text flip animation component
export function LayoutTextFlip({
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & { [key: string]: any }) {
  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  )
}
