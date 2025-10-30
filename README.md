
![Discord](https://img.shields.io/discord/828676951023550495?color=5865F2&logo=discord&logoColor=white)
![GitHub repo size](https://img.shields.io/github/repo-size/Luna-devv/mellow-web?maxAge=3600)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/I3I6AFVAP)

[`@mwlica/eslint`](https://www.npmjs.com/package/@mwlica/eslint) package provides a premade, **opinionated** ESLint configuration for TypeScript projects.

This package was primarily made for my own projects:
* [Wamellow Website](https://github.com/Luna-devv/mellow-web)
* [Wamellow Bot](https://github.com/Luna-devv/mellow-bot)

## Setup

```bash
npm install --save-dev @mwlica/eslint eslint typescript typescript-eslint
```
```bash
bun i -D @mwlica/eslint eslint typescript typescript-eslint
```

## Usage

1.  **Create `tsconfig.json`:**

    Create a `tsconfig.json` file in the root of your project. You can start with a basic configuration like this:

    ```json
    {
      "compilerOptions": {
        "target": "ESNext",
        "module": "NodeNext",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
      }
    }
    ```

2.  **Create `tsconfig.eslint.json`:**

    Create a `tsconfig.eslint.json` file in your project root. This file extends your main `tsconfig.json` and is specifically for ESLint.

    ```json
    {
        "extends": "./tsconfig.json",
        "compilerOptions": {
            "exactOptionalPropertyTypes": true,
            "module": "NodeNext",
            "typeRoots": [
                "./node_modules/@eslint-types",
                "./node_modules/@types"
            ],
            "noEmit": true,
            "allowJs": true,
            "checkJs": true,
            "target": "ESNext"
        },
        "include": [
            "src/**/*",
            "tests/**/*",
            "scripts/**/*"
        ]
    }
    ```

3.  **Create `eslint.config.mjs`:**

    Create an `eslint.config.mjs` file in your project root to configure ESLint.

    ```javascript
    import { base, recommended, strict } from '@mwlica/eslint';
    import tseslint from "typescript-eslint";

    export default tseslint.config(
        base,
        recommended,
        strict
    );
    ```

    You can apply specific configurations to different parts of your project. For example, you might want to use a different set of rules for your tests or scripts.

    ```javascript
    import { base, recommended, strict } from '@mwlica/eslint';
    import tseslint from "typescript-eslint";

    export default tseslint.config(
        base,
        recommended,
        tseslint.config(strict, { ignores: ['scripts/**/*'] })
    );
    ```

## Configurations

This package exports three configurations:

*   `base`: The base configuration to make eslint work with this package.
*   `recommended`: A recommended set of rules that builds on the base configuration.
*   `strict`: The strictest set of rules; **this might not be suitable for your project**.

You can use them in any combination you like. In the example above, we are using all three, but you can customize it to your needs. The `ignores` option in the example shows how to exclude files or directories from specific rule sets.