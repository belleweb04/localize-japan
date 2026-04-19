// Content builder — Editorial Minimal (Variant B).
// Shared data below, template follows.

const DATA = {
  brand: { letter: "L", name: "LOCALIZE JAPAN", tag: "Design for Japan market" },
  hero: {
    kicker: "その商品、",
    title1: "日本",
    title2: "でのデザイン",
    title3: "チカラ",
    sub: "もっと深く売れます。",
    cta: "まずは無料相談",
    under: "私たちがご提供できること",
  },
  problems: [
    { n: "01", t: "パッケージやLPに違和感がある", c: "Visual" },
    { n: "02", t: "デザインを誰に頼めばいいか分からない", c: "Partner" },
    { n: "03", t: "安っぽく見えてしまう", c: "Quality" },
  ],
  capabilities: [
    { t: "LP構成の\n最適化", c: "Structure" },
    { t: "日本仕様の\nデザイン制作", c: "Visual" },
    { t: "商品訴求の\n再構築", c: "Message" },
    { t: "and more...", c: "" },
  ],
  points: [
    { big: "01", tag: "Structure", h: "理解しやすい構造", p: "購入者の視点で情報を整理し、迷わず商品価値が伝わる導線へ。" },
    { big: "02", tag: "Information", h: "納得できる情報設計", p: "不安を解消するデザインと、購入までスムーズに運ぶ構造で、今より売れる設計をご提案します。" },
    { big: "03", tag: "Copy", h: "訴求できる情報設計", p: "薬機法・景表法をクリアしたコピーライティングと、訴求が明確なレイアウトデザイン。" },
  ],
  cases: [
    { n: "Case 01", use: "使用想定：ECサイト", name: "美容グッズのメイン画像", beforeImg: "images/1_before.png", afterImg: "images/1_after.png" },
    { n: "Case 02", use: "使用想定：製品パッケージ", name: "シェーバーのパッケージ", beforeImg: "images/2_before.png", afterImg: "images/2_after.png" },
  ],
  flow: [
    { n: "01", h: "ヒアリング", p: "お悩みと目的、想定顧客を丁寧にお聞きします。", t: "Day 1" },
    { n: "02", h: "現状分析", p: "既存LP/パッケージを市場視点で分析・課題を整理。", t: "Day 2-3" },
    { n: "03", h: "改善提案", p: "レイアウト・コピー・導線を改善した案をご提示。", t: "Day 4-7" },
    { n: "04", h: "納品", p: "デザインデータ一式を整理してお納めします。", t: "Day 14" },
  ],
  about: {
    lead: "LOCALIZE JAPAN (ローカライズジャパン) は、海外商品を日本市場向けにローカライズするデザインスタジオです。パッケージからLPまで、日本の購買行動を理解したデザインを提供します。",
    services: [
      { cd: "01", n: "WEB" },
      { cd: "02", n: "Graphic" },
      { cd: "03", n: "Branding" },
      { cd: "04", n: "Package" },
    ],
  },
  final: { t: "まずは無料相談", p: "Googleフォームから1分。現状のLP・パッケージに感じている違和感を、まずお気軽にお聞かせください。", btn: "Google フォームへ" },
};

const arrow = `<svg width="18" height="10" viewBox="0 0 20 10" fill="none" stroke="currentColor" stroke-width="1.4" style="width:18px;height:10px;flex:none;display:inline-block"><path d="M0 5h18M13 0l5 5-5 5"/></svg>`;

