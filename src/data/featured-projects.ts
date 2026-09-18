import { portfolioData } from "./portfolio";
import { instagramCommentPickerLinks } from "./project-links";

export type FeaturedProject = {
  title: string;
  category: string;
  summary: string;
  context: string;
  features: string[];
  tech: readonly string[];
  tags?: readonly string[];
  image?: string;
  live: string;
  github?: string;
  placeholder?: boolean;
  theme: string;
};

const existing = portfolioData.projects;
export const featuredProjects: FeaturedProject[] = [
  {
    title: "Lexoga",
    category: "ENGINEERING PLATFORM · AI INTEGRATIONS",
    summary: "Connecting engineering talent with opportunity.",
    context:
      "An on-demand engineering platform with job discovery and AI-powered LinkedIn profile analysis and scoring.",
    features: [
      "Responsive discovery, search, and filtering",
      "LinkedIn profile analysis and scoring with AI integrations",
      "Full-stack application delivery with Azure services and Docker",
    ],
    tech: [
      "Next.js",
      "Material UI",
      "Tailwind CSS",
      "Framer Motion",
      "Python",
      "FastAPI",
      "MongoDB",
      "Azure",
      "Docker",
      "Azure AI",
    ],
    image: "/projects/lexoga.png",
    live: "https://lexoga.com",
    theme: "lexoga",
  },
  {
    title: "LinkHQ",
    category: "CREATOR COMMERCE · COMPANY PROJECT",
    summary: "Helping creators turn their online presence into a storefront.",
    context:
      "A company project I contributed to: LinkHQ brings link-in-bio pages and online stores together, helping creators sell physical and digital products and manage their commerce workflows in one place.",
    features: [
      "Link-in-bio pages and online storefronts",
      "Physical and digital product sales with inventory management",
      "Order management and automated customer status updates",
      "UPI, card, and wallet payment options",
    ],
    tech: [
      "Next.js",
      "Material UI",
      "Tailwind CSS",
      "Framer Motion",
      "Python",
      "FastAPI",
      "MongoDB",
      "Azure",
      "Docker",
      "Azure AI",
    ],
    tags: ["Company project", "Creator commerce", "Online stores"],
    live: "https://linkhq.co/",
    theme: "linkhq",
  },
  {
    title: "Instagram Comment Picker",
    category: "WEB APPLICATION · CREATOR TOOL",
    summary: "A simpler way to pick a giveaway winner.",
    context:
      "A web application for selecting winners from Instagram comments, designed around a focused creator workflow.",
    features: ["Winner selection from Instagram comments"],
    tech: [],
    tags: ["Instagram", "Winner selection"],
    ...instagramCommentPickerLinks,
    placeholder: Object.values(instagramCommentPickerLinks).some(
      (url) => new URL(url).hostname === "example.com",
    ),
    theme: "picker",
  },
  ...existing
    .filter(
      (project) =>
        project.title === "AlterDo" || project.title === "Sack-in-Seat",
    )
    .map((project) => ({
      title: project.title,
      category: project.eyebrow.toUpperCase(),
      summary: project.summary,
      context: project.contribution,
      features:
        project.title === "AlterDo"
          ? [
              "Role-based people, finance, and project workflows",
              "Attendance, leave, payroll, and task tracking",
              "Support tickets and real-time notifications",
            ]
          : [
              "In-seat food ordering for cinema guests",
              "Real-time order status updates",
              "Payment-ready checkout across web and mobile",
            ],
      tech: project.tech,
      image: project.image,
      live: project.live,
      theme: project.title === "AlterDo" ? "alterdo" : "snack",
    })),
];
