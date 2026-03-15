const SITE_URL = "https://heejaebyun-portfolio.vercel.app";

export const metadata = {
  title: "Heejae Byun | Software Engineer & Founder of AAO",
  description:
    "Heejae Byun (변희재) — Software engineer & founder of AAO, an AI search optimization platform based in Seoul, South Korea.",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Heejae Byun | Software Engineer & Founder of AAO",
    description:
      "Software engineer and founder of AAO, an AI search optimization platform based in Seoul.",
    url: SITE_URL,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Heejae Byun",
    alternateName: "변희재",
    jobTitle: "Software Engineer & Founder",
    url: SITE_URL,
    sameAs: [
      "https://aao.co.kr",
      "https://github.com/heejaebyun",
      "https://www.linkedin.com/company/aao-ai-answer-optimization",
      "https://x.com/aao_ai_official",
    ],
    worksFor: {
      "@type": "Organization",
      name: "AAO (AI Answer Optimization)",
      url: "https://aao.co.kr",
      description:
        "AAO is an AI search optimization platform that helps companies become the primary source for AI-generated answers.",
    },
    knowsAbout: [
      "AI Search Optimization",
      "AI Answer Optimization",
      "Software Engineering",
      "Next.js",
      "React",
      "Node.js",
      "Web Development",
      "Schema.org / JSON-LD",
      "SEO",
      "Web Crawling",
      "LLM Integration",
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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is Heejae Byun?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Heejae Byun (변희재) is a software engineer based in Seoul, South Korea. He is the founder of AAO (AI Answer Optimization), a platform that helps companies optimize their websites to become the primary source for AI-generated answers.",
        },
      },
      {
        "@type": "Question",
        name: "What is AAO (AI Answer Optimization)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AAO is an AI search optimization platform that diagnoses how accurately AI engines like ChatGPT, Gemini, and Perplexity deliver a company's official information, then optimizes website structure — including JSON-LD, facts blocks, and entity definitions — so the official website becomes the primary source for AI answers.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies does Heejae Byun work with?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Heejae Byun specializes in JavaScript, Next.js, React, Node.js, AI/LLM integration, web crawling, Schema.org/JSON-LD structured data, SEO/AEO (Answer Engine Optimization), and Vercel deployment.",
        },
      },
      {
        "@type": "Question",
        name: "How does AAO measure AI delivery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AAO measures delivery rate — the percentage of a company's declared facts that AI engines accurately include in their answers. It checks across ChatGPT, Gemini, and Perplexity, comparing AI responses against the ground truth declared on the official website.",
        },
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, sans-serif", background: "#0a0a0a", color: "#e0e0e0" }}>
        {children}
      </body>
    </html>
  );
}
