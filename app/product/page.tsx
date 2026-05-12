const features = [
  {
    title: "Agent-led daily missions",
    body: "A Principal Agent coordinates teacher agents across Math, ELA, Coding/AI, Science, History, and World Affairs."
  },
  {
    title: "Parent-controlled rewards",
    body: "Children earn XP, mastery stars, and camp coins, while parents approve screen time, outings, food treats, and family activities."
  },
  {
    title: "Adaptive Grade 6 launch",
    body: "A diagnostic quest creates readiness summaries, support priorities, and support/standard/stretch mission tuning."
  },
  {
    title: "Safe learning squads",
    body: "Children can suggest friends, but parents approve invitations, links, visibility, and sharing defaults."
  }
];

const packageItems = [
  "8-week Grade 6 summer learning plan",
  "Optional Health, Christian Leadership, Financial Literacy, and Media Literacy tracks",
  "Daily movement and wellness prompts",
  "Teacher-share reports and project evidence",
  "Desktop, iPad, and Android tablet PWA shell",
  "OpenClaw/ClawHub package draft"
];

export default function ProductPage() {
  return (
    <main className="product-page">
      <section className="product-hero">
        <div className="product-hero-copy">
          <p className="eyebrow">Dr. Spark Academy</p>
          <h1>Summer learning that feels like a mission, not a worksheet.</h1>
          <p>
            A parent-supervised multi-agent program that keeps Grade 6 students engaged with daily lessons,
            adaptive teacher guidance, movement prompts, friend projects, and parent-approved rewards.
          </p>
          <div className="product-actions">
            <a href="/">Open MVP app</a>
            <a href="#clawhub">View package</a>
          </div>
        </div>
        <div className="product-preview" aria-label="Product preview">
          <div className="preview-top">
            <span>Principal Agent</span>
            <strong>Week 1 / Explorer Mode</strong>
          </div>
          <div className="preview-grid">
            <article>
              <strong>Math</strong>
              <span>Support mode</span>
            </article>
            <article>
              <strong>Writing</strong>
              <span>Standard mode</span>
            </article>
            <article>
              <strong>Coding/AI</strong>
              <span>Stretch mode</span>
            </article>
          </div>
          <div className="preview-bar">
            <span style={{ width: "62%" }} />
          </div>
          <p>Rewards pending parent approval</p>
        </div>
      </section>

      <section className="product-band">
        <div>
          <strong>Built for parents</strong>
          <span>Approvals, reports, rewards, and sharing stay parent-controlled.</span>
        </div>
        <div>
          <strong>Built for children</strong>
          <span>Daily missions, coins, projects, and squads make summer practice feel alive.</span>
        </div>
        <div>
          <strong>Built for distribution</strong>
          <span>PWA-ready for website sales and packaged for OpenClaw/ClawHub workflows.</span>
        </div>
      </section>

      <section className="product-section">
        <div>
          <p className="eyebrow">MVP Features</p>
          <h2>What the current build can demonstrate</h2>
        </div>
        <div className="feature-list">
          {features.map((feature) => (
            <article key={feature.title}>
              <strong>{feature.title}</strong>
              <span>{feature.body}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="clawhub" className="product-section product-package">
        <div>
          <p className="eyebrow">ClawHub / OpenClaw</p>
          <h2>Package draft included in the repo</h2>
          <p>
            The `openclaw/` folder now includes listing metadata, agent definitions, Grade 6 curriculum,
            safety rules, rewards, and teacher-share templates.
          </p>
        </div>
        <ul>
          {packageItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
