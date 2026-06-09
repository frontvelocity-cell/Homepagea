# Vue 3 + TypeScript + Tailwind CSS Contact Form

A modern, production-ready contact form application built with Vue 3, TypeScript, and Tailwind CSS.

## Features

- ⚡️ Vue 3 with Composition API
- 🔷 TypeScript for type safety
- 🎨 Tailwind CSS for styling (CLI version)
- 🚀 Vite for fast development
- 🛣️ Vue Router for navigation
- 📱 Responsive design
- ✅ Form validation
- 🚫 404 error page

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository

2. Install dependencies:
```bash
npm install
```

3. Build Tailwind CSS:
```bash
npm run build-css
```

4. Start the development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── components/          # Vue components
│   ├── Home.vue        # Home page component
│   ├── ContactForm.vue # Contact form component
│   └── NotFound.vue    # 404 error page
├── styles/             # CSS files
│   ├── tailwind.css    # Tailwind input file
│   └── index.css       # Compiled CSS output
├── App.vue             # Root component
└── main.ts             # Application entry point
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run build-css` - Build Tailwind CSS with watch mode

## Technologies Used

- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Typed JavaScript for better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Vue Router** - Official router for Vue.js
- **Vite** - Next generation frontend tooling

## Tailwind CSS

This project uses Tailwind CSS via the CLI tool. The input file is `src/styles/tailwind.css` and the compiled output is `src/styles/index.css`.

To rebuild the CSS after making changes to Tailwind classes:
```bash
npm run build-css
```

## License

MIT