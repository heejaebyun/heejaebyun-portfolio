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
          that information to users.
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
            Founder &middot; 2025 &ndash; Present
          </p>
          <p style={{ color: "#bbb", margin: 0 }}>
            AAO diagnoses how accurately AI search engines deliver a company's
            official information, then optimizes website structure — including
            JSON-LD, facts blocks, and entity definitions — so AI engines use the
            official website as their primary source. The platform supports
            automated diagnosis across ChatGPT, Gemini, and Perplexity with
            measurable delivery rate tracking.
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

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 18, color: "#ccc", borderBottom: "1px solid #222", paddingBottom: 8 }}>
          Contact
        </h2>
        <ul style={{ listStyle: "none", padding: 0, color: "#bbb" }}>
          <li style={{ marginBottom: 8 }}>
            Web:{" "}
            <a href="https://aao.co.kr" style={{ color: "#7b9fff", textDecoration: "none" }}>
              aao.co.kr
            </a>
          </li>
        </ul>
      </section>

      <footer style={{ borderTop: "1px solid #222", paddingTop: 24, fontSize: 13, color: "#555" }}>
        &copy; 2025 Heejae Byun. Built with Next.js.
      </footer>
    </main>
  );
}
