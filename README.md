# Newo.ai Business Card

A single-page business card site aligned with Newo.ai’s theme: dark, professional, with a clear “Call demo agent” CTA.

## What’s included

- **Your name**, **email**, **phone**, and **company website** (newo.ai) with placeholders you can replace
- **Newo logo** placeholder — replace with your logo file
- **Profile photo** placeholder — replace with your picture
- **“Call demo agent”** button — wire to your demo agent phone number or Newo demo link

## Quick start

1. Open `index.html` in a browser, or run a local server:
   ```bash
   npx serve .
   ```
2. Replace placeholders in `index.html`:
   - **Name:** `<h1 class="name">Your Name</h1>`
   - **Email:** `your.email@newo.ai` and the `href="mailto:..."`
   - **Phone:** `+1 (234) 567-890` and the `href="tel:..."`
   - **Logo:** `src="assets/newo-logo.svg"` → your logo path (e.g. `assets/newo-logo.png`)
   - **Photo:** `src="assets/photo-placeholder.svg"` → your photo path (e.g. `assets/photo.jpg`)
   - **Demo call:** `href="tel:+1234567890"` on the “Call demo agent” button → your demo agent number or link

## Theme

- Dark background and card (#0c0e12, #13161d)
- Teal accent (#00c896) for the call-to-action
- DM Sans + Space Grotesk
- Responsive; single card, centered

## Files

- `index.html` — structure and copy (edit placeholders here)
- `styles.css` — Newo-inspired layout and theme
- `script.js` — optional hook for the demo call button
- `assets/newo-logo.svg` — logo placeholder (replace with your logo)
- `assets/photo-placeholder.svg` — photo placeholder (replace with your image)
