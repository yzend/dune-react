"use client"

import * as React from "react"
import { Collapsible as CollapsiblePrimitive } from "@base-ui/react/collapsible"

function Collapsible({
  children,
  ...props
}: CollapsiblePrimitive.Root.Props & React.ComponentPropsWithoutRef<"div">) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props}>{children}</CollapsiblePrimitive.Root>
}

function CollapsibleTrigger({
  asChild,
  children,
  ...props
}: CollapsiblePrimitive.Trigger.Props & { asChild?: boolean }) {
  if (asChild) {
    const child = children as React.ReactElement<any>
    const isNativeButton =
      typeof child?.type === "string" && child.type === "button"
    return (
      <CollapsiblePrimitive.Trigger
        data-slot="collapsible-trigger"
        render={child}
        nativeButton={isNativeButton}
        {...props}
      />
    )
  }
  return (
    <CollapsiblePrimitive.Trigger data-slot="collapsible-trigger" {...props}>
      {children}
    </CollapsiblePrimitive.Trigger>
  )
}

function CollapsibleContent({
  asChild,
  children,
  ...props
}: CollapsiblePrimitive.Panel.Props & { asChild?: boolean }) {
  if (asChild) {
    return (
      <CollapsiblePrimitive.Panel
        data-slot="collapsible-content"
        render={children as React.ReactElement}
        {...props}
      />
    )
  }
  return (
    <CollapsiblePrimitive.Panel data-slot="collapsible-content" {...props}>
      {children}
    </CollapsiblePrimitive.Panel>
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
