"use client"

import * as React from "react"

// Stub: Client-side tweet card component
export function TweetCardClient({ children, ...props }: React.ComponentProps<"div"> & { [key: string]: any }) {
  return <div {...props}>{children}</div>
}
