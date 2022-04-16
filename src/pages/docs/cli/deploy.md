---
layout: "../../../layouts/Docs.astro"
---

# `firemyna deploy`

To deploy all components of the application at once, the web app and the Functions, use `firemyna deploy` command without arguments:

```bash
npx firemyna deploy
```

This will run the [`build`](/docs/cli/build) command first and then deploy the built application using `firebase deploy` command.

The available arguments:

- [`--cwd`](#--cwd) - specify the working directory
- [`--config`](#--config) - specify the config path to use
- [`--help`](#--help) - show help for the command

## `--cwd`

Use `--cwd` to specify the working directory:

```bash
npx firemyna deploy --cwd ./apps/website
```

## `--config`

Use `--config` to specify the config path to use:

```bash
npx firemyna deploy --config ./configs/firemyna.js
```

## `--help`

Use `--help` to learn about the arguments and available options:

```bash
npx firemyna deploy --help
```
