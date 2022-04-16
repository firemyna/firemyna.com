---
layout: "../../../layouts/Docs.astro"
---

# Shipping Firebase apps with Firemyna

Firemyna setups deployment from the get-go. You don't need to do anything but run the command to deploy your application:

```bash
npx firemyna deploy
```

It will build the application and deploy it to the Firebase project.

You also can deploy only Firebase Hosting, all or few selected Functions. To learn how to do it and more about the command, refer to the [`deploy` command] page.

## How it works

If you run into any troubles or just curious, you might want to know how the deployment works behind the scenes:

1. First the application is built. Learn more about the [`build` command]:
1. The list

[`build` command]: /docs/ship/building
[`deploy` command]: /docs/ship/deploying
