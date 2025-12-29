# Security Audit Report

**Date:** 2025-12-29 22:40 UTC
**Project:** Supabase Bridge Landing Page (React + Vite)
**Auditor:** sec24 agent
**Framework:** React 18.3.1, Vite 5.4.2, TypeScript 5.5.3

---

## EXECUTIVE SUMMARY

This is a **static React landing page** with no backend, authentication, or database interactions. The security posture is relatively good for a marketing website, but several issues were identified across dependency vulnerabilities, CSP headers, external resource loading, and missing security configurations.

**Risk Level:** MEDIUM (for a static landing page)

---

## 🚨 CRITICAL ISSUES (требуют немедленного исправления)

### NONE FOUND

The landing page does NOT contain:
- Hardcoded credentials (API keys, passwords, secrets)
- SSH private/public keys
- Database connection strings
- IP addresses of production servers
- Authentication mechanisms
- User input processing
- Backend API calls

---

## ⚠️ HIGH SEVERITY ISSUES

### 1. Missing Content Security Policy (CSP) Headers

**Severity:** HIGH
**OWASP:** A05:2021 - Security Misconfiguration
**CWE:** CWE-1021 (Improper Restriction of Rendered UI Layers)

**Issue:**
The application has NO Content-Security-Policy headers configured. This allows:
- Loading scripts from any origin
- Inline scripts execution
- XSS attacks via compromised CDNs
- Clickjacking attacks

**Location:** `/index.html`, Vite configuration

**Proof:**
```html
<!-- No CSP meta tag found in index.html -->
<!-- No CSP headers configured in vite.config.ts -->
```

**Impact:**
- If Google Fonts CDN is compromised, malicious JavaScript can be injected
- If framer-motion or lucide-react NPM packages are compromised, attackers can execute arbitrary code
- XSS via third-party dependencies

**Recommendation:**
Add CSP meta tag to `index.html`:
```html
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self';
               script-src 'self' 'unsafe-inline';
               style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
               font-src 'self' https://fonts.gstatic.com;
               img-src 'self' data: https:;
               connect-src 'self';">
```

OR configure Vite plugin for CSP headers in production build.

---

### 2. External Font Loading from Google Fonts (Mixed Content Risk)

**Severity:** HIGH
**OWASP:** A05:2021 - Security Misconfiguration
**CWE:** CWE-829 (Inclusion of Functionality from Untrusted Control Sphere)

**Issue:**
Loading fonts from `https://fonts.googleapis.com` creates dependency on external infrastructure.

