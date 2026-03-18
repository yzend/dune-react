"use client"

import * as React from "react"

// Stub: Animated theme toggler component
export function AnimatedThemeToggler({ className, ...props }: React.ComponentProps<"button"> & { [key: string]: any }) {
  return <button className={className} {...props} />
}
