# 💼 Portfolio - [saurabh374.github.io](https://saurabh374.github.io/)

Welcome to the repository for my personal portfolio website, showcasing my work, technical expertise, and experience as a **Software Engineer & Full Stack Developer**.

---

## ✨ Features

* 🚀 **Modern UI** with motion + glass effect components
* 📬 **Functional contact form** (EmailJS / Cloudflare Workers optional)
* 📊 **GitHub commit history calendar** (via react-github-calendar)
* 🎖️ **GitRoll developer profile integration**
* 📂 **Project showcase** with live demos & source links
* 🧠 **SEO optimized** with metadata + OpenGraph + structured data
* 📈 **PostHog analytics**
* ⚡ **High-performance setup using Next.js 15 + React 19**

---

## 📸 Screenshots


<img width="1906" src="https://github.com/user-attachments/assets/b08758b4-a483-4221-8c4e-3d076431281e" />

---

## 🛠️ Tech Stack

### Frontend

* **Next.js 15** (App Router, RSC, Image Optimization)
* **React 19**
* **TypeScript**
* **Tailwind CSS + Tailwind Motion**
* **AOS (Animate on Scroll)**
* **Framer Motion** (optional)

### Backend / Services

* **Node.js / Express**
* **Cloudflare Workers / Hono** (optional)
* **EmailJS or Resend**
* **MongoDB / Redis / RabbitMQ (for larger projects)**

### Utilities / DX

* **ESLint + Prettier**
* **OpenNext**
* **pnpm**
* **GitHub Actions** (optional CI/CD)

### Integrations

* **React GitHub Calendar**
* **GitRoll**
* **React Hot Toast**
* **Lucide Icons / React Icons**

---

## 🧱 Project Structure

```
├── src/
│ ├── app/              # Next.js App Router
│ │ ├── layout.tsx
│ │ ├── page.tsx
│ │ ├── blog/
│ │ └── terms/
│ ├── components/
│ │ ├── Contact.tsx
│ │ ├── Github.tsx
│ │ ├── GitRoll.tsx
│ │ ├── Projects.tsx
│ │ ├── Stack.tsx
│ │ └── ScrollButton.tsx
│ ├── lib/
│ └── utils/
├── public/             # Static assets
└── email-worker/       # (optional) Cloudflare worker for emails
```

---

## 🎨 Key Sections

### Hero Section

* Animated intro
* Name / title / tagline
* Social links & resume
* SVG floating shapes & glow effects

### Projects

Including (example):

* **GTA VI Landing Page** (Next.js + animations + responsive UI)
* **Chatify (Realtime Chat App)** – Socket.IO, RabbitMQ, Redis, MongoDB
* **JyotishVishwakosh Web + App** – React + Flutter + AWS + CI/CD

### Tech Stack Display

* Categorized icons w/ tooltip
* Includes frontend, backend, misc tooling

### GitHub Integration

* Auto-generated commit calendar
* Multiple years of history
* Fully responsive

### Contact Form

* EmailJS / Worker-powered form
* Toast notifications
* Validation

---

## 🚀 Getting Started

### Requirements

* **Node 18+**
* **pnpm (recommended)**

### Installation

```bash
git clone https://github.com/saurabh374/portfolio.git
cd portfolio
pnpm install
pnpm dev
```

Navigate to:
➡️ **[http://localhost:3000](http://localhost:3000)**

---

## 📱 Deployment

### Deploy to Cloudflare Pages

```bash
pnpm build
pnpm deploy
```

### Deploy Email Worker (optional)

```bash
cd email-worker
pnpm install
pnpm deploy
```

---

## 📊 Analytics (Optional)

Using PostHog to track:

* Page views
* UI interactions
* Form submissions
* Performance metrics
* Feature usage

---

## ⚡ Performance Notes

* Next.js Image optimization
* Edge-ready deployment via Cloudflare
* Dynamic rendering via RSC
* Optimized fonts (local + display-swap)
* Only loads animations client-side

---

## 📝 License

Licensed under **GNU GPL v3** (same as original).
See the **LICENSE** file for details.

---

## 🤝 Contact

**Portfolio**: [https://saurabh374.github.io](https://saurabh374.github.io)
**Email**: [patilsaurabh1902@gmail.com](mailto:patilsaurabh1902@gmail.com)
**GitHub**: [https://github.com/saurabh374](https://github.com/saurabh374)
**LinkedIn**: [https://linkedin.com/in/iamsaurabhp](https://linkedin.com/in/iamsaurabhp)

---

## ⭐ Support

If you like the project or found it helpful:

```bash
⭐ Star this repo
```
