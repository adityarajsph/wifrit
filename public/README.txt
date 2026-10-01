Drop brand assets here, e.g.:

- logo.svg / logo.png  → used in components/Navbar.jsx and components/Footer.jsx
- favicon.ico          → auto-picked up by Next.js if placed in /app
- og-image.png         → reference from app/layout.jsx metadata.openGraph.images

Once you add the real WIFRIT logo file, replace the "W" mark in:
  components/Navbar.jsx  (search for the <span> with "W")
  components/Footer.jsx  (same pattern)
with an <Image src="/logo.svg" ... /> from next/image.
