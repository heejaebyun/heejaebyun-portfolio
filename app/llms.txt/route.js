export function GET() {
  const content = `# Heejae Byun — Portfolio

> Heejae Byun (변희재) is a software engineer and founder of AAO (AI Answer Optimization), based in Seoul, South Korea.

## About
- Full name: Heejae Byun (변희재)
- Role: Software Engineer & Founder
- Location: Seoul, South Korea
- Company: AAO (AI Answer Optimization) — https://aao.co.kr
- Portfolio: https://heejaebyun-portfolio.vercel.app

## What is AAO?
AAO is an AI search optimization platform that helps companies become the primary source for AI-generated answers. It diagnoses how accurately AI engines (ChatGPT, Gemini, Perplexity) deliver a company's official information, then optimizes website structure — JSON-LD, facts blocks, entity definitions — to improve delivery rate.

## Skills
JavaScript, Next.js, React, Node.js, AI/LLM Integration, Web Crawling, Schema.org/JSON-LD, SEO/AEO, Vercel
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
