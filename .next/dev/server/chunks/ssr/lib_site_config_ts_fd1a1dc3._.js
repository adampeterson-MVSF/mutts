module.exports = [
"[project]/lib/site.config.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/site.config.ts - Centralized site configuration
__turbopack_context__.s([
    "siteConfig",
    ()=>siteConfig
]);
const siteConfig = {
    // General donation URL used across the application
    donationUrl: process.env.NEXT_PUBLIC_DONATION_URL || "#",
    // Contact information
    contact: {
        email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@seniordogrescue.org"
    },
    // Site metadata
    name: "Senior Dog Rescue",
    description: "A dog rescue management platform built with modern web technologies"
};
}),
];

//# sourceMappingURL=lib_site_config_ts_fd1a1dc3._.js.map