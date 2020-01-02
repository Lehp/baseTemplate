declare module "*.jade" {
    const content: Function;
    export default  content;
}

declare module "*.pug" {
    const content: Function;
    export default content;
}
declare module "*.html" {
  const content: Function;
  export default content;
}
