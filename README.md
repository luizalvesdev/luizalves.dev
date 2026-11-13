# luizalves.dev

Site of Luiz Alves, software engineer for marketplaces and e-commerce. Live at https://luizalves.dev

Built with Astro, GSAP (ScrollTrigger) and Lenis. English at `/`, Portuguese at `/pt/`, dark and light themes, and every animation respects `prefers-reduced-motion`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

Hosted on Cloudflare as a static-assets Worker (`wrangler.jsonc`), serving `dist` on `luizalves.dev` and `www.luizalves.dev`. Deploy with `npm run deploy` (needs `wrangler login` on the machine).

- Copy (EN and PT): `src/i18n/content.ts`
- Layout and sections: `src/components/`
- Animations: `src/scripts/motion.ts`
