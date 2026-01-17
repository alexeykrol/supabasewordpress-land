# ARCHITECTURE — Supabase Bridge Landing Page

*Last Updated: 2026-01-17*

> 📊 Technical architecture and design decisions
>
> For detailed file structure, see [README.md](../README.md#project-structure)

---

## 🏗️ Architecture Overview

**Type:** Single-Page Application (SPA) with language routing
**Pattern:** Monolithic component structure (all UI in App.tsx files)
**State Management:** Minimal local state (no global state needed)

```
┌─────────────────────────────────────────┐
│  index.html (Entry Point)              │
│  - CSP headers                          │
│  - Meta tags (SEO, OG)                  │
└─────────────┬───────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────┐
│  src/main.tsx (Router)                  │
│  - Language detection (localStorage)    │
│  - Load ru/App.tsx or en/App.tsx        │
└─────────────┬───────────────────────────┘
              │
         ┌────┴────┐
         ▼         ▼
    ┌────────┐  ┌────────┐
    │ ru/    │  │ en/    │
    │ App.tsx│  │ App.tsx│
    └────────┘  └────────┘
         │         │
         └────┬────┘
              ▼
    ┌─────────────────────┐
    │  9 Section Components│
    │  (inline in App.tsx) │
    └─────────────────────┘
```

---

## 🌍 Multilingual Architecture

### Language Detection Flow

1. **Initialization** (main.tsx)
   ```typescript
   const savedLanguage = localStorage.getItem('language')
   const defaultLanguage = savedLanguage || 'ru'
   ```

2. **Component Loading**
   - If language === 'ru': Load `src/ru/App.tsx`
   - If language === 'en': Load `src/en/App.tsx`

3. **Language Switch**
   ```typescript
   const switchLanguage = (lang: 'ru' | 'en') => {
     localStorage.setItem('language', lang)
     window.location.reload() // Full page reload
   }
   ```

### Trade-offs

✅ **Pros:**
- Simple implementation (no complex routing)
- Easy content localization (separate files)
- No translation runtime overhead

❌ **Cons:**
- Code duplication between ru/en
- Full page reload on language switch
- Manual content synchronization needed

**Recommendation for v2.0:** Migrate to react-i18next for better maintainability

---

## 🧩 Component Structure

Each `App.tsx` contains 9 major sections as inline function components:

| Component | Lines | Purpose | Key Features |
|-----------|-------|---------|--------------|
| **Navigation** | ~80 | Fixed header | Language switcher, mobile menu, GitHub CTA |
| **Hero** | ~100 | Landing section | Headline, CTA button, stats dashboard mockup |
| **Problem** | ~120 | Problem definition | 3-card layout (Funnel Chaos, Registration Wall, Analytics) |
| **Solution** | ~200 | Feature showcase | 3 solutions with animated SVG visualizations |
| **SocialProof** | ~60 | Testimonials | Blockquote with custom styling |
| **Statistics** | ~150 | ROI comparison | Animated bar chart (Traditional vs AI-assisted) |
| **Manifesto** | ~80 | Philosophy | Message about AI-assisted development |
| **DualCTA** | ~100 | Call-to-action | Two conversion paths (Get Tool / Get Course) |
| **Footer** | ~60 | Links & branding | GitHub, author site, Vibe Coding attribution |

### Component Pattern

```typescript
function SectionName() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Content */}
    </motion.section>
  )
}
```

**Design Pattern:** Scroll-triggered animations with Framer Motion

---

## 🎨 Styling Architecture

### Tailwind CSS Configuration

**Custom Theme:**
```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: '#10b981',    // Emerald-500
      secondary: '#14b8a6',  // Teal-500
    }
  }
}
```

**Gradient Pattern:**
- Background: `bg-gradient-to-br from-emerald-50 via-white to-teal-50`
- Accents: `bg-gradient-to-r from-emerald-500 to-teal-500`

### Font System

**Inter Font Family** (self-hosted via @fontsource)
```css
/* src/index.css */
@import '@fontsource/inter/400.css';
@import '@fontsource/inter/500.css';
@import '@fontsource/inter/600.css';
@import '@fontsource/inter/700.css';
```

**Why self-hosted:** Privacy (GDPR), performance, no CDN dependency

---

## ⚡ Tech Stack Details

### Core Dependencies

| Library | Version | Purpose |
|---------|---------|---------|
| **React** | 18.3.1 | UI framework (concurrent rendering) |
| **TypeScript** | 5.5.3 | Type safety (strict mode enabled) |
| **Vite** | 7.3.0 | Build tool, dev server, HMR |
| **Tailwind CSS** | 3.4.1 | Utility-first styling (JIT compilation) |
| **Framer Motion** | 12.23.26 | Scroll-triggered animations |
| **Lucide React** | 0.344.0 | Icon library (tree-shakeable) |

### Build Pipeline

```
Source Code (TSX)
      ↓
TypeScript Compiler (type checking)
      ↓
Vite Bundler
      ↓
  ┌───┴───┐
  ↓       ↓
ESBuild  Rollup
(dev)    (prod)
  ↓       ↓
  └───┬───┘
      ↓
dist/ (optimized bundle)
```

**Optimizations:**
- Vite code splitting
- Lazy icon loading (Lucide excluded from optimization)
- Tailwind JIT (minimal CSS)
- Tree shaking (unused code removed)

---

## 📊 Data Flow

**No complex state management** - landing page is primarily static

### State Usage

```typescript
// Only state: Mobile menu toggle
const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
```

**Why no Redux/Context:**
- No shared state between components
- No API calls (static content)
- No user authentication
- Minimal interactivity (just menu toggle)

**Data Sources:**
- All content: Hardcoded in JSX
- Language preference: localStorage
- No external APIs

---

## 🔒 Security Architecture

### Content Security Policy (CSP)

```html
<!-- index.html -->
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self';
               script-src 'self';
               style-src 'self' 'unsafe-inline';
               img-src 'self' data:;">
```

### Security Measures

✅ **Implemented:**
- CSP headers (XSS protection)
- Self-hosted fonts (no third-party CDN)
- Secure external links (`rel="noopener noreferrer"`)
- No eval() or dangerous HTML rendering
- GDPR compliant (no tracking/analytics)

❌ **Not Needed:**
- Authentication (public landing page)
- API security (no backend)
- Rate limiting (static site)

---

## 🚀 Performance Architecture

### Build Optimization

**Vite Configuration:**
```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'], // Async icon loading
  },
})
```

### Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| **FCP** (First Contentful Paint) | <1.0s | ~0.8s |
| **LCP** (Largest Contentful Paint) | <2.5s | ~1.5s |
| **TTI** (Time to Interactive) | <2.0s | ~1.8s |
| **Bundle Size** (gzipped) | <100KB | ~90KB |

### Animation Performance

**GPU Acceleration:**
```typescript
// All animations use transform/opacity (GPU-accelerated)
motion.div({
  initial: { opacity: 0, y: 20 },    // ✅ GPU
  animate: { opacity: 1, y: 0 }      // ✅ GPU
})
```

**Avoid:** width, height, left, top (cause reflow)

---

## 📁 File Organization

```
src/
├── ru/
│   └── App.tsx          # Russian version (880 lines)
│                        # All 9 sections inline
│
├── en/
│   └── App.tsx          # English version (850 lines)
│                        # All 9 sections inline
│
├── main.tsx             # Entry point (30 lines)
│                        # Language detection & routing
│
├── index.css            # Global styles (20 lines)
│                        # Tailwind imports + font imports
│
└── vite-env.d.ts        # TypeScript definitions (3 lines)
```

**Total Source Code:** ~2,000 lines across 5 files

---

## 🔧 Development Workflow

### Local Development

```bash
npm run dev          # Start Vite dev server (localhost:5173)
npm run typecheck    # TypeScript type checking
npm run lint         # ESLint code quality
npm run build        # Production build
npm run preview      # Preview production build
```

### Hot Module Replacement (HMR)

**Vite Fast Refresh:**
- React component changes → Instant update (no page reload)
- CSS changes → Instant update
- TypeScript errors → Overlay in browser

---

## 🌐 Deployment Architecture

### Static Site Deployment

**Build Output:**
```
dist/
├── index.html                    # Entry HTML
├── assets/
│   ├── index-[hash].js          # Bundled JavaScript
│   ├── index-[hash].css         # Bundled CSS
│   └── fonts/                   # Self-hosted Inter fonts
```

**Supported Platforms:**
- **Vercel** (Recommended): Zero-config, automatic deployments
- **Netlify**: Drag-and-drop dist/ folder
- **GitHub Pages**: Static hosting
- **Any CDN**: Serve dist/ folder

### Environment Variables

**None needed** - all configuration is build-time

---

## 📚 References

- **Detailed File Structure:** [README.md](../README.md#project-structure)
- **Tech Stack Documentation:** [README.md](../README.md#tech-stack)
- **Development Story:** [README.md](../README.md#development-story)

---

## 🔮 Future Architecture Considerations

### v2.0 Refactor Recommendations

1. **Extract Shared Components**
   - Create `src/components/` directory
   - DRY principle for ru/en versions
   - Reduces code duplication by 50%

2. **Implement i18n Framework**
   - Migrate to `react-i18next`
   - Single App.tsx with translation keys
   - No page reload on language switch

3. **Add Component Testing**
   - Vitest + React Testing Library
   - Test critical user flows
   - Prevent regressions

4. **Optimize Bundle**
   - Code splitting by route (if adding pages)
   - Dynamic imports for heavy components
   - Target: <50KB gzipped

---

*This architecture supports rapid iteration while maintaining production-grade quality.*