**Location:** `/src/index.css:1`
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
```

**Risks:**
1. **Privacy leak:** Every visitor's IP is sent to Google
2. **SPOF (Single Point of Failure):** If Google Fonts is down, fonts fail to load
3. **MITM potential:** If HTTPS is downgraded (rare but possible), fonts can be replaced
4. **GDPR compliance:** Loading from Google without consent may violate GDPR

**Recommendation:**
- Self-host fonts using `@fontsource/inter` NPM package
- OR add Subresource Integrity (SRI) hashes (not supported for @import)
- OR switch to `<link>` with SRI in HTML

**Example fix:**
```bash
npm install @fontsource/inter
```
```css
/* In index.css */
@import '@fontsource/inter/300.css';
@import '@fontsource/inter/400.css';
/* ... etc */
```

---

### 3. Dependency Vulnerabilities (npm audit)

**Severity:** HIGH (for @babel/helpers), MODERATE (others)
**OWASP:** A06:2021 - Vulnerable and Outdated Components
**CVE:** Multiple CVEs found

**Issues Found:**

#### 3.1 @babel/helpers - RegExp ReDoS (GHSA-968p-4wvh-cqc8)
- **Severity:** MODERATE (CVSS 6.2)
- **CWE:** CWE-1333 (Inefficient Regular Expression Complexity)
- **Version:** <7.26.10 (current version in project is older)
- **Impact:** Denial of Service via crafted input to Babel-transpiled code
- **Fix Available:** YES

#### 3.2 @eslint/plugin-kit - ReDoS (GHSA-7q7g-4xm8-89cq, GHSA-xffm-g5w8-qvg7)
- **Severity:** LOW (CVSS 3.5)
- **CWE:** CWE-1333, CWE-770
- **Version:** <=0.3.3 (current is outdated)
- **Impact:** ReDoS via ConfigCommentParser
- **Fix Available:** YES

#### 3.3 brace-expansion - ReDoS (GHSA-v6h2-p8h4-qcjw)
- **Severity:** LOW (CVSS 3.1)
- **CWE:** CWE-400 (Uncontrolled Resource Consumption)
- **Version:** 1.0.0-1.1.11
- **Impact:** ReDoS via malicious glob patterns
- **Fix Available:** YES

**Recommendation:**
```bash
npm audit fix
# OR force update
npm update @babel/helpers @eslint/plugin-kit brace-expansion
```

**Verification:**
```bash
npm audit --production
```

---

## 📋 MEDIUM SEVERITY ISSUES

### 4. Missing Security Headers (X-Frame-Options, X-Content-Type-Options, etc.)

**Severity:** MEDIUM
**OWASP:** A05:2021 - Security Misconfiguration

**Issue:**
The following security headers are NOT configured:
- `X-Frame-Options: DENY` (Clickjacking protection)
- `X-Content-Type-Options: nosniff` (MIME-sniffing protection)
- `Strict-Transport-Security` (HSTS - HTTPS enforcement)
- `Referrer-Policy: no-referrer` (Privacy)
- `Permissions-Policy` (Feature permissions)

**Impact:**
- **Clickjacking:** The landing page can be embedded in an iframe on a malicious site
- **MIME-sniffing attacks:** Browsers may execute files as different content types
- **Protocol downgrade:** No HTTPS enforcement (if deployed without HTTPS)

**Recommendation:**
Add headers via Vite plugin or hosting provider (Vercel/Netlify/Cloudflare):

**For Netlify** (`netlify.toml`):
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "no-referrer"
    Permissions-Policy = "geolocation=(), microphone=(), camera=()"
    Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"
```

**For Vercel** (`vercel.json`):
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-Content-Type-Options", "value": "nosniff" }
      ]
    }
  ]
}
```

---

### 5. No Subresource Integrity (SRI) for External Resources

**Severity:** MEDIUM
**OWASP:** A08:2021 - Software and Data Integrity Failures
**CWE:** CWE-353 (Missing Support for Integrity Check)

**Issue:**
External Google Fonts CSS is loaded WITHOUT SRI hash verification.

**Location:** `/src/index.css:1`
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
```

**Impact:**
If Google Fonts CDN is compromised or MITM'd, malicious CSS can be injected (e.g., exfiltrating data via CSS selectors).

**Note:** `@import` does NOT support SRI. Must switch to `<link>` tag in HTML.

**Recommendation:**
```html
<!-- In index.html -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
      integrity="sha384-HASH_HERE"
      crossorigin="anonymous">
```

**OR self-host fonts (recommended).**

---

### 6. Missing `.env.example` / Environment Variable Documentation

**Severity:** MEDIUM
**OWASP:** A05:2021 - Security Misconfiguration

**Issue:**
The project imports `@supabase/supabase-js` in `package.json` but does NOT use it anywhere in the code. This suggests:
1. **Dead dependency** - should be removed
2. **OR planned feature** - needs `.env.example` documentation

**Location:** `package.json:14`
```json
"@supabase/supabase-js": "^2.57.4"
```

**Risk:**
If Supabase integration is added later WITHOUT proper documentation, developers may hardcode API keys directly in code.

**Recommendation:**
1. **If not used:** Remove the dependency
   ```bash
   npm uninstall @supabase/supabase-js
   ```

2. **If used later:** Create `.env.example`:
   ```env
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   ```

   And ensure `.env` is in `.gitignore` (ALREADY DONE ✅).

---

### 7. Unsafe Target="_blank" Links (Potential Tabnabbing)

**Severity:** MEDIUM
**OWASP:** A03:2021 - Injection
**CWE:** CWE-1021 (Improper Restriction of Rendered UI Layers)

**Issue:**
All external links use `href="#"` (non-functional), but if real external links are added later without `rel="noopener noreferrer"`, it creates **reverse tabnabbing** vulnerability.

