# Starter code for Sundaes on Demand

Created for the Udemy course [React Testing Library with Jest / Vitest](https://www.udemy.com/course/react-testing-library)

## How this project was created

This project was created using this command:

```sh
npm create vite@latest sundae-starter -- --template react
```

and then following all of the steps below.

I also removed a few unnecessary files, and updated

- App.jsx
- index.css
- this README file 😄

## Install React Bootstrap, Vitest, and React Testing Library

```sh
npm install -D vitest @vitest/ui eslint-plugin-vitest
npm install -D jsdom @testing-library/jest-dom @testing-library/react eslint-plugin-jest-dom eslint-plugin-testing-library
npm install bootstrap react-bootstrap
```

## Add Bootstrap

Add this line to _src/main.jsx_:

```js
import "bootstrap/dist/css/bootstrap.min.css";
```

## Update port to 3000

To match the expectation of the sundae server, and avoid CORS errors, add this to the property / value to the `defineConfig` argument in _vite.config.js_:

```js
  server: {
    port: 3000,
    // exit if port 3000 is in use (to avoid CORS errors; server expects port 3000)
    strict: true,
  },
```

## Add `start` script to package.json

In order to match the legacy course videos (which were filmed with create-react-app), add this to the _package.json_ `scripts` array:

```json
    "start": "vite",
```

## Install future dependencies

For folks using this as a starter for adding React code, run these installs:

```sh
npm install -D @testing-library/user-event msw
npm install axios
```

## Add test script to package.json `test` object

```json
  "test": "vitest --watch"
```

## Add a test setup file

To make [jest-dom matchers](https://github.com/testing-library/jest-dom#custom-matchers) available in all test files:

1. create new file _src/setupTests.js_
1. add these contents:

```js
import "@testing-library/jest-dom";
```

## Add Vitest and Testing Library plugins to ESLint

In _.eslintrc.cjs_:

1. Add these to to the `extends` array:

```js
   'plugin:testing-library/react',
   'plugin:vitest/recommended',
   'plugin:jest-dom/recommended',
```

1. This step avoids linting errors when using the `test` and `expect` Vitest globals without importing them first.

At the top, require the Vitest plugin:

```js
const vitest = require("eslint-plugin-vitest");
```

Then Add this property / value to the top-level `module.exports` object:

```js
    globals: {
      ...vitest.environments.env.globals,
    },
```

## Update a few ESLint rules

Add these to the `rules` object in _.eslintrc.cjs_:

```js
    "no-unused-vars": "warn", // warning, not error
    "vitest/expect-expect": "off", // eliminate distracting red squiggles while writing tests
    "react/prop-types": "off", // turn off props validation
```

## Add Automatic ESLint and Prettier formatting on save

1. Install [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extensions in VSCode if they're not already installed.
1. Create _.vscode/settings.json_ file.
1. Add these contents:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

**Note**: if you're having issues getting ESLint to work properly with VSCode, please see [this troubleshooting guide](https://dev.to/bonnie/eslint-prettier-and-vscode-troubleshooting-ljh).

## Update vite configuration for tests

Update _vite.config.js_ based on the [Vitest Testing Library example](https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/vite.config.ts). Add this property / value to the `defineConfig` argument:

```js
  test: {
    globals: true,
    environment: "jsdom",
    // this points to the setup file created earlier
    setupFiles: "./src/setup.js",
    // you might want to disable the `css: true` line, since we don't have
    // tests that rely on CSS -- and parsing CSS is slow.
    // I'm leaving it in here because often people want to parse CSS in tests.
    css: true,
  },
```

## Command to run tests in watch mode

```sh
npm test
```

## Reference

- [creating a Vite project](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
- [Vitest Testing Library example](https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib)
- [Vitest ESLint plugin](https://www.npmjs.com/package/eslint-plugin-vitest)


# Unit Tests examples

1. As funções da Testing Library, especificamente do pacote `@testing-library/react`. Aqui está um breve resumo de cada uma delas:

   - **`render`**: Essa função é usada para renderizar um componente React no ambiente de teste. Ela retorna um conjunto de utilitários que podem ser usados para interagir com o componente renderizado.

   - **`screen`**: Esse objeto fornece uma maneira conveniente de acessar as funções de consulta do DOM. Ele é uma referência global ao `document.body` e é frequentemente usado em testes para buscar elementos na tela.

   - **`fireEvent`**: Essa função é usada para disparar eventos DOM em elementos renderizados. Pode ser usada para simular eventos como cliques, mudanças de entrada, pressionamentos de tecla, etc.

2. As funções `describe`, `it`, `expect` e a biblioteca Jest/ViteTest. Aqui está um breve resumo de cada uma delas:

   - **`describe`**: Essa função é usada para agrupar testes relacionados. Ela cria um bloco de testes, permitindo que você organize seus testes de maneira lógica.

   - **`it`** (ou `test`): Essa função é usada para definir um único teste. Dentro dela, você descreve o comportamento esperado e realiza asserções para verificar se o código se comporta conforme esperado.

   - **`expect`**: Essa função é usada para criar asserções. Você a usa para verificar se um valor é igual ao valor esperado, se uma função lança um erro, se um objeto contém uma determinada propriedade, etc.

   - **Jest**: Jest é uma estrutura de testes completa que fornece todas essas funções (`describe`, `it/test`, `expect`). Ele também inclui funcionalidades como mocks, spies e snapshots.

   - **Vitest**: Vitest é uma alternativa ao Jest, projetada para ser mais rápida e leve, especialmente em projetos que usam Vite. Ele também fornece as funções `describe`, `it/test`, e `expect`.

3. Funções específicas da biblioteca `@testing-library/jest-dom`. Aqui está um breve resumo de cada uma delas:

   - **`toHaveClass`**: Essa asserção verifica se um elemento possui uma determinada classe CSS.

   - **`getByRole`**: Essa função é usada para buscar um elemento no DOM pelo seu papel (role), como "button", "heading", etc. É uma função da Testing Library, especificamente `@testing-library/react` ou `@testing-library/dom`.

   - **`toBeEnabled`**: Essa asserção verifica se um elemento está habilitado. É útil para testar se elementos como botões ou campos de formulário estão habilitados.