function renderB(root) {
  const d = DATA;
  root.innerHTML = `
    <div class="topnav">
      <div class="logo">
        <div class="logo-mark">L</div>
        <div class="logo-text">LOCALIZE<br/><span>JAPAN</span></div>
      </div>
      <button type="button" class="menu-btn" id="sp-menu-open" aria-label="メニューを開く" aria-expanded="false" aria-controls="sp-menu"><i aria-hidden="true"></i></button>
    </div>

    <div class="hero" id="section-hero">
      <div class="label">Design studio — for Japan market</div>
      <h1>その商品、<br/><i>日本</i>で<br/>売れる形に。</h1>
      <p class="lead">海外商品を日本市場向けにローカライズする、パッケージとLPのデザインスタジオ。</p>
      <div class="hero-media">
        <img src="assets/img_japanize.png" alt="" />
        <div class="caption">LOCALIZE JAPAN / 2026</div>
      </div>
    </div>
    <div class="hero-meta">
      <div class="m"><div class="t">Services</div><div class="v">LP・Package・Brand</div></div>
      <div class="m"><div class="t">For</div><div class="v">Import / 越境EC / OEM</div></div>
    </div>

    <div class="sec" id="section-problem">
      <div class="idx-line"><span class="num">01</span><span class="eye">Problem</span><span class="rule"></span></div>
      <h2>輸入商品の販売、<br/>こんな課題ありませんか？</h2>
      <div class="prob-list">
        ${d.problems.map(p => `
          <div class="prob-row"><span class="n">${p.n}</span><span class="q">${p.t}</span><span class="c">${p.c}</span></div>`).join("")}
      </div>
      <div class="solve-note"><span class="tag">SOLUTION</span>
        <p>LOCALIZE JAPANが、<br/>その違和感を解決します。</p>
      </div>
    </div>

    <div class="sec" id="section-offer">
      <div class="idx-line"><span class="num">02</span><span class="eye">What we offer</span><span class="rule"></span></div>
      <h2>LOCALIZE JAPANが<br/>できること</h2>
      <div class="cap-grid">
        ${d.capabilities.slice(0,3).map((c,i) => `
          <div class="cap"><div class="no">${String(i+1).padStart(2,"0")}</div>
            <div><h4>${c.t.replace(/\n/g,"")}</h4><p>${c.c}. 日本の市場と購買行動を踏まえて設計します。</p></div>
          </div>`).join("")}
        <div class="cap"><div class="no">+</div>
          <div><h4>and more...</h4><p>お気軽にご相談ください。</p></div>
        </div>
      </div>
    </div>

    <div class="sec" id="section-points">
      <div class="idx-line"><span class="num">03</span><span class="eye">Key points</span><span class="rule"></span></div>
      <h2>日本市場で重要な<br/>3つのポイント</h2>
      <div class="pt-vert">
        ${d.points.map(p => `
          <div class="pt-item">
            <div class="big">${p.big}</div>
            <div><div class="sub">${p.tag}</div><h4>${p.h}</h4><p>${p.p}</p></div>
          </div>`).join("")}
      </div>
    </div>

    <div class="sec" id="section-before-after">
      <div class="idx-line"><span class="num">04</span><span class="eye">Before / After</span><span class="rule"></span></div>
      <h2>Before / After</h2>
      <div class="ba2">
        ${d.cases.map(c => `
          <div class="case">
            <div class="hd"><div class="num">${c.n}</div><div class="use">${c.use}</div></div>
            <div class="pair">
              <div class="col"><div class="tag">BEFORE</div><div class="ph"><img src="${c.beforeImg}" alt="Before：${c.name}" loading="lazy" decoding="async" /></div><div class="name">${c.name}</div></div>
              <div class="col"><div class="tag after" style="color:#B28844">AFTER</div><div class="ph after"><img src="${c.afterImg}" alt="After：${c.name}" loading="lazy" decoding="async" /></div><div class="name">${c.name}</div></div>
            </div>
          </div>`).join("")}
      </div>
    </div>

    <div class="sec" id="section-process">
      <div class="idx-line"><span class="num">05</span><span class="eye">Process</span><span class="rule"></span></div>
      <h2>制作の流れ</h2>
      <div class="flow2">
        ${d.flow.map(s => `
          <div class="st"><div class="dot"></div>
            <div class="no">${s.n} · ${s.t}</div><h5>${s.h}</h5><p>${s.p}</p>
          </div>`).join("")}
      </div>
    </div>

    <div class="sec about2" id="section-about">
      <div class="idx-line"><span class="num">06</span><span class="eye">About</span><span class="rule"></span></div>
      <h2>ABOUT<br/>LOCALIZE JAPAN</h2>
      <p class="bio">${d.about.lead}</p>
      <div class="sv">
        ${d.about.services.map(s => `<div class="s"><div class="nm">${s.n}</div><div class="cd">${s.cd}</div></div>`).join("")}
      </div>
    </div>

    <div class="final2" id="section-contact">
      <div class="eye">Contact</div>
      <h3>まずは<br/>無料相談から。</h3>
      <p>現状のLPやパッケージに感じている違和感を、お気軽にお聞かせください。</p>
      <a class="btn" href="https://docs.google.com/forms/d/e/1FAIpQLSet83cXVf85CCcbIxZLEURJTMlNQXcYnvpxYmJSG5jmqRI67w/viewform?usp=header" target="_blank" rel="noopener noreferrer">Google フォームへ ${arrow}</a>
    </div>
  `;
}

renderB(document.querySelector(".frame.vB"));
