---
layout: "../../../layouts/Docs.astro"
---

# `firemyna dev`

The command starts the development server:

```bash
npx firemyna dev
```

Depending on your configuration, Firemyna will start the framework or bundler development server along with Firebase Emulator.

The available arguments:

- [`--cwd`](#--cwd) - specify the working directory
- [`--config`](#--config) - specify the config path to use
- [`--help`](#--help) - show help for the command

## `--cwd`

Use `--cwd` to specify the working directory where to start the project:

```bash
npx firemyna dev --cwd ./apps/website
```

## `--config`

Use `--config` to specify the config path to use:

```bash
npx firemyna dev --config ./configs/firemyna.js
```

## `--help`

Use `--help` to learn about the arguments and available options:

```bash
npx firemyna dev --help
```
