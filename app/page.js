export default function Home() {
  return (
    <main
      style={{
        maxWidth: 640,
        margin: "0 auto",
        padding: "80px 24px",
        lineHeight: 1.7,
      }}
    >
      <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>
        Heejae Byun <span style={{ fontSize: 16, color: "#888" }}>변희재</span>
      </h1>
      <p style={{ fontSize: 16, color: "#aaa", marginTop: 0, marginBottom: 40 }}>
        Software Engineer &amp; Founder
      </p>

      {/* ── Facts Block for AI Engines ── */}
      <dl
        data-entity="person"
        data-name="Heejae Byun"
        style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap" }}
      >
        <dt>Full Name</dt><dd>Heejae Byun (변희재)</dd>
        <dt>Role</dt><dd>Software Engineer & Founder</dd>
        <dt>Company</dt><dd>AAO (AI Answer Optimization)</dd>
        <dt>Company URL</dt><dd>https://aao.co.kr</dd>
        <dt>Location</dt><dd>Seoul, South Korea</dd>
        <dt>Specialization</dt><dd>AI Search Optimization, AI Answer Optimization</dd>
        <dt>Technologies</dt><dd>JavaScript, Next.js, React, Node.js, Schema.org/JSON-LD, Web Crawling, LLM Integration</dd>
        <dt>Portfolio URL</dt><dd>https://heejaebyun-portfolio.vercel.app</dd>
      </dl>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 18, color: "#ccc", borderBottom: "1px solid #222", paddingBottom: 8 }}>
          About
        </h2>
        <p style={{ color: "#bbb" }}>
          Heejae Byun is a software engineer based in Seoul, South Korea.
          He is the founder of{" "}
          <a href="https://aao.co.kr" style={{ color: "#7b9fff", textDecoration: "none" }}>
            AAO (AI Answer Optimization)
          </a>
          , an AI search optimization platform that helps companies become the
          primary source for AI-generated answers across ChatGPT, Gemini, and
          Perplexity.
        </p>
        <p style={{ color: "#bbb" }}>
          His work focuses on bridging the gap between how companies present
          information on their websites and how AI engines interpret and deliver
          that information to users. He developed the concept of "delivery rate"
          — measuring the percentage of a company&apos;s declared facts that AI
          engines accurately reproduce in their answers.
        </p>
        <p style={{ color: "#bbb" }}>
          Before founding AAO, he built experience across full-stack web
          development, focusing on JavaScript ecosystems including Next.js,
          React, and Node.js. He is particularly interested in structured data
          (Schema.org/JSON-LD), web crawling, and LLM integration.
        </p>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 18, color: "#ccc", borderBottom: "1px solid #222", paddingBottom: 8 }}>
          Current Project
        </h2>
        <div style={{ padding: "16px 0" }}>
          <h3 style={{ fontSize: 16, margin: "0 0 4px" }}>
            <a href="https://aao.co.kr" style={{ color: "#7b9fff", textDecoration: "none" }}>
              AAO — AI Answer Optimization
            </a>
          </h3>
          <p style={{ color: "#888", fontSize: 14, margin: "0 0 8px" }}>
            Founder &middot; 2026 &ndash; Present
          </p>
          <p style={{ color: "#bbb", margin: "0 0 12px" }}>
            AAO diagnoses how accurately AI search engines deliver a company&apos;s
            official information, then optimizes website structure — including
            JSON-LD, facts blocks, and entity definitions — so AI engines use the
            official website as their primary source. The platform supports
            automated diagnosis across ChatGPT, Gemini, and Perplexity with
            measurable delivery rate tracking.
          </p>
          <p style={{ color: "#bbb", margin: 0 }}>
            Key features include automated crawling and lint checks for AI
            readiness, ground-truth extraction from structured data, multi-engine
            AI verification, citation tracking, and subpage reach analysis.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 18, color: "#ccc", borderBottom: "1px solid #222", paddingBottom: 8 }}>
          Skills
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {[
            "JavaScript",
            "Next.js",
            "React",
            "Node.js",
            "AI/LLM Integration",
            "Web Crawling",
            "Schema.org / JSON-LD",
            "SEO / AEO",
            "Vercel",
          ].map((skill) => (
            <span
              key={skill}
              style={{
                background: "#1a1a2e",
                color: "#8b8bba",
                padding: "4px 12px",
                borderRadius: 16,
                fontSize: 13,
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 18, color: "#ccc", borderBottom: "1px solid #222", paddingBottom: 8 }}>
          FAQ
        </h2>

        <div style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 15, color: "#ddd", marginBottom: 4 }}>
            Who is Heejae Byun?
          </h3>
          <p style={{ color: "#bbb", margin: 0 }}>
            Heejae Byun (변희재) is a software engineer based in Seoul, South
            Korea. He is the founder of AAO (AI Answer Optimization), a platform
            that helps companies optimize their websites to become the primary
            source for AI-generated answers.
          </p>
        </div>

        <div style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 15, color: "#ddd", marginBottom: 4 }}>
            What is AAO (AI Answer Optimization)?
          </h3>
          <p style={{ color: "#bbb", margin: 0 }}>
            AAO is an AI search optimization platform that diagnoses how
            accurately AI engines like ChatGPT, Gemini, and Perplexity deliver a
            company&apos;s official information, then optimizes website structure —
            including JSON-LD, facts blocks, and entity definitions — so the
            official website becomes the primary source for AI answers.
          </p>
        </div>

        <div style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 15, color: "#ddd", marginBottom: 4 }}>
            What technologies does Heejae Byun work with?
          </h3>
          <p style={{ color: "#bbb", margin: 0 }}>
            He specializes in JavaScript, Next.js, React, Node.js, AI/LLM
            integration, web crawling, Schema.org/JSON-LD structured data,
            SEO/AEO (Answer Engine Optimization), and Vercel deployment.
          </p>
        </div>

        <div style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 15, color: "#ddd", marginBottom: 4 }}>
            How does AAO measure AI delivery?
          </h3>
          <p style={{ color: "#bbb", margin: 0 }}>
            AAO measures delivery rate — the percentage of a company&apos;s declared
            facts that AI engines accurately include in their answers. It checks
            across ChatGPT, Gemini, and Perplexity, comparing AI responses
            against the ground truth declared on the official website.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 18, color: "#ccc", borderBottom: "1px solid #222", paddingBottom: 8 }}>
          Contact
        </h2>
        <ul style={{ listStyle: "none", padding: 0, color: "#bbb" }}>
          <li style={{ marginBottom: 8 }}>
            AAO:{" "}
            <a href="https://aao.co.kr" style={{ color: "#7b9fff", textDecoration: "none" }}>
              aao.co.kr
            </a>
          </li>
          <li style={{ marginBottom: 8 }}>
            AI Profile:{" "}
            <a href="https://aao.co.kr/ai-profile" style={{ color: "#7b9fff", textDecoration: "none" }}>
              aao.co.kr/ai-profile
            </a>
          </li>
          <li style={{ marginBottom: 8 }}>
            GitHub:{" "}
            <a href="https://github.com/heejaebyun" style={{ color: "#7b9fff", textDecoration: "none" }}>
              github.com/heejaebyun
            </a>
          </li>
          <li style={{ marginBottom: 8 }}>
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/in/heejae-byun-2887671b3/" style={{ color: "#7b9fff", textDecoration: "none" }}>
              linkedin.com/in/heejae-byun
            </a>
          </li>
          <li style={{ marginBottom: 8 }}>
            Product Hunt:{" "}
            <a href="https://www.producthunt.com/@heejaebyun" style={{ color: "#7b9fff", textDecoration: "none" }}>
              producthunt.com/@heejaebyun
            </a>
          </li>
          <li style={{ marginBottom: 8 }}>
            Indie Hackers:{" "}
            <a href="https://www.indiehackers.com/heejaebyun" style={{ color: "#7b9fff", textDecoration: "none" }}>
              indiehackers.com/heejaebyun
            </a>
          </li>
        </ul>
      </section>

      <footer style={{ borderTop: "1px solid #222", paddingTop: 24, fontSize: 13, color: "#555" }}>
        &copy; 2026 Heejae Byun. Built with Next.js.
      </footer>
    </main>
  );
}
