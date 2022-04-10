---
layout: "../../layouts/Docs.astro"
---

# About Firemyna

Firemyna is a Firebase application toolkit that helps developers on each stage from start to shipping the project without locking into any particular framework or bundler.

It brings the already friendly Firebase environment to the next level.

- [Ready to start? Follow this guide](/docs/start).
- Want to learn more? [Read further](#how-firemyna-can-help-me).

## How Firemyna can help me?

Here are the key points that will help you understand how Firemyna can help you, grouped by the app lifecycle stages:

- [Starting](#starting)
- [Developing](#developing)
- [Shipping](#shipping)

### Starting

**Quickstart**. When starting, Firemyna will bootstrap the development environment and integrate it with the bundler or framework of your choice - [Astro], [Next.js], [Remix], [Vite], [Create React App], and [more](/docs/start#integrations).

**Ready-to-deploy**. The environment Firemyna sets up for you is ready to deploy to Firebase from the get-go.

**No config tinkering**. Quit hunting for up-to-date tutorials on configuring your favorite framework to work with Firebase.

### Developing

**Code sharing**. Firemyna enables code sharing between the web app and Firebase Functions by bundling the Functions source code with blazing-fast [esbuild].

**Shared package.json**. Thanks to dependency optimization during the deployment (for more, [see below](#shipping), your web app and the Functions now share a single package.json that significantly simplifies the request.

**Auto-index**. To create a new function, you need to create a file—no need to list it in the index file that is automatically generated.

**Processes manager**. The development server helps manage processes - starting the web app bundler, the Firebase Emulator with a single command. See all logs in a single place.

**Code generators**. Firemyna provides a comprehensive set of generators, helping you quickly generate Functions of any type.

**Live-reload**. Firemyna automatically rebuilds and reloads changed functions in milliseconds (thanks to [esbuild], so you can always be sure that you run the latest code).

**First-class TypeScript support**. Firemyna is designed with TypeScript in mind but doesn't force you to use it.

### Shipping

**One-command deployment**. Build and deploy the project with a single command - Firebase Functions, Hosting, Firestore Security Rules, etc. Select what Functions to deploy with easy-to-use picker or CLI arguments.

**Build optimization**. Only required Functions will be included in the final bundle when building, reducing the build size.

**Depencendy optimization**. After building the Functions, Firemyna will parse and detect and remove used dependencies from package-lock.json, minimizing the build size and deployment time even further.

**Runtime optimization**. Firemyna generates optimal Functions runtime that excludes unused code so that you can be sure every Function has minimal memory footprint.

---

[Getting start with Firemyna →](/docs/start)

[astro]: /docs/start/astro
[next.js]: /docs/start/next
[remix]: /docs/start/remix
[vite]: /docs/start/vite
[create react app]: /docs/start/cra
[esbuild]: https://esbuild.github.io/