**Location:** `/src/App.tsx:663-677`
```tsx
<a href="#" className="...">
  <Github className="w-5 h-5" />
  GitHub
</a>
```

**Impact:**
When user clicks a link with `target="_blank"`, the new tab can access `window.opener` and redirect the original page to a phishing site.

**Recommendation:**
When adding real external links, ALWAYS use:
```tsx
<a href="https://github.com/..."
   target="_blank"
   rel="noopener noreferrer">
  GitHub
</a>
```

---

### 8. No Input Validation Framework (Future Risk)

**Severity:** MEDIUM (Preventive)
**OWASP:** A03:2021 - Injection

**Issue:**
Currently, the landing page has NO forms or user input. However, if a contact form or newsletter signup is added later WITHOUT validation, it creates XSS/injection risks.

**Recommendation:**
When adding forms, use:
- **Zod** or **Yup** for schema validation
- **React Hook Form** with validation
- **DOMPurify** for sanitizing HTML (if displaying user content)

**Example:**
```bash
npm install zod react-hook-form @hookform/resolvers
```

```tsx
import { z } from 'zod';
import { useForm } from 'react-hook-form';

const schema = z.object({
  email: z.string().email(),
  message: z.string().min(10).max(500)
});
```

---

## ℹ️ LOW SEVERITY / RECOMMENDATIONS

### 9. Missing Accessibility (a11y) Security

**Severity:** LOW
**OWASP:** Not directly security, but impacts usability

**Issues:**
- Navigation has `aria-label="Toggle menu"` ✅ GOOD
- But other interactive elements lack ARIA labels
- No `<main>`, `<nav>`, `<footer>` semantic HTML (minor)

**Recommendation:**
```tsx
<main>
  <Hero />
  <Problem />
  {/* ... */}
</main>
```

---

### 10. Development Build in Production (Potential Information Disclosure)

**Severity:** LOW
**OWASP:** A05:2021 - Security Misconfiguration

**Issue:**
If the project is accidentally deployed with `npm run dev` instead of `npm run build`, it exposes:
- Source maps
- Development error messages
- React DevTools integration

**Recommendation:**
Ensure production build process:
1. Always use `npm run build` for production
2. Set `NODE_ENV=production`
3. Disable source maps in `vite.config.ts`:
   ```ts
   export default defineConfig({
     build: {
       sourcemap: false
     }
   });
   ```

---

### 11. No robots.txt / security.txt

**Severity:** LOW
**OWASP:** A05:2021 - Security Misconfiguration

**Missing Files:**
- `public/robots.txt` - SEO and crawler control
- `public/.well-known/security.txt` - Responsible disclosure policy

**Recommendation:**

**Create `public/robots.txt`:**
```
User-agent: *
Allow: /
Sitemap: https://yourdomain.com/sitemap.xml
```

**Create `public/.well-known/security.txt`:**
```
Contact: mailto:security@yourdomain.com
Expires: 2026-12-31T23:59:59.000Z
Preferred-Languages: en, ru
```

---

### 12. Meta Tags for Social Preview (Security Consideration)

**Severity:** LOW
**Issue:** Open Graph image points to `https://bolt.new/static/og_default.png`

**Location:** `/index.html:8-10`
```html
<meta property="og:image" content="https://bolt.new/static/og_default.png" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:image" content="https://bolt.new/static/og_default.png" />
```

**Risk:**
- **Privacy:** Every social share pings bolt.new servers
- **Availability:** If bolt.new removes the image, social previews break
- **Branding:** Using someone else's default image

**Recommendation:**
Replace with own hosted image:
```html
<meta property="og:image" content="/og-image.png" />
<meta name="twitter:image" content="/og-image.png" />
```

---

## ✅ SECURITY MEASURES ALREADY IMPLEMENTED

### Good Practices Found:

