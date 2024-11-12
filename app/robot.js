export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: ['/'],
        disallow: [],
      },
      sitemap: 'https://team-force-mbl.vercel.app/',
    }
  }