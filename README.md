# Big Sis — Your Online Big Sister

A static website for Big Sis, an online platform helping young ambitious people navigate university, career, and life.

## Setup

No build tools or dependencies required. This is a pure HTML, CSS, and JavaScript static site.

### Local Development

Open `index.html` in your browser, or use a local server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (npx)
npx serve .
```

Then visit `http://localhost:8000`.

### Deployment

Upload the entire folder to any static hosting provider:
- **Netlify** — drag and drop the folder, or connect a Git repo
- **GitHub Pages** — push to a repo and enable Pages in settings
- **Vercel** — import the repo and deploy

## Project Structure

```
bigsis/
├── index.html          Homepage
├── uni.html            Uni pillar page
├── career.html         Career pillar page
├── life.html           Life pillar page
├── css/
│   └── styles.css      Shared styles
├── js/
│   └── main.js         Shared JS (nav, scroll reveal, mobile menu)
├── assets/             Images and favicon (add your own)
│   └── .gitkeep
└── README.md
```

## Customisation

- **Product links**: Replace `href="#"` placeholders with your Lemonsqueezy URLs
- **Workshop booking**: Update the Cal.com link in the workshop sections
- **Images**: Add your photo to `assets/` and update the about section's image placeholder
- **Favicon**: Add `favicon.ico` to the `assets/` folder
- **Testimonials**: Replace placeholder testimonials with real ones
- **Prices**: Replace `£XX` with actual prices
- **Internship count**: Replace `X+` in the about stats with your actual number
