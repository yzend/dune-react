"use client"

import * as React from "react"

// Stub: Form components (react-hook-form integration)
// These need to be properly implemented with react-hook-form

type FormFieldContextValue = {
  name: string
}

type FormItemContextValue = {
  id: string
}

const FormFieldContext = React.createContext<FormFieldContextValue>({} as FormFieldContextValue)
const FormItemContext = React.createContext<FormItemContextValue>({} as FormItemContextValue)

function Form({ children, ...props }: React.ComponentProps<"form"> & { [key: string]: any }) {
  return <form {...props}>{children}</form>
}

function FormField({ name, render }: { name: string; render: (args: { field: any }) => React.ReactNode; control?: any }) {
  return (
    <FormFieldContext.Provider value={{ name }}>
      {render({ field: { name, value: "", onChange: () => {}, onBlur: () => {}, ref: () => {} } })}
    </FormFieldContext.Provider>
  )
}

function FormItem({ className, children, ...props }: React.ComponentProps<"div">) {
  const id = React.useId()
  return (
    <FormItemContext.Provider value={{ id }}>
      <div className={className} {...props}>{children}</div>
    </FormItemContext.Provider>
  )
}

function FormLabel({ className, children, ...props }: React.ComponentProps<"label">) {
  return <label className={className} {...props}>{children}</label>
}

function FormControl({ children, ...props }: React.ComponentProps<"div">) {
  return <div {...props}>{children}</div>
}

function FormDescription({ className, children, ...props }: React.ComponentProps<"p">) {
  return <p className={className} {...props}>{children}</p>
}

function FormMessage({ className, children, ...props }: React.ComponentProps<"p">) {
  return <p className={className} {...props}>{children}</p>
}

export {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
}
