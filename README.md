# General Chemistry Knowledge Hub · 普通化学知识库

Interactive study site for General Chemistry (SUSTech 2026 Fall, Brown & LeMay *Chemistry: The Central Science*), covering Lectures 1–6: Ch 1–2, 3, 4, 6, 7, 8.

Pure static site — no build step, no dependencies. Works offline (`file://`) and on GitHub Pages.

## Features

- **Structured knowledge points** — English terms with Chinese annotations (术语标注中文), formulas, worked examples, exam tips
- **Index view** — full 3-level outline (chapter → section → term chips) with jump links
- **Search** — press `/` or click the search box; supports English & Chinese keywords
- **Progress tracking** — mark sections as learned; auto-saved to `localStorage`; export/import/reset on the Stats page
- **Self-Test Center** — 70 questions in fixed exam-style order, no immediate feedback, score + explanations after submission, attempt history
- **Stats** — overall & per-chapter mastery, quiz best scores and history

## Deploy to GitHub Pages

1. Create a repository (e.g. `chem-hub`) on GitHub and push this folder:

   ```bash
   cd chemistry-knowledge-hub
   git init
   git add .
   git commit -m "General Chemistry knowledge hub"
   git branch -M main
   git remote add origin git@github.com:<YOUR_USERNAME>/chem-hub.git
   git push -u origin main
   ```

2. On GitHub: **Settings → Pages → Source: Deploy from a branch → `main` / root → Save**.

3. Site will be live at `https://<YOUR_USERNAME>.github.io/chem-hub/`.

## Local preview

Just open `index.html` in a browser, or:

```bash
cd chemistry-knowledge-hub && python3 -m http.server 8000
# then visit http://localhost:8000
```

## Editing content

All knowledge points live in `js/data.js` — each chapter has `sections` (with `points`: term/zh/def/formula/example) and a `quiz` array. Edit and push; no build required.
