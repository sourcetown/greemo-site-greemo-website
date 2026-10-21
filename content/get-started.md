---
title: "Get started"
description: "Install the dependencies, start the development server and open the Greemo web application at http://localhost:2211."
themeLayout: single
---

<!-- template name="page-hero" {"pill": "Get started", "title": "Up and running in three commands", "lead": "Install the dependencies, start the development server and open the Greemo web application at `http://localhost:2211`. Requires Node 18 or later."} -->

<!-- template name="steps" {"visual": "shot:real-dashboard-choose-project.webp", "visualUrl": "localhost:2211", "visualKind": "real", "alt": "Greemo dashboard: Choose a project", "source": "Source: README.md (Quick Start), docs/GETTING_STARTED.md, package.json (engines)", "steps": [{"title": "Install dependencies", "code": "npm install"}, {"title": "Start the development server", "text": "This starts the Greemo web application at `http://localhost:2211`.", "code": "npm run dev"}, {"title": "Create your first site (local-first)", "text": "Open the web application, click **New Project**, select a project root folder when prompted (this becomes your workspace root) and start editing markdown under `sites/\u003cslug\u003e/content/*.md`."}, {"title": "Build all packages", "code": "npm run build"}]} -->

<!-- template name="code-cards" {"source": "Source: docs/GETTING_STARTED.md (Using the CLI), README.md (Quick AI Example)", "cards": [{"icon": "term", "title": "Use the CLI", "text": "Initialise, build, deploy and serve sites with `@greemo/cli`.", "code": "npx @greemo/cli init my-site\nnpx @greemo/cli build -o dist\nnpx @greemo/cli deploy\nnpx @greemo/cli dev"}, {"icon": "sparkles", "title": "Try the AI tools", "text": "Configure AI, create a site, add a page and export it.", "code": "# Configure AI (copy .env.example to .env and add your API key)\ncp .env.example .env\n\n# Create a site via CLI\ngreemo ai create-site --name blog --title \"My Blog\"\n\n# Add a page\ngreemo ai add-page --site-path ./sites/blog --page about --content \"# About\"\n\n# Export to Vue + Vite\ngreemo export --site ./sites/blog --output ./blog-export"}]} -->

<!-- template name="contact" {"__dataset__": "company", "eyebrow": "Contact", "title": "Talk to the Greemo team", "intro": "Questions about Greemo, plans or a site you would like to build? Send us a message."} -->
