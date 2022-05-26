# How to incrementally migrate a Gatsby app to TypeScript

## Steps

1. Install a Gatsby project but do not select TypeScript as language
2. Install de dependencies and generate `tsconfig.json` as [stated in Gatsby docs](https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#migrating-to-typescript)
3. Make sure to add `"jsx": "react"` in `tsconfig.json`
4. [OPTIONAL] Install `prop-types` and use `InferProps` to guarantee runtime erros will still be caught. [Read more here](https://blog.logrocket.com/comparing-typescript-and-proptypes-in-react-applications/).
5. In order to import JS files in components, set `allowJs: true` in `tsconfig.json`. [Source](https://stackoverflow.com/a/56909179/4487722).
6. You also need to set `outDir: "./dist"` after setting the above config. [Source](https://stackoverflow.com/a/52910292/4487722).

### Good Resources:

- https://blog.logrocket.com/comparing-typescript-and-proptypes-in-react-applications/
- https://dillionmegida.com/p/convert-blog-to-typescript/
