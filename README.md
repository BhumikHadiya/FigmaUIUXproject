Figma link --  https://www.figma.com/community/file/1698042066540804699



# Finora – Personal Finance Platform 🚀
> *"Take Control of Your Money."*

Finora is a modern, responsive, and high-conversion fintech product landing page built for a personal finance management platform tailored to college students, young professionals, and anyone striving for financial independence.

---

## 📸 Project Overview & Core Concept
Finora helps users:
- **Track Expenses:** Monitor daily transactions with automated category sorting.
- **Smart Budgeting:** Set flexible monthly spending limits and receive real-time threshold warnings.
- **Save More:** Create dedicated milestone vaults, automate spare-change roundups, and project future wealth growth.
- **Campus & Household Sharing:** Split rent, groceries, and utilities with roommates without messy spreadsheets.

---

## 🎨 Design System & Specifications

### 1. Color Palette
| Token Name | Hex Code | Usage |
| :--- | :--- | :--- |
| **Primary Green** | `#126B46` | Brand buttons, key highlights, progress fills, badges |
| **Dark Green** | `#153F2C` | Headings, hero card surfaces, dark CTA background, footer |
| **Background** | `#F0F8F3` | Soft mint page backdrop, comfortable reading tone |
| **Card Background** | `#EAF5ED` | Rounded card containers, metric panels, tab backgrounds |
| **Main Text** | `#26352D` | Primary body typography, card headlines, transaction titles |
| **Secondary Text** | `#829188` | Subtitles, helper text, timestamps, labels |
| **White** | `#FFFFFF` | Inner dashboard modules, elevated cards, button text |

### 2. Typography
- **Headings & Display:** `Poppins` (Weights: 600 SemiBold, 700 Bold, 800 ExtraBold)
- **Body & Captions:** `Inter` (Weights: 400 Regular, 500 Medium)
- **Buttons & Interactive CTAs:** `Inter SemiBold` (`font-semibold`)

### 3. Design Aesthetics
- Modern, clean, and minimal SaaS fintech aesthetic
- Rounded corners (`rounded-2xl`, `rounded-3xl`, `rounded-[44px]`)
- Multi-layered soft ambient shadows (`box-shadow: 0 10px 30px -10px rgba(18, 107, 70, 0.08)`)
- Smooth interactive micro-transitions and hover elevation
- Generous whitespace and high contrast for effortless readability
- Optimized for direct import into **Figma** (semantic hierarchy, clear component cards, clean vector SVGs)

---

## 🧩 Website Architecture & Sections

1. **Navigation Header (`Navbar.jsx`):**
   - Brand logo with financial geometric wallet icon
   - Anchor links (`Home`, `Features`, `How It Works`, `Dashboard`, `Calculator`, `Pricing`, `About`)
   - Interactive "Log In" and "Get Started" buttons
   - Fully responsive slide-down mobile menu

2. **Hero Section (`Hero.jsx`):**
   - Headline: *"Take Control of Your Money."*
   - Description and dual CTAs (*Start for Free* & *Explore Features*)
   - Trust metrics (*$4.2M+ Tracked*, *4.9/5 Rating*, *256-Bit Bank Security*)
   - High-fidelity **Finance Dashboard Illustration**:
     - Live total balance (`$24,850.40`, `+14.2%`)
     - Monthly income (`$6,420.00`) vs. monthly expenses (`$2,845.50`)
     - Savings progress bar (`$18,500 / $25,000` - 74% completed)
     - Interactive expense trends bar chart
     - Floating badge widgets (*Weekly Budget Win*, *Auto Round-Up Deposit*)

3. **Features Section (`Features.jsx`):**
   - **Track Expenses:** Daily spending monitoring, live auto-categorization preview
   - **Smart Budgeting:** Monthly budget limit bars with remaining allowance warnings
   - **Save More:** Active milestone goal vaults with projection models
   - Bonus student perks: Roommate bill splitting & 0% fees for college students

4. **How It Works Section (`HowItWorks.jsx`):**
   - Step 01: *Create Your Account* (60s setup, 256-bit AES encryption)
   - Step 02: *Track Your Spending* (Real-time feed, automated categorization)
   - Step 03: *Achieve Your Goals* (Automated roundups, celebratory habit milestones)

