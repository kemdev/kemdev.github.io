# Kareem’s portfolio

A Next.js static site for Abdulkarim Alarmanazi’s web projects and real-time 3D experiments.

```sh
npm ci
npm run dev
```

Run `npm run build` to export the site into `out/`. The existing GitHub Pages site serves a static build from `gh-pages`. Update project copy and verified demo links in `app/projects.js` and store compressed screenshots in `public/work/`.

The hero starts as a static poster. Selecting **Play 3D** loads the React Three Fiber scene with TSL vertex deformation, or a Canvas 2D version if a graphics context is unavailable. Motion pauses when the scene leaves the viewport.

For an access-controlled build, place `abdulkarim-alarmanazi-cv.pdf` and `abdulkarim-alarmanazi-certificates.pdf` in `public/downloads/` before building. The site shows a download link for each file present at build time. Git ignores that directory.
