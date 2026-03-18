// Stub: Tweet card component
export function truncate(str: string, maxLength: number = 280): string {
  if (str.length <= maxLength) return str
  return str.slice(0, maxLength) + "..."
}

export function TweetCard({ children, ...props }: React.ComponentProps<"div"> & { [key: string]: any }) {
  return <div {...props}>{children}</div>
}

import * as React from "react"
