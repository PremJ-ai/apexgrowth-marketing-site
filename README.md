# ApexGrowth — Marketing Agency Website

Responsive marketing agency landing page built with semantic HTML, CSS, and vanilla JavaScript.

## Project files

The full source package is stored in `apexgrowth-website-github-actions.zip`. It contains:
- `index.html`
- `styles.css`
- `script.js`
- `.nojekyll`
- `README.md`
- `.github/workflows/deploy.yml`

## Deployment

GitHub Actions unpacks the source archive and publishes the website to GitHub Pages on every push to `main`, and supports manual runs via **Actions → Deploy ApexGrowth to GitHub Pages → Run workflow**.

The workflow checks that `index.html`, `styles.css`, and `script.js` exist before publishing. Relative asset paths are used for project Pages hosting.

## Before public business use

Some sample metrics and case-study outcomes are illustrative placeholders from the creative brief. Replace them with verified results, replace `hello@apexgrowth.example` with a real contact email, and connect the enquiry form to a backend/CRM before relying on it to collect leads.
