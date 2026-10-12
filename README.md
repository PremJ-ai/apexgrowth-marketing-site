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

## Deployment

Every push to `main` starts **Deploy ApexGrowth to GitHub Pages**. It copies the root site files into a deployment folder, verifies the HTML and relative asset paths, uploads the Pages artifact, and deploys it. A manual deployment is also available from the repository's **Actions** tab.

Expected project Pages URL: `https://premj-ai.github.io/apexgrowth-marketing-site/`.

## Before production

- Replace the illustrative metrics and case-study figures with verified agency results.
- Replace sample testimonial names and quotes with approved client testimonials.
- Replace `hello@apexgrowth.example` with a real enquiry address.
- Connect the enquiry form to a backend/CRM if enquiries should be stored or processed automatically. This static version validates the form and prepares an email draft; it does not store lead data.
