# Loving thoughts

Interactive love-letter app built with **React + TypeScript + Vite**.

## Scripts

- **Dev**: `npm run dev` (or `npm start`)
- **Build**: `npm run build`
- **Preview build**: `npm run preview`
- **Lint**: `npm run lint`

## Project structure

The code is organized using common React conventions:

```
src/
  pages/
    MainPage.tsx
    YesPage.tsx
    NoPage.tsx
  components/
    AnimatedLine.tsx
    AudioDiskPlayer.tsx
  hooks/
    useTypewriter.ts
  assets/
    (images / gifs / mp3)
  App.tsx
  main.tsx
  index.css
  App.css
```

- **`App.tsx`**: holds global state and page switching.
- **`pages/*`**: screen-level UI.
- **`components/*`**: reusable UI blocks.
- **`hooks/*`**: reusable logic.

## PWA

The project is configured as a PWA using `vite-plugin-pwa`.

### Install / fix dependency issues

If you changed dependency versions (ex: Vite), do a clean install:

- Delete `node_modules/` and `package-lock.json`
- Run `npm install`
- Restart dev server: `npm run dev`

### App icon (IconeApk)

The PWA manifest and favicon expect the icon at:

- `public/IconeApk.png`

If your icon currently lives in `src/assets/IconeApk.png`, copy it to `public/IconeApk.png`.

## Notes

The app uses Lottie web component `dotlottie-wc` loaded from `index.html`.
"# lovingThoughts" 
"# lovingThoughts" 
"# lovingThoughts" 
