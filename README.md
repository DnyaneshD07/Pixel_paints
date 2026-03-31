# Atelier Pigments - Frontend Project

This repository contains the frontend static UI pages for **Atelier Pigments**, a premium architectural coatings and paint brand website.

## 🛠 Tech Stack

The front-end design uses a modern, lightweight approach primarily driven by utility classes:
- **HTML5:** Semantic HTML structuring.
- **Tailwind CSS (via CDN):** Used for all styling, including a customized color palette (`primary`, `secondary`, `surface`, etc.) defined directly in the `<script>` tags of the HTML files.
- **Google Fonts:** 
  - *Newsreader* (Serif) for elegant headlines and branding.
  - *Manrope* (Sans-serif) for readable body text and labels.
- **Icons:** Google Material Symbols Outlined.

## 📁 Project Structure

The project is organized into multiple standalone directories representing individual pages or components of the website. 

```text
d:\Pixel_paints\stitch\
├── about_atelier_pigment/                                 # About Us page
├── atelier_pigment/                                       # General layouts or components
├── atelier_pigments_architectural_brand_experience/       # Brand showcase / experience page
├── contact_atelier_pigment/                               # Contact Information page
├── dealer_locator_atelier_pigments/                       # Dealer locator search UI
├── dealers_atelier_pigment/                               # Global dealers and stockists page
├── home_atelier_pigment/                                  # Main Landing / Home page
├── product_detail_atelier_pigment/                        # Individual product view
└── products_atelier_pigment/                              # Products gallery / catalog
```

Inside each of these directories, you will typically find:
- `code.html` - The static HTML file containing the markup, inline Tailwind configuration, and layout structure.
- `screen.png` - A high-resolution preview screenshot of the rendered page.

## 🚀 How to Run

Because the project relies entirely on static HTML with a CDN-linked Tailwind CSS implementation, there is no need for`npm install` or complex build steps.

**To view the pages:**
1. Navigate to the desired folder (e.g., `home_atelier_pigment/`).
2. Double-click the `code.html` file or drag it directly into your preferred modern web browser (Chrome, Edge, Firefox, Safari).
3. The page will render automatically with all the necessary fonts, styles, and external images loaded.

---
*Note: This is a static UI slice. For full production capabilities (such as dynamic routing, component reusability, and backend integration), these HTML templates should be migrated into a JavaScript framework like React (e.g., Next.js) or Vue.*
