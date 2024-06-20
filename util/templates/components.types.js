module.exports = (componentName) => ({
  name: "components",
  content: `export type ${componentName}Props = {
    foo: string;
}
`,
  extension: `.types.ts`,
});
