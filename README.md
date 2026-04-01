# Atelier Pigments

This repository contains the complete frontend architecture for **Atelier Pigments**, a premium architectural coatings and paint brand website. The project focuses on an immersive, visually rich brand experience ("The Curated Atelier") and lead generation.

## 📁 Repository Structure

The project has evolved from standalone static HTML slices into a modern Single-Page Application (SPA) using Next.js.

- **`/Frontend/`**: The original static UI sliced pages built with HTML5 and Tailwind CSS (via CDN).
- **`/web-app/`**: A modern **Next.js (App Router)** application migrated from the static slices. This contains the fully functional, scalable React architecture.
- **`migrate.js`**: The custom Node.js script used to automatically migrate the disconnected static HTML pages in `/Frontend/` into unified Next.js routes, extracting global components like the Navigation Bar and Footer.
- **`atelier_pigments_project_prd.html`**: The Project Requirements Document (PRD) detailing the design system, typography, and core user flows.
- **`claude_react_routing_prompt.txt`**: The original prompt detailing the migration requirements to a React SPA.

## 🛠 Tech Stack (Next.js SPA)

- **Framework:** Next.js (App Router), React, TypeScript
- **Styling:** Tailwind CSS (customized with the Atelier Pigment color system)
- **Typography:** 
  - *Newsreader* (Serif) for elegant headings conveying heritage and craftsmanship.
  - *Manrope* (Sans-serif) for highly readable functional UI and body text.
- **Routing:** Client-side routing with Next.js `<Link>` for instant page transitions.

## 🚀 How to Run the Web Application

1. **Navigate to the web app directory:**
   ```bash
   cd web-app
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. **View the application:**
   Open [http://localhost:3000](http://localhost:3000) in your nearest modern web browser.

## 🧭 Application Routes

The newly migrated string of pages inside `web-app/src/app` includes:
- `/` - **Home**: Immersive hero, USPs, product previews.
- `/about` - **About**: Story-driven timeline and brand vision.
- `/products` - **Products**: Categorized catalog (Interior, Exterior, Industrial).
- `/products/[slug]` - **Product Details**: Deep dive into specifications and TDS/MSDS.
- `/dealers` - **Dealer Locator**: Dealer search to convert interest into physical leads.
- `/contact` - **Contact**: Structured lead generation form and global office locations.

## 🎨 Design System
*   **Creative North Star:** "The Curated Atelier" — moving away from transactional e-commerce toward artisanal curation.
*   **Color Palette:** Inspired by natural pigments. Deep navy (`#1B263B`), terracotta accents (`#944925`), and cream-based neutrals (`#FAF9F6`).
*   **Reusability:** Global layout structures (`<GlobalNav />` and `<Footer />`) abstract away repetition across routes.

---
*Note: The original static HTML slices can still be accessed and viewed locally by opening the respective `code.html` files directly in your web browser from the `/Frontend/` directory.*