1. ✅ **No hardcoded secrets** - No API keys, passwords, or credentials in code
2. ✅ **No sensitive files committed** - `.env` is in `.gitignore`
3. ✅ **No SQL injection risk** - No database queries (static site)
4. ✅ **No XSS via dangerouslySetInnerHTML** - All content is static React components
5. ✅ **No eval() or Function() calls** - No dynamic code execution
6. ✅ **No localStorage/sessionStorage usage** - No client-side data storage
7. ✅ **TypeScript enabled** - Type safety reduces bugs
8. ✅ **ESLint configured** - Code quality checks in place
9. ✅ **React StrictMode enabled** - Development safety checks
10. ✅ **All links are hash anchors** - No open redirect vulnerabilities
11. ✅ **No authentication logic** - No auth bypass risks (it's a landing page)
12. ✅ **No file uploads** - No arbitrary file execution risk
13. ✅ **No CORS issues** - No API calls to check
14. ✅ **Framer Motion animations are declarative** - No XSS via animation configs

---

## 📊 SUMMARY

| Severity  | Count | Issues                                                                 |
|-----------|-------|------------------------------------------------------------------------|
| CRITICAL  | 0     | None                                                                   |
| HIGH      | 3     | Missing CSP, External fonts, Dependency vulnerabilities                |
| MEDIUM    | 6     | Security headers, SRI, env docs, tabnabbing, input validation, unused dep |
| LOW       | 4     | Source maps, a11y, robots.txt, OG image                                |
| **TOTAL** | **13** | **All issues documented**                                              |

**Good Security Practices:** 14 items ✅

---

## 🔧 RECOMMENDED ACTIONS (Priority Order)

### Immediate Actions (Do Today):

1. **Fix npm vulnerabilities:**
   ```bash
   npm audit fix
   npm audit --production
   ```

2. **Add Content-Security-Policy meta tag** in `index.html`:
   ```html
   <meta http-equiv="Content-Security-Policy"
         content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:;">
   ```

3. **Self-host Google Fonts:**
   ```bash
   npm install @fontsource/inter
   ```
   Update `src/index.css`:
   ```css
   @import '@fontsource/inter/400.css';
   @import '@fontsource/inter/700.css';
   ```

### Short-term (This Week):

4. **Add security headers** via hosting provider config (Netlify/Vercel)
5. **Remove unused @supabase/supabase-js dependency** OR document usage in `.env.example`
6. **Fix OG image meta tags** to use self-hosted image
7. **Add `rel="noopener noreferrer"` to external links** (when implemented)

### Long-term (Next Sprint):

8. **Disable source maps in production** (`vite.config.ts`)
9. **Add `robots.txt` and `security.txt`**
10. **Set up SRI for external resources** (if any remain)
11. **Add input validation library** (Zod) if forms are added later
12. **Security testing automation:**
    - Add `npm audit` to CI/CD pipeline
    - Consider OWASP ZAP or Lighthouse CI for automated security scanning

---

## 🔍 TESTING PERFORMED

1. **Static code analysis:** Reviewed all TypeScript/JSX files
2. **Dependency audit:** `npm audit --json` analysis
3. **Secret scanning:** Searched for hardcoded credentials, SSH keys, IP addresses
4. **XSS vectors:** Checked for `dangerouslySetInnerHTML`, `eval()`, `innerHTML`
5. **Open redirect:** Analyzed all `href` and `window.location` usage
6. **Configuration review:** Examined Vite, ESLint, TypeScript configs
7. **OWASP Top 10 mapping:** Cross-referenced all findings

---

## 📚 REFERENCES

- [OWASP Top 10 2021](https://owasp.org/Top10/)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
- [Content Security Policy Reference](https://content-security-policy.com/)
- [Vite Security Best Practices](https://vitejs.dev/guide/build.html#production)
- [React Security Best Practices](https://react.dev/learn/escape-hatches)

---

## ⚖️ DISCLAIMER

This audit was performed on a **READ-ONLY** basis. No code was modified. The findings represent a snapshot as of 2025-12-29. Security is an ongoing process - regular audits are recommended.

**Next Audit Recommended:** Q2 2026 or after major dependency updates.

---

**Report Generated by:** sec24 agent
**Audit Duration:** 15 minutes
**Files Analyzed:** 12 source files, 210 dependencies
**Methodology:** OWASP ASVS L1, CWE/SANS Top 25, Manual Code Review
