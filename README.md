## Piramal Finance

This project is created with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Tech Stacks used

- [NextJs](https://nextjs.org/)
- [React](https://reactjs.org/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Tailwind CSS](https://tailwindcss.com/docs/guides/nextjs)

## Other good things done here

- Prettier for auto formatting and consistency
- Nvm for managing node versions
- Husky for precommit hooks
- Commit message validator for consistency in commit message
- VS Code settings for editor support

## Pre-requisites

- Use [`nvm`](https://github.com/nvm-sh/nvm) for managing node versions on your system.
- Node : Check the `.nvmrc` file.
- Use `npm` over `yarn` for consistency. They create separate lock files.

## Getting Started

First, run the development server:

```
nvm use
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## VSCode Settings

If you are using VS Code, create a file .vscode/settings.json and paste this section. This would help you linting and help you follow some best practices.

```
{
  "eslint.options": {
    "configFile": ".eslintrc.json"
  },
  "eslint.validate": ["javascript", "javascriptreact"],
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

### Note

- We are using Rust (default given by Nextjs) over Babel.
