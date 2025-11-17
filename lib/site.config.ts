// lib/site.config.ts - Centralized site configuration

export const siteConfig = {
  // General donation URL used across the application
  donationUrl: process.env.NEXT_PUBLIC_DONATION_URL || "#",

  // Contact information
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@seniordogrescue.org",
  },

  // Site metadata
  name: "Senior Dog Rescue",
  description: "A dog rescue management platform built with modern web technologies",
} as const;
