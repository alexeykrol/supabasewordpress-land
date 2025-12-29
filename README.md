# Supabase Bridge Landing Page

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
[![Security](https://img.shields.io/badge/Security-A+-success?style=for-the-badge&logo=security&logoColor=white)](tests/reports/security-audit-2025-12-29.md)

> **Transform WordPress into a flexible marketing platform with Supabase.** Automatic funnels, 1-click registration, and real-time analytics. No monthly fees. Open Source.

Modern, secure landing page for **Supabase Bridge** - a WordPress plugin that eliminates the pain of managing online schools by integrating Supabase for automation, analytics, and frictionless user experience.

---

## ✨ Features

- 🎨 **Modern Design** - Beautiful gradient-based UI with smooth animations
- 🔒 **Security First** - CSP headers, zero vulnerabilities, GDPR compliant
- ⚡ **Lightning Fast** - Built with Vite, optimized bundle size
- 📱 **Fully Responsive** - Mobile-first design that works everywhere
- ♿ **Accessible** - WCAG compliant with semantic HTML
- 🌍 **Self-Hosted Fonts** - No external CDN dependencies, privacy-focused

---

## 🛡️ Security Highlights

This landing page has undergone comprehensive security auditing:

- ✅ **0 vulnerabilities** in production dependencies
- ✅ **Content Security Policy** implemented
- ✅ **No data leaks** to third-party CDNs (Google Fonts replaced with self-hosted)
- ✅ **XSS protection** - No dangerous HTML rendering
- ✅ **Tabnabbing prevention** - Secure external links
- ✅ **GDPR compliant** - All resources self-hosted

[View Full Security Audit Report →](tests/reports/security-audit-2025-12-29.md)

---

## 🚀 Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI framework with concurrent rendering |
| **TypeScript** | Type safety and better DX |
| **Vite** | Ultra-fast build tool and dev server |
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Smooth animations and transitions |
| **Lucide React** | Beautiful, consistent icons |
| **@fontsource/inter** | Self-hosted Inter font family |

---

## 📦 Quick Start

### Prerequisites

- Node.js >= 18.x
- npm >= 9.x

### Installation

```bash
# Clone the repository
git clone https://github.com/alexeykrol/supabasewordpress-land.git

# Navigate to project directory
cd supabasewordpress-land

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality |
| `npm run typecheck` | Run TypeScript compiler checks |

---

## 📁 Project Structure

```
supabasewordpress-land/
├── public/              # Static assets
├── src/
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles & Tailwind
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── vite.config.ts       # Vite configuration
```

---

## 🌐 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/alexeykrol/supabasewordpress-land)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/alexeykrol/supabasewordpress-land)

```bash
# Build the project
npm run build

# Deploy dist/ folder to Netlify
```

---

## 🎯 Performance

- ⚡ **First Contentful Paint:** < 1.0s
- 🎨 **Largest Contentful Paint:** < 2.5s
- 📦 **Bundle Size:** ~285KB (gzipped: ~90KB)
- 🔄 **Time to Interactive:** < 2.0s

---

## 🧪 Development Story

This landing page was built in **15 days** by a single product owner with AI assistance (Claude), demonstrating the power of AI-assisted development:

- **Traditional Team Cost:** $86,000 (90 days, 3 devs + QA)
- **AI-Assisted Cost:** $300 (15 days, 1 owner + AI)
- **Savings:** 99.7% cost reduction

Learn more about this approach in the [AI-Dev School](https://github.com/alexeykrol/supabasewordpress-land).

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📞 Contact & Support

- **Author:** Alexey K.
- **GitHub:** [@alexeykrol](https://github.com/alexeykrol)
- **Project Link:** [https://github.com/alexeykrol/supabasewordpress-land](https://github.com/alexeykrol/supabasewordpress-land)

---

## 🌟 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
- Fonts from [Fontsource](https://fontsource.org/)

---

<div align="center">

**[⬆ back to top](#supabase-bridge-landing-page)**

Made with ❤️ and AI by [Alexey K.](https://github.com/alexeykrol)

</div>
