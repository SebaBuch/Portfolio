# Portfolio – Sebastian Buchholz

Personal portfolio website of Sebastian Buchholz, Junior Fullstack Developer.
Built with Angular as part of the Developer Akademie.

**Live:** _coming soon_

## Features

- Bilingual (German / English) with a language switch in the header
- Responsive design for mobile, tablet, desktop and widescreen (from 1440px)
- Hero section with animated marquee
- Project list with hover preview and a detail overlay
- References slider
- Contact form with validation on blur and email sending via PHP
- Legal notice and privacy policy
- Green glow that follows the mouse (desktop only)

## Tech Stack

- Angular 22 (standalone components, signals, `@if` / `@for`)
- TypeScript
- SCSS
- PHP (contact form)

## Project Structure

```
src/app/
├── main-page/            # Main page and its sections
│   ├── hero/
│   ├── about-me/
│   ├── skills/
│   ├── projects/
│   ├── references/
│   └── contact/
├── imprint/              # Legal notice
├── privacy-policy/       # Privacy policy
└── shared/
    ├── components/       # Header and footer
    ├── services/         # LanguageService
    ├── translation/      # All texts in German and English
    └── data/             # Project data
public/
├── fonts/                # Fira Code, Karla (hosted locally)
├── icons/                # SVG icons
├── images/               # Photo and project screenshots
├── sendMail.php          # Sends the contact form as email
└── .htaccess             # HTTPS redirect and Angular routing
```

## Translations

All texts are stored in `src/app/shared/translation/translations.ts`, each with a key and a German and English version.
The `LanguageService` stores the current language in a signal and returns the text for a key with `translate(key)`.
When the language changes, all texts on the page update automatically.

## Getting Started

**Requirements:** Node.js and the Angular CLI (`npm install -g @angular/cli`)

```bash
git clone https://github.com/SebaBuch/Portfolio.git
cd Portfolio
npm install
ng serve -o
```

The website opens at `http://localhost:4200`.

> The contact form only works on a server with PHP. With `ng serve` the form shows the error message.

## Build and Deployment

```bash
ng build
```

Upload the content of `dist/portfolio/browser/` to the web server (Apache with PHP).
`sendMail.php` and `.htaccess` come from `public/`. Make sure the hidden `.htaccess` file is uploaded as well.

## Author

Sebastian Buchholz – [GitHub](https://github.com/SebaBuch)
