---
layout: "../../../layouts/Docs.astro"
---

# `firemyna init`

The command initializes a new Firemyna project.

The available arguments:

- [`--preset`](#--preset) - specify the preset to use
- [`--cwd`](#--cwd) - specify the working directory
- [`--node`](#--node) - specify the Node.js version to use
- [`--format`](#--format) - specify the format, JavaScript or TypeScript
- [`--config`](#--config) - specify the config path to generate
- [`--help`](#--help) - show help for the command

## `--preset`

More often, you want to use a preset that provides integration with one of the most popular frameworks and bundlers, e.g., Astro:

```bash
npx firemyna init --preset astro
# Or
npx firemyna init -p astro
```

See the [Getting started](/docs/start) guide for the up-to-date list of available integrations and detailed instructions.

You can initialize blank Firemyna project using no preset, but it might require additional configuration:

```bash
npx firemyna init
```

See [Vanilla](/docs/start/vanilla) for guide on how to initialize project without a preset.

## `--cwd`

Use `--cwd` to specify the working directory where to initialize the project:

```bash
npx firemyna init --cwd ./apps/website
```

Running other commands (e.g. `firemyna dev`) will require specifying `--cwd` pointing to the same directory.

## `--node`

Use `--node` to specify the Node.js version to initialize the Firebase Functions with. By default, the latest LTS is used:

```bash
npx firemyna init --node 14
# Or
npx firemyna init -n 14
```

The Node.js version will be saved to the config and be used to run and deploy the Functions.

Run `npx firemyna init --help` to learn about the available options.

## `--format`

Use `--format` to use either JavaScript (`js`) or TypeScript (`ts`). If not specified, you'll be prompted to select it when you execute the command:

```bash
npx firemyna init --format ts
# Or
npx firemyna init -f ts
```

The format will be saved to the config and be used to generate new code and build the project.

## `--config`

Use `--config` to specify the config path to generate:

```bash
npx firemyna init --config ./configs/firemyna.js
```

Running other commands (e.g. `firemyna dev`) will require specifying `--config` pointing to the config location.

## `--help`

Use `--help` to learn about the arguments and available options:

```bash
npx firemyna init --help
```
