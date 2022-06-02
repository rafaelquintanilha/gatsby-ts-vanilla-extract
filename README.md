# How to incrementally migrate a Gatsby app to TypeScript

## Steps

1. Install a Gatsby project but do not select TypeScript as language
2. Install the dependencies and generate `tsconfig.json` as [stated in Gatsby docs](https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/#migrating-to-typescript)
3. Make sure to add `"jsx": "react"` in `tsconfig.json`
4. [OPTIONAL] Install `prop-types` and use `InferProps` to guarantee runtime erros will still be caught. [Read more here](https://blog.logrocket.com/comparing-typescript-and-proptypes-in-react-applications/).
5. In order to import JS files in components, set `allowJs: true` in `tsconfig.json`. [Source](https://stackoverflow.com/a/56909179/4487722).
6. You also need to set `outDir: "./dist"` after setting the above config. [Source](https://stackoverflow.com/a/52910292/4487722).
7. [OPTIONAL] If you want to use CSS Modules in `.tsx` files, then you need to create `globals.d.ts` in `/src`. [Source](https://stackoverflow.com/a/71093050/4487722)
8. [OPTIONAL] If ESLint is enabled, it may raise a parsing error on the `*.d.ts` files. A possible workaround is to disable the linter on those files. [Source](https://stackoverflow.com/a/63239805/4487722)
9. [OPTIONAL] If importing .svg files as React components, you also will need to add it to `globals.d.ts`. [Source](https://stackoverflow.com/a/71904207/4487722)

### Good Resources:

- https://blog.logrocket.com/comparing-typescript-and-proptypes-in-react-applications/
- https://dillionmegida.com/p/convert-blog-to-typescript/
- [BEST PRACTICES] [Refer to this website](https://react-typescript-cheatsheet.netlify.app/) for great React + TS best practices
