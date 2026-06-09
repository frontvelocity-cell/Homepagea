# Vue 3 + TypeScript + Tailwind Contact Form

A modern contact form application built with Vue 3, TypeScript, and Tailwind CSS.

## Features

- Vue 3 with Composition API
- TypeScript for type safety
- Tailwind CSS for styling (CLI version)
- Vue Router for navigation
- Responsive design
- Form validation
- 404 error page

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Build Tailwind CSS:
```bash
npm run build-css
```

3. Start the development server:
```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run build-css` - Build Tailwind CSS with watch mode

## Project Structure

```
src/
├── components/
│   ├── ContactForm.vue
│   ├── Home.vue
│   └── NotFound.vue
├── styles/
│   ├── tailwind.css (input)
│   └── index.css (output)
├── App.vue
└── main.ts
```

## Tailwind CSS

This project uses Tailwind CSS via the CLI tool. The input file is `src/styles/tailwind.css` and the compiled output is `src/styles/index.css`.

To rebuild the CSS after making changes to Tailwind classes:
```bash
npm run build-css
```