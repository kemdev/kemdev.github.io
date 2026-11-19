# Kareem’s portfolio

A Next.js static site for Abdulkarim Alarmanazi’s web projects and real-time 3D experiments.

```sh
npm ci
npm run dev
```

Run `npm run build` to export the site into `out/`. The existing GitHub Pages site serves a static build from `gh-pages`. Update project copy and verified demo links in `app/projects.js` and store compressed screenshots in `public/work/`.

The 3D hero is loaded in the browser when visible. React Spring smooths input for a TSL vertex deformation running in React Three Fiber. The poster remains available with reduced motion or without a graphics context. The scene pauses offscreen and the hero includes a motion toggle.
