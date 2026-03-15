export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://heejaebyun-portfolio.vercel.app/sitemap.xml",
  };
}