5. **Interactive Dashboard Command Center (`DashboardPreview.jsx`):**
   - Time-range switcher (`1M`, `6M`, `1Y`) that updates chart data dynamically
   - Cashflow dynamics SVG chart with hover tooltips
   - Detailed spending breakdown (Housing 34%, Groceries 24%, Tech 18%, etc.)
   - Savings goal vaults and real-time transaction ledger feed

6. **Interactive Savings Simulator (`SavingsCalculator.jsx`):**
   - Interactive sliders for Monthly Income, Target Savings %, and Time Horizon
   - Real-time calculated results including estimated High-Yield Interest returns

7. **Pricing Section (`Pricing.jsx`):**
   - Monthly and Annual billing toggle (Save 20%)
   - *Student Starter* ($0/mo Free forever)
   - *Finora Pro* ($4.99/mo or $3.99/mo annual - Most Popular)
   - *Roommates & Household* ($9.99/mo or $7.99/mo annual)

8. **About & Testimonials Section (`AboutTestimonials.jsx`):**
   - Brand mission, core principles, and verified reviews from university students and early-career pros

9. **FAQ Section (`FAQ.jsx`):**
   - Expandable interactive accordion addressing student discounts, account security, and exports

10. **High-Impact CTA Section (`CTASection.jsx`):**
    - Headline: *"Your Money. Your Future."*
    - Dark green `#153F2C` backdrop with ambient glow and security guarantees

11. **Footer (`Footer.jsx`):**
    - Logo, product links, company links, contact info, interactive newsletter form, and social links

12. **Interactive Auth Modal (`AuthModal.jsx`):**
    - Modal supporting both **Sign Up** and **Log In**
    - Persona switcher (*College Student* vs. *Young Professional*)
    - Interactive demo mode with feedback

---

## 🛠️ Tech Stack
- **Framework:** React 19 (Functional components, Hooks)
- **Bundler & Dev Server:** Vite 8
- **Styling:** Tailwind CSS 4 with custom `@theme` tokens
- **Icons:** Lucide React & crisp semantic SVG vectors
- **Fonts:** Poppins (Headings) & Inter (Body & Buttons) via Google Fonts

---

## 🚀 Getting Started & Installation

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) and `npm` installed.

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
The website will be live at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
This bundles the optimized production assets into the `dist/` directory.

### 4. Preview the Production Build Locally
```bash
npm run preview
```
Runs the preview server on `http://localhost:4173`.

---

## 🎨 Opening in Figma & Sharing on GitHub

### How to Open this Project in Figma:
1. **Using HTML-to-Figma Plugins:**
   - Run the site locally (`npm run dev`) or deploy to Vercel/Netlify/GitHub Pages.
   - Open Figma and install the **"html.to.design"** or **"HTML to Figma"** plugin.
   - Enter your local URL (`http://localhost:5173`) or deployed link.
   - The plugin converts the DOM structure into native Figma frames, auto-layout groups, text layers, and vectors.
2. **Design Tokens in Figma:**
   - Primary: `#126B46`
   - Dark Green: `#153F2C`
   - Background: `#F0F8F3`
   - Card Background: `#EAF5ED`
   - Text: `#26352D` & `#829188`
   - Headings: `Poppins`
   - Body: `Inter`

### How to Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit: Finora Fintech Landing Page"
git branch -M main
git remote add origin https://github.com/<your-username>/finora-landing-page.git
git push -u origin main
```

---

## 📁 Project Folder Structure
```
finora-landing-page/
├── public/
│   ├── favicon.svg            # Finora favicon icon
│   └── logo-icon.svg           # Brand vector mark
├── src/
│   ├── components/
│   │   ├── AboutTestimonials.jsx
│   │   ├── AuthModal.jsx
│   │   ├── CTASection.jsx
│   │   ├── DashboardPreview.jsx
│   │   ├── FAQ.jsx
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Navbar.jsx
│   │   ├── Pricing.jsx
│   │   └── SavingsCalculator.jsx
│   ├── data/
│   │   └── financeData.js      # Mock financial data, metrics & copy
│   ├── App.css
│   ├── App.jsx                 # Main application layout
│   ├── index.css               # Tailwind CSS theme & global styles
│   └── main.jsx                # React root entry
├── index.html                  # HTML entry point with Google Fonts
├── package.json
├── vite.config.js
└── README.md
```

---

## 📄 License
Created for academic demonstration and fintech SaaS showcase.
© 2026 Finora Technologies Inc. All rights reserved.
