export const portfolioData = {
  name: "Sanu Raj",
  initials: "SR",
  role: "Fullstack Engineer",
  tagline:
    "I design and build dependable digital products—from thoughtful interfaces to the systems behind them.",
  email: "sanurajk55@gmail.com",
  resume:
    "https://drive.google.com/file/d/1CPLP2UzuL2Ni7-HPh7dKaW6VKWexokox/view?usp=sharing",
  location: "Kerala, India",
  availability: "Open to fullstack engineering opportunities",
  about:
    "I’m a product-minded engineer who enjoys turning complex workflows into clear, useful software. My work spans interface design, frontend architecture, APIs, and data—always with an eye on the people using the product.",
  social: {
    github: "https://github.com/SanuRaj-K",
    linkedin: "https://www.linkedin.com/in/sanu-raj-k/",
  },
  capabilities: [
    {
      index: "01",
      title: "Product development",
      description:
        "Shaping ambiguous requirements into focused features and shipping them across the stack.",
      tools: ["Next.js", "React", "TypeScript", "React Native"],
    },
    {
      index: "02",
      title: "Systems & APIs",
      description:
        "Building maintainable services, integrations, and real-time workflows for growing products.",
      tools: ["Node.js", "Express", "Python", "FastAPI", "Socket.IO"],
    },
    {
      index: "03",
      title: "Data & delivery",
      description:
        "Working from persistence to production with pragmatic tooling and reliable deployment.",
      tools: ["MongoDB", "Firebase", "Docker", "AWS", "Vercel"],
    },
  ],
  projects: [
    {
      title: "AlterDo",
      eyebrow: "Workplace operations platform",
      summary:
        "A responsive workspace platform that brings people operations, finance, projects, and client work into one connected system.",
      contribution:
        "Built role-based workflows spanning task tracking, attendance, leave, payroll, calendars, support tickets, and real-time notifications.",
      tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Socket.IO"],
      live: "https://alterdo-ui.vercel.app/",
      image: "/projects/alterdo.png",
      featured: true,
    },
    {
      title: "Sack-in-Seat",
      eyebrow: "In-theatre ordering experience",
      summary:
        "A mobile-first food ordering experience that lets cinema guests order refreshments without leaving their seats.",
      contribution:
        "Designed an end-to-end ordering flow with real-time status updates and payment-ready checkout across web and mobile.",
      tech: ["React", "React Native", "TypeScript", "Node.js", "MongoDB"],
      live: "https://snack-in-seat.vercel.app/",
      image: "/projects/sack-in-seat.png",
      featured: true,
    },
    {
      title: "Lexoga",
      eyebrow: "Job discovery platform",
      summary:
        "A focused job platform that helps candidates move from broad searches to relevant opportunities quickly.",
      contribution:
        "Created responsive discovery, search, and filtering experiences supported by a full-stack application architecture.",
      tech: ["React", "TypeScript", "FastAPI", "Firebase", "MongoDB"],
      live: "https://lexoga.com",
      image: "/projects/lexoga.png",
      featured: true,
    },
    {
      title: "AlterGraphics",
      eyebrow: "Creative agency website",
      summary:
        "An animated portfolio and lead-generation site for a creative studio.",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
      live: "https://altergraphics.in",
      featured: false,
    },
    {
      title: "Fintrack",
      eyebrow: "Personal finance utility",
      summary:
        "A web app for understanding monthly income and revenue at a glance.",
      tech: ["Next.js", "Node.js", "MongoDB"],
      live: "https://fintrack-personal.vercel.app/",
      featured: false,
    },
    {
      title: "Edusto",
      eyebrow: "E-commerce platform",
      summary:
        "A storefront with checkout, order tracking, inventory, and sales management.",
      tech: ["Next.js", "Node.js", "MongoDB"],
      live: "https://v0-edusto-e-commerce-site.vercel.app/",
      featured: false,
    },
    {
      title: "Dashboard Manager",
      eyebrow: "Finance dashboard",
      summary:
        "A personal finance tracker for budgets, expenses, and monthly reporting.",
      tech: ["React", "Tailwind CSS", "Chart.js"],
      live: "https://dashboard-peach-chi-77.vercel.app/",
      featured: false,
    },
    {
      title: "Rentup",
      eyebrow: "Property discovery",
      summary:
        "A clean rental marketplace for browsing and filtering property listings.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      live: "https://rent-up-five.vercel.app/",
      featured: false,
    },
    {
      title: "Hawoo",
      eyebrow: "Food & hospitality",
      summary:
        "An inviting ice-cream shop experience with menu and ordering journeys.",
      tech: ["React", "TypeScript", "FastAPI"],
      live: "https://haawoo.vercel.app/",
      featured: false,
    },
  ],
  experience: [
    {
      role: "Product Engineer",
      company: "Digievo Labs",
      period: "Apr 2025 — Present",
      description:
        "Building and scaling customer-facing products across the stack.",
    },

    {
      role: "Frontend Developer",
      company: "Digievo Labs",
      period: "Nov 2024 — Mar 2025",
      description:
        "Developed and maintained interfaces with modern web technologies.",
    },
    {
      role: "Frontend Developer",
      company: "Sacrosys Technologies",
      period: "Sep 2024 — Nov 2024",
      description: "Delivered frontend experiences for client products.",
    },
    {
      role: "MERN Stack Developer Intern",
      company: "Bridgeon",
      period: "Jul 2023 — Aug 2024",
      description:
        "Built full-stack applications using MongoDB, Express, React, and Node.js.",
    },
    {
      role: "Frontend Developer Intern",
      company: "Talrop",
      period: "Mar 2022 — May 2023",
      description:
        "Developed production skills through hands-on frontend projects.",
    },
  ],
  education: [
    {
      degree: "BCom, Computer Applications",
      institution: "Amal College of Advanced Studies, Malappuram",
      year: "2020 — 2023",
    },
    {
      degree: "Computer Commerce",
      institution: "GHSS Vaniyambalam, Malappuram",
      year: "Completed 2020",
    },
  ],
} as const;
