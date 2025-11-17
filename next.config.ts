import type { NextConfig } from "next";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseHostname = (() => {
  if (!supabaseUrl) return null;
  try {
    return new URL(supabaseUrl).hostname;
  } catch {
    return null;
  }
})();

/**
 * Image Source Allowlist Configuration
 *
 * This configuration controls which external domains can serve images in Next.js Image component.
 * Only explicitly allowed domains can be used to prevent malicious image loading attacks.
 *
 * Guidelines for adding new domains:
 * 1. Only add domains that are actually used in the application
 * 2. Prefer specific subdomains over wildcards when possible
 * 3. Document the purpose and usage of each domain
 * 4. Test image loading after adding new domains
 * 5. Consider proxying external images through your storage domain for additional control
 *
 * To add a new domain:
 * 1. Add it to the appropriate section below with a comment explaining its purpose
 * 2. Update this documentation
 * 3. Test that images load correctly from the new domain
 */
const basePatterns = [
  // Development and testing images
  {
    protocol: 'https' as const,
    hostname: 'via.placeholder.com', // Used for placeholder images in development
  },
  {
    protocol: 'https' as const,
    hostname: 'picsum.photos', // Used for demo/test images
  },


  // Pet adoption platforms - exact domains only (no wildcards)
  // Petfinder uses CloudFront CDN with specific bucket hostname
  {
    protocol: 'https' as const,
    hostname: 'dl5zpyw5k3jeb.cloudfront.net', // Petfinder CDN - specific bucket hostname
  },
  // Adopt-a-Pet uses dedicated assets subdomain
  {
    protocol: 'https' as const,
    hostname: 'assets.adoptapet.com', // Adopt-a-Pet image assets - exact subdomain only
  },
  // Facebook domains for pet rescue organizations (region-specific patterns)
  {
    protocol: 'https' as const,
    hostname: 'scontent.xx.fbcdn.net', // Facebook content delivery network
  },
  {
    protocol: 'https' as const,
    hostname: 'external.xx.fbcdn.net', // Facebook external content delivery network
  },
  // Muttville rescue organization - discovered from photo URL analysis
  {
    protocol: 'https' as const,
    hostname: 'muttville.org', // Muttville rescue organization website and images
  },

  // Additional hosts discovered by scripts/fix-photo-urls.ts
  // Run the script to generate photo-url-hosts-{jobId}.txt, then add discovered hosts here
  // Example of how to add discovered hosts:
  // {
  //   protocol: 'https' as const,
  //   hostname: 'example-pet-rescue.org', // Add discovered hostnames here
  // },
];

const supabasePattern = supabaseHostname
  ? [{
      protocol: 'https' as const,
      hostname: supabaseHostname,
      pathname: '/storage/v1/object/public/**',
    }]
  : [];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [...basePatterns, ...supabasePattern],
    minimumCacheTTL: 60, // Cache images for at least 60 seconds
    // Enable modern image formats for better performance
    formats: ['image/avif', 'image/webp'],
    // Custom image loader with telemetry for domain validation
    loaderFile: './lib/image-loader.ts',
  },
  async redirects() {
    return [
      {
        source: '/apply',
        destination: '/apply/foster',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
