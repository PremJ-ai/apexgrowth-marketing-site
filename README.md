# ApexGrowth — Marketing Agency Website

Responsive marketing agency website built with semantic HTML, CSS and vanilla JavaScript.

## Files

- `index.html` — website sections, case studies, service directory and enquiry form
- `styles.css` — responsive design system, gradients, glass cards, animations and reduced-motion support
- `script.js` — navigation, service selection, animated metrics, growth estimator, FAQ interactions and enquiry form
- `.nojekyll` — prevents GitHub Pages from processing the site with Jekyll
- `.github/workflows/deploy.yml` — verifies and deploys the static site to GitHub Pages

## Local preview

Open `index.html` directly or run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## First-time GitHub Pages setup

1. Open repository **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Open **Actions → Deploy ApexGrowth to GitHub Pages** and choose **Re-run jobs** for the latest run, or use **Run workflow**.
4. After the run succeeds, visit `https://premj-ai.github.io/apexgrowth-marketing-site/`.

The GitHub Actions workflow deploys on every push to `main`. It verifies that the root HTML, CSS and JavaScript files exist, checks JavaScript syntax, copies site assets into a clean deployment folder, uploads the Pages artifact and deploys it. The initial Pages source selection is required because this repository's workflow token cannot create a brand-new Pages site automatically.

## Before production

- Replace illustrative metrics and case-study figures with verified agency results.
- Replace sample testimonial names and quotes with approved client testimonials.
- Replace `hello@apexgrowth.example` with a real enquiry address.
- Connect the enquiry form to a backend/CRM if enquiries should be stored or processed automatically. This static version validates the form and prepares an email draft; it does not store lead data.
