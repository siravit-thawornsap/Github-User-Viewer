# GitHub-user-profile-viewer

A simple example project to view GitHub user profiles (built with React + Vite).

---

### Live Demo
[![GitHub Pages](https://img.shields.io/badge/View%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://siravit-thawornsap.github.io/Github-User-Viewer)

---

## Features
- Search and display GitHub user profile information (name, avatar, bio, repos, etc.)
- Live API requests to GitHub
- Ready for deployment to GitHub Pages

## Getting started (installation)
1. Install dependencies:
   `npm install` or `yarn`
2. Run development server:
   `npm run dev` or `yarn dev`

## Build and deploy
1. Add `homepage` to `package.json`:
   `"homepage": "https://<your-username>.github.io/<repository-name>"`
2. If using Vite, set `base` in `vite.config.ts`:
   `base: '/<repository-name>/'`
3. Create a production build:
   `npm run build`
4. Deploy to GitHub Pages:
   - If using the `gh-pages` package: `npm run deploy` (as defined in scripts)
   - Or use GitHub Actions / manually push the `dist/` folder to the `gh-pages` branch

## Project structure (brief)
- `src/` — main app source
- `public/` — static assets (if any)
- `dist/` — build output

## Project components
- `src/main.tsx` (or `src/index.tsx`)
  - App entry point: mounts React to the DOM
- `src/App.tsx`
  - Main container handling layout and child components
- `src/components/SearchBar.tsx`
  - Input for searching GitHub usernames and triggering requests
- `src/components/UserCard.tsx`
  - Displays profile details (name, avatar, bio, followers/following)
- `src/components/RepoList.tsx`
  - Lists user repositories with names and links
- `src/api/github.ts` (or `src/services/github.ts`)
  - Functions to call the GitHub API (fetch user, fetch repos) and handle responses/errors
- `vite.config.ts`
  - Configure `base` for GitHub Pages deployments (e.g. `base: '/<repository-name>/'`)
- `package.json`
  - Important scripts: `dev`, `build`, and optionally `predeploy`/`deploy`; also add `homepage` for gh-pages
- `public/index.html`
  - HTML template; ensure asset paths respect the configured `base`

## Common issues (site loads but shows nothing)
- Missing `homepage` in `package.json` → incorrect asset paths
- Missing `base` in `vite.config.ts` when deploying to GitHub Pages
- Using absolute paths (starting with `/`) for assets or routes; prefer relative paths or respect `base`
- Wait a short time after deploy — GitHub Pages may take some seconds to publish
- Check the browser Console and Network tab for 404s or other errors

## Suggested scripts (package.json)
- `"build": "vite build"`
- `"predeploy": "npm run build"`
- `"deploy": "gh-pages -d dist"`  (if using the `gh-pages` package)

## Post-deploy checks
1. In the repository, go to Settings > Pages to view deployment status
2. Open `https://<your-username>.github.io/<repository-name>/` and check the Network tab for missing assets (404s)

## License / Notes
This is a sample React + Vite project for GitHub Pages deployment — adapt as needed for your use case.