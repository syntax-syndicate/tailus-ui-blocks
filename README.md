# Tailus.io: V2

Easy to customize UI components, blocks and templates built on top of modern frontend tools to make ideas stand out.

Before you start, run the following command to install and run the project:

```bash
npm install
npm run dev
```

![github follow](https://img.shields.io/github/followers/Tailus-UI?style=social)
[![Open github repo](https://img.shields.io/badge/github-open-blue?style=flat)](https://github.com/Tailus-UI/)
[![Open the website](https://img.shields.io/badge/website-open-blue?style=flat)](https://tailus.io/)
[![twiter follow](https://img.shields.io/twitter/follow/tailusui?style=social)](https://twitter.com/tailus_ui)
[![linkedin follow](https://img.shields.io/badge/linkedin-follow-blue?style=flat)](https://www.linkedin.com/company/tailus-ui/)

## 🚀 Project Structure

In the project, you'll see the following folders and files:

```structure
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

The project is built with Astro, which searches for `.astro` or `.md` files in the `src/pages/` directory. Each page is displayed as a route based on its file name.

Astro/React/Vue/Svelte/Preact components must be placed in the `src/components/` directory.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:3000`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
