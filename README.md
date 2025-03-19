# Triakis

A modern, bilingual website for Triakis - an investment firm specializing in acquiring, managing, and developing profitable French SMBs through technological innovation.

## 🚀 Overview

Triakis is an investment company focused on small to medium businesses (SMBs) with annual revenues ranging from €1M to €5M. The company combines managerial expertise, technological innovation, and strategic vision to optimize SME performance while preserving their unique characteristics.

### Key Investment Areas

- **Acquisition**: Targeted identification using AI models and market analysis
- **Management**: On-site support with process optimization and digital tools
- **Development**: Sustainable growth strategies and value creation

## 🚀 Getting Started

### Prerequisites

- **Node.js**: 22.x
- **pnpm**: 9.x

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd website
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build production application
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint issues automatically
- `pnpm ts` - Run TypeScript compiler check

## 🌍 Internationalization

The website supports two languages:

- **English** (`en`) - Default locale
- **French** (`fr`) - Secondary locale

Language detection is automatic based on browser preferences, with manual switching available.

## 🎨 Design System

The project uses a custom design system built with:

- **Tailwind CSS 4** for utility-first styling
- **Custom color palette** optimized for the investment sector
- **Responsive typography** with fluid scaling
- **Consistent spacing** and layout patterns

## 🔧 Development Guidelines

### Code Style

- **TypeScript-first**: All code written in TypeScript
- **Functional components**: React functional components with hooks
- **Named exports**: Prefer named exports over default exports
- **Early returns**: Use early returns for better readability

### Component Structure

```typescript
// Component structure example
export const ComponentName = () => {
  // Hooks
  const intl = useTranslations('Namespace');

  // Early returns
  if (condition) return null;

  // Render
  return (
    <div className="component-styles">
      {/* Component content */}
    </div>
  );
};
```

### Naming Conventions

- **Components**: PascalCase (`HomeHero`)
- **Files**: kebab-case (`home-hero.tsx`)
- **Variables/Functions**: camelCase (`handleClick`)
- **Constants**: UPPER_SNAKE_CASE (`API_URL`)

## 🚀 Deployment

The project is optimized for deployment on [Vercel](https://vercel.com/):

### Build Optimization

- **Static optimization**: Pages are statically generated where possible
- **Image optimization**: Automatic image optimization with AVIF/WebP
- **Bundle analysis**: Package imports are optimized
- **Performance monitoring**: Vercel Analytics included

## 📄 License

This project is licensed under the MIT License.

---

**Built with ❤️ using modern web technologies**
