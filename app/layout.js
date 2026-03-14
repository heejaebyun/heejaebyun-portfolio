export const metadata = {
  title: "Heejae Byun | Software Engineer & Founder",
  description:
    "Heejae Byun is a software engineer and founder of AAO (AI Answer Optimization), an AI search optimization platform based in Seoul, South Korea.",
  openGraph: {
    title: "Heejae Byun | Software Engineer & Founder",
    description:
      "Software engineer and founder of AAO, an AI search optimization platform.",
    url: "https://heejaebyun.vercel.app",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Heejae Byun",
    alternateName: "변희재",
    jobTitle: "Software Engineer & Founder",
    url: "https://heejaebyun.vercel.app",
    sameAs: [],
    worksFor: {
      "@type": "Organization",
      name: "AAO (AI Answer Optimization)",
      url: "https://aao.co.kr",
      description:
        "AAO is an AI search optimization platform that helps companies become the primary source for AI-generated answers.",
    },
    knowsAbout: [
      "AI Search Optimization",
      "Software Engineering",
      "Next.js",
      "Web Development",
      "Search Engine Optimization",
      "AI Answer Optimization",
    ],
    nationality: {
      "@type": "Country",
      name: "South Korea",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Seoul",
      addressCountry: "KR",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, sans-serif", background: "#0a0a0a", color: "#e0e0e0" }}>
        {children}
      </body>
    </html>
  );
}
