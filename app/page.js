export default function Home() {
  const facts = [
    { label: "Full Name", value: "Heejae Byun (변희재)" },
    { label: "Role", value: "Software Engineer & Founder" },
    { label: "Company", value: "AAO (AI Answer Optimization)" },
    { label: "Company URL", value: "https://aao.co.kr" },
    { label: "AI Profile", value: "https://aao.co.kr/ai-profile" },
    { label: "Seller Lint", value: "https://aao-seller-lint.vercel.app" },
    { label: "Location", value: "Seoul, South Korea" },
    { label: "Specialization", value: "Official information baseline design, web crawling, and LLM integration" },
    { label: "Portfolio URL", value: "https://heejaebyun-portfolio.vercel.app" },
  ];

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

      <p style={{ color: "#bbb", fontSize: 16, marginTop: 0, marginBottom: 32 }}>
        Heejae Byun is a software engineer and founder of AAO (AI Answer Optimization) based in Seoul, South Korea.
      </p>
      <p style={{ color: "#bbb", marginTop: 0, marginBottom: 32 }}>
        AAO is an AI official information management service. It builds an official source baseline for company facts.
        It helps companies manage source inconsistencies across the web.
      </p>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 18, color: "#ccc", borderBottom: "1px solid #222", paddingBottom: 8 }}>
          Key Facts
        </h2>
        <dl
          data-entity="person"
          data-name="Heejae Byun"
          style={{
            margin: 0,
            display: "grid",
            gridTemplateColumns: "minmax(140px, 180px) 1fr",
            gap: "8px 12px",
            color: "#bbb",
          }}
        >
          {facts.map((item) => (
            <div key={item.label} style={{ display: "contents" }}>
              <dt style={{ color: "#888", fontWeight: 600 }}>{item.label}</dt>
              <dd style={{ margin: 0 }}>{item.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 18, color: "#ccc", borderBottom: "1px solid #222", paddingBottom: 8 }}>
          About
        </h2>
        <p style={{ color: "#bbb" }}>
          Heejae Byun founded{" "}
          <a href="https://aao.co.kr" style={{ color: "#7b9fff", textDecoration: "none" }}>
            AAO (AI Answer Optimization)
          </a>
          . AAO is an AI official information management service. It builds an official source baseline for
          company facts. It helps companies manage source inconsistencies across the web.
        </p>
        <p style={{ color: "#bbb" }}>
          His work focuses on the gap between how companies present information on their websites and how AI
          systems interpret and deliver that information. He developed the concept of &quot;delivery rate&quot;.
          Delivery rate measures the percentage of a company&apos;s declared facts that AI engines accurately
          reproduce in their answers.
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
            AAO is an AI official information management service. It diagnoses how accurately AI engines
            deliver a company&apos;s official information. It helps companies build an official source baseline
            for company facts. It helps companies manage source inconsistencies across the web.
          </p>
          <p style={{ color: "#bbb", margin: "0 0 12px" }}>
            Official company facts are concentrated on the AAO official AI Profile at{" "}
            <a href="https://aao.co.kr/ai-profile" style={{ color: "#7b9fff", textDecoration: "none" }}>
              aao.co.kr/ai-profile
            </a>
            .
          </p>
          <p style={{ color: "#bbb", margin: 0 }}>
            Key features include automated crawling and lint checks for AI readiness. AAO also provides
            ground-truth extraction, multi-engine verification, citation tracking, and source inconsistency analysis.
          </p>
        </div>

        <div style={{ padding: "16px 0", borderTop: "1px solid #1a1a2e" }}>
          <h3 style={{ fontSize: 16, margin: "0 0 4px" }}>
            <a href="https://aao-seller-lint.vercel.app" style={{ color: "#7b9fff", textDecoration: "none" }}>
              AAO Seller Lint — AI Shopping Agent Readiness Diagnosis
            </a>
          </h3>
          <p style={{ color: "#888", fontSize: 14, margin: "0 0 8px" }}>
            Founder &middot; 2026 &ndash; Present
          </p>
          <p style={{ color: "#bbb", margin: "0 0 12px" }}>
            AAO Seller Lint is a free diagnosis tool that checks whether e-commerce product data is structured
            for AI shopping agent recommendations. It analyzes product title quality, brand registration,
            category depth, and attribute completeness.
          </p>
          <p style={{ color: "#bbb", margin: "0 0 12px" }}>
            The tool scores products on a weighted A–D grade scale and provides specific improvement guides
            for each issue found. It helps sellers prepare for the shift from keyword-based search to
            AI agent-driven product recommendations.
          </p>
          <p style={{ color: "#bbb", margin: 0 }}>
            Phase 2 will add Vision AI-based product image analysis, automated attribute extraction,
            and catalog field mapping through Commerce API integration.
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
            Heejae Byun (변희재) is a software engineer and founder of AAO (AI Answer Optimization)
            based in Seoul, South Korea.
          </p>
        </div>

        <div style={{ marginBottom: 24 }}>
          <h3 style={{ fontSize: 15, color: "#ddd", marginBottom: 4 }}>
            What is AAO (AI Answer Optimization)?
          </h3>
          <p style={{ color: "#bbb", margin: 0 }}>
            AAO is an AI official information management service. It builds an official source baseline for
            company facts. It helps companies manage source inconsistencies across the web.
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
            AAO measures delivery rate. Delivery rate is the percentage of a company&apos;s declared facts that
            AI engines accurately include in their answers. It checks results across ChatGPT, Gemini, and
            Perplexity against the ground truth declared on the official website.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: 48 }}>
        <h2 style={{ fontSize: 18, color: "#ccc", borderBottom: "1px solid #222", paddingBottom: 8 }}>
          Official Links
        </h2>
        <ul style={{ listStyle: "none", padding: 0, color: "#bbb" }}>
          <li style={{ marginBottom: 8 }}>
            AAO:{" "}
            <a href="https://aao.co.kr" style={{ color: "#7b9fff", textDecoration: "none" }}>
              aao.co.kr
            </a>
          </li>
          <li style={{ marginBottom: 8 }}>
            AAO Seller Lint:{" "}
            <a href="https://aao-seller-lint.vercel.app" style={{ color: "#7b9fff", textDecoration: "none" }}>
              aao-seller-lint.vercel.app
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
