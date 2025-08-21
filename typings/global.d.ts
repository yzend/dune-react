declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module "*.less" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
