# Agent Instructions: Academic Portfolio Template (Astro 2-Column Minimalist)

## 1. Project Philosophy
- **Purpose:** A reusable template tailored for PhD students and academic researchers to build their personal portfolios.
- **Strict Non-Destructive Rule:** The original core of the base template (components, utils, base layouts, and original placeholder content) MUST NOT be modified. All customizations (like the 2-column layout and academic pages) must be achieved by creating **new** files, components, and layouts that extend the project without mutating the original source code.
- **Template Data (Albert Einstein):** For the initial setup, structural testing, and UI population of the *new* academic sections, use **Albert Einstein** as the placeholder identity (e.g., Theory of Relativity, Photoelectric Effect papers).
- **Aesthetics:** Based on the clean, text-first approach of the original theme, applying a new 2-column layout (Sticky Sidebar + Main Content) exclusively on the new academic pages.
- **Priorities:** Extreme performance, impeccable typography, native LaTeX support, and total modularity.
- **Respect the Original Creator:** Maintain the philosophy of the original base project. Strictly preserve the original author's attribution and any donation/support links (like "Buy me a coffee" or GitHub Sponsors) exactly as they are in the original core files.

## 2. Core Configuration (Extension, Not Modification)
Instead of modifying the original `config.ts` if it breaks the theme's core, create a supplementary configuration file (e.g., `src/academic.config.ts`) for the new academic features, or extend the existing one ONLY if the base theme natively supports it without breaking core logic.

```typescript
// Example of the supplementary configuration structure (src/academic.config.ts)
export const ACADEMIC_CONFIG = {
  name: "Albert Einstein",
  role: "Theoretical Physicist",
  institution: "Institute for Advanced Study, Princeton",
  bio: "Theoretical physicist widely acknowledged to be one of the greatest and most influential physicists of all time.",
  avatarUrl: "/assets/einstein-profile.jpg",
  sections: {
    cv: true,
    publications: true,
    talks: true,
  }
};
```

## 3. Data Structure (New Content Collections)
Add new independent collections for the academic sections in `src/content/config.ts` without removing or altering the original template's collections (like standard `blog` or `authors`).

### New Collections to Add:
1. **Publications:** Schema including: `title`, `authors`, `journal`, `year`, `doi`, `pdf_url`, `is_preprint`. (e.g., Add Einstein's 1905 Annus Mirabilis papers).
2. **Talks:** Schema including: `title`, `event`, `date`, `location`, `slides_url`. (e.g., Solvay Conference).
3. **About/CV:** Specific Markdown files routed to the new pages.

## 4. Layout: The NEW 2-Column System
Do NOT modify the original `MainLayout.astro` or `BaseLayout.astro`.
- Create a **NEW** layout file: `src/layouts/AcademicLayout.astro`.
- This new layout should import the `<head>` and base wrappers from the original theme to maintain SEO and global styles, but implement a custom CSS Grid for the body:
  - **Desktop View:** `grid-cols-[300px_1fr]`.
  - **Sidebar (Left):** `position: sticky; top: 2rem;`. Contains: Profile picture, Name, Role, Social icons, Navigation menu, and "Download CV".
  - **Main (Right):** Vertical content flow for the new academic pages.

## 5. LaTeX Implementation (Best Practices)
Integrate LaTeX support in `astro.config.mjs` to allow math equations inline (using `$`) and in block form (using `$$`):
- Add `remark-math` and `rehype-katex` to the plugins array.
- **Crucial:** Load the KaTeX CSS stylesheet globally or specifically on the new `AcademicLayout.astro` to prevent Cumulative Layout Shift (CLS). Test with $E = mc^2$ and field equations in dummy posts.

## 6. Creating New Pages
Instead of overwriting `src/pages/index.astro`, create new routing logic. For example, create `src/pages/portfolio.astro` or move the original index to `/blog` and create a completely new `src/pages/index.astro` ONLY IF the template allows overriding the homepage without breaking the core blog engine. Otherwise, build the portfolio at `/`.
- **Publication Sorting:** Automatically group and display publications by year in the UI.
- **CV Manager:** Dynamic link to `public/cv.pdf`.

## 7. Quality Assurance Checklist for the Agent
- [ ] Are all original core files, components, and original content completely untouched?
- [ ] Is the new 2-column layout implemented via a brand new layout file (`AcademicLayout.astro`)?
- [ ] Is the site functioning as a reusable template where replacing Einstein's dummy data is seamless?
- [ ] Does the site score 100/100 on Lighthouse Performance?
- [ ] Do math equations (LaTeX) render correctly in the static build?
- [ ] Are the original creator's credits and donation links preserved exactly as they were?
