// Content builder — renders all three variants into their frames.
// Shared data below, variant-specific templates follow.

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
    { n: "Case 01", use: "使用想定：ECサイト", name: "美容グッズのメイン画像" },
    { n: "Case 02", use: "使用想定：製品パッケージ", name: "シェーバーのパッケージ" },
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

// ═════ VARIANT A ═════
function renderA(root) {
  const d = DATA;
  root.innerHTML = `
    <div class="topnav">
      <div class="logo">
        <div class="logo-mark">L</div>
        <div class="logo-text">LOCALIZE<br/><span>JAPAN</span></div>
      </div>
      <div class="menu-btn"><i></i></div>
    </div>

    <div class="hero">
      <div class="hero-art"></div>
      <div class="hero-copy">
        <div class="kicker">その商品、</div>
        <h1><span class="mark">日本</span><br/>でのデザイン<br/>チカラ。</h1>
        <div class="sub">${d.hero.sub}</div>
      </div>
      <div class="hero-bottom">
        <span class="tag">${d.hero.under}</span>
        <button class="cta">${d.hero.cta} ${arrow}</button>
      </div>
    </div>

    <div class="sec">
      <div class="sec-label">Problem</div>
      <h2>輸入商品の販売、<br/>こんな課題ありませんか？</h2>
      <div class="probs">
        ${d.problems.map(p => `<div class="prob"><div class="n">${p.n}</div><p>${p.t}</p></div>`).join("")}
      </div>
      <div class="solve"><span class="tag">SOLUTION</span><h3>LOCALIZE JAPAN<em>が解決</em><br/>のお手伝いをします</h3></div>
    </div>

    <div class="sec" style="background:#fff">
      <div class="sec-label">What we offer</div>
      <h2>LOCALIZE JAPANが<br/>できること</h2>
      <div class="grid4">
        ${d.capabilities.slice(0,3).map(c => `
          <div class="cell"><div class="ico">${c.c[0]||"+"}</div><h4>${c.t.replace(/\n/g,"<br/>")}</h4></div>
        `).join("")}
        <div class="cell wide"><h4>and more...</h4></div>
      </div>
    </div>

    <div class="sec">
      <div class="sec-label">3 Key points</div>
      <h2>日本市場で重要な<br/>3つのポイント</h2>
      <div class="points">
        ${d.points.map((p,i) => `
          <div class="pt ${['cyan','gold','rose'][i]}">
            <div class="idx">${p.big}</div>
            <span class="tag">${p.tag}</span>
            <h4>${p.h}</h4>
            <p>${p.p}</p>
          </div>`).join("")}
      </div>
    </div>

    <div class="sec" style="background:#fff">
      <div class="sec-label">Before / After</div>
      <h2>Before / After</h2>
      <div class="body" style="margin-top:-16px;margin-bottom:8px">スライドを移動してBeforeとリデザインしたAfterの比較をご覧いただけます。</div>
      <div class="ba">
        ${d.cases.map(c => `
          <div class="case">
            <div class="hd"><div class="label">${c.n}</div><div class="use">${c.use}</div></div>
            <div class="pair">
              <div class="col before"><div class="tag">BEFORE</div><div class="ph">original<br/>reference<br/>image</div><small>${c.name}</small></div>
              <div class="col after"><div class="tag">AFTER</div><div class="ph">redesigned<br/>image</div><small>${c.name}</small></div>
            </div>
          </div>`).join("")}
      </div>
    </div>

    <div class="sec">
      <div class="sec-label">Process</div>
      <h2>制作の流れ</h2>
      <div class="flow">
        ${d.flow.map(s => `
          <div class="step"><div class="num">${s.n}</div>
            <div><h5>${s.h}</h5><p>${s.p}</p></div>
          </div>`).join("")}
      </div>
    </div>

    <div class="sec" style="background:#fff">
      <div class="sec-label">About</div>
      <h2>ABOUT<br/>LOCALIZE JAPAN</h2>
      <div class="about">
        <h3>日本市場を知るデザイナー集団</h3>
        <p class="body">${d.about.lead}</p>
        <div class="services">
          ${d.about.services.map(s => `<div class="srv"><div class="dot"></div>${s.n}</div>`).join("")}
        </div>
      </div>
    </div>

    <div class="final">
      <h3>まずは無料相談</h3>
      <p>${d.final.p}</p>
      <button class="gform">${d.final.btn} ${arrow}</button>
    </div>
  `;
}

// ═════ VARIANT B ═════
function renderB(root) {
  const d = DATA;
  root.innerHTML = `
    <div class="topnav">
      <div class="logo">
        <div class="logo-mark">L</div>
        <div class="logo-text">LOCALIZE<br/><span>JAPAN</span></div>
      </div>
      <div class="menu-btn"><i></i></div>
    </div>

    <div class="hero">
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

    <div class="sec">
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

    <div class="sec">
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

    <div class="sec">
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

    <div class="sec">
      <div class="idx-line"><span class="num">04</span><span class="eye">Before / After</span><span class="rule"></span></div>
      <h2>Before / After</h2>
      <div class="ba2">
        ${d.cases.map(c => `
          <div class="case">
            <div class="hd"><div class="num">${c.n}</div><div class="use">${c.use}</div></div>
            <div class="pair">
              <div class="col"><div class="tag">BEFORE</div><div class="ph">original<br/>image</div><div class="name">${c.name}</div></div>
              <div class="col"><div class="tag after" style="color:#B28844">AFTER</div><div class="ph after">redesigned</div><div class="name">${c.name}</div></div>
            </div>
          </div>`).join("")}
      </div>
    </div>

    <div class="sec">
      <div class="idx-line"><span class="num">05</span><span class="eye">Process</span><span class="rule"></span></div>
      <h2>制作の流れ</h2>
      <div class="flow2">
        ${d.flow.map(s => `
          <div class="st"><div class="dot"></div>
            <div class="no">${s.n} · ${s.t}</div><h5>${s.h}</h5><p>${s.p}</p>
          </div>`).join("")}
      </div>
    </div>

    <div class="sec about2">
      <div class="idx-line"><span class="num">06</span><span class="eye">About</span><span class="rule"></span></div>
      <h2>ABOUT<br/>LOCALIZE JAPAN</h2>
      <p class="bio">${d.about.lead}</p>
      <div class="sv">
        ${d.about.services.map(s => `<div class="s"><div class="nm">${s.n}</div><div class="cd">${s.cd}</div></div>`).join("")}
      </div>
    </div>

    <div class="final2">
      <div class="eye">Contact</div>
      <h3>まずは<br/>無料相談から。</h3>
      <p>現状のLPやパッケージに感じている違和感を、お気軽にお聞かせください。</p>
      <a class="btn" href="#">Google フォームへ ${arrow}</a>
    </div>
  `;
}

// ═════ VARIANT C ═════
function renderC(root) {
  const d = DATA;
  root.innerHTML = `
    <div class="topnav">
      <div class="logo">
        <div class="logo-mark">L</div>
        <div class="logo-text">LOCALIZE<br/><span>JAPAN</span></div>
      </div>
      <div class="menu-btn"><i></i></div>
    </div>

    <div class="hero">
      <div class="label">Est. 2024 <span>·</span> Tokyo</div>
      <h1>その商品、<br/><em>日本</em>で、<br/>デザインの<br/>チカラ。</h1>
      <div class="sub">海外の優れたプロダクトを、日本の購買文脈に翻訳する。</div>
      <div class="hero-media">
        <img src="assets/img_japanize.png" alt="" />
        <div class="overlay"></div>
        <div class="stamp"><div><b>LJ</b>LOCALIZE<br/>JAPAN</div></div>
      </div>
      <div class="hero-stats">
        <div class="st"><div class="v">LP</div><div class="l">ECサイト</div></div>
        <div class="st"><div class="v">Package</div><div class="l">製品パッケージ</div></div>
        <div class="st"><div class="v">Brand</div><div class="l">OEM / D2C</div></div>
      </div>
    </div>

    <div class="sec">
      <div class="eye-c"><span class="sw"></span>I. Problem</div>
      <h2 class="cc">輸入商品の販売、<br/>こんな課題ありませんか。</h2>
      <div class="prob-c">
        ${d.problems.map(p => `
          <div class="r"><div class="n">${p.n}</div><p>${p.t}</p><div class="mt">${p.c}</div></div>`).join("")}
      </div>
      <div class="resolved"><span class="key">SOLUTION</span>
        <p>LOCALIZE JAPANが、<br/><strong>その違和感</strong>を<br/>解決します。</p>
      </div>
    </div>

    <div class="sec">
      <div class="eye-c"><span class="sw"></span>II. What we offer</div>
      <h2 class="cc">LOCALIZE JAPANが<br/>できること</h2>
      <div class="cap-c">
        ${d.capabilities.slice(0,3).map(c => `
          <div class="cl"><div class="gl">${c.t.replace(/\n/g,"<br/>")}</div><div class="sub">${c.c}</div></div>`).join("")}
        <div class="cl wide"><div class="gl">and more...</div></div>
      </div>
    </div>

    <div class="sec">
      <div class="eye-c"><span class="sw"></span>III. Key points</div>
      <h2 class="cc">日本市場で重要な、<br/>3つのポイント。</h2>
      <div class="pts-c">
        ${d.points.map((p,i) => `
          <div class="pt-c"><div class="ro">${["I.","II.","III."][i]}<b>${p.big}</b></div>
            <div><h4>${p.h}</h4><p>${p.p}</p></div>
          </div>`).join("")}
      </div>
    </div>

    <div class="sec">
      <div class="eye-c"><span class="sw"></span>IV. Before / After</div>
      <h2 class="cc">Before / After</h2>
      <div class="ba-c">
        ${d.cases.map(c => `
          <div class="case">
            <div class="hd"><div class="n">${c.n}</div><div class="u">${c.use}</div></div>
            <div class="pair">
              <div class="col"><div class="tg">BEFORE</div><div class="ph">original</div><div class="nm">${c.name}</div></div>
              <div class="col after"><div class="tg">AFTER</div><div class="ph">redesigned</div><div class="nm">${c.name}</div></div>
            </div>
          </div>`).join("")}
      </div>
    </div>

    <div class="sec">
      <div class="eye-c"><span class="sw"></span>V. Process</div>
      <h2 class="cc">制作の流れ</h2>
      <div class="flow-c">
        ${d.flow.map((s,i,arr) => `
          <div class="sc"><div class="ri">${["I.","II.","III.","IV."][i]}</div>
            <div><h5>${s.h}</h5><div class="tm">${s.t}</div></div>
            <div class="arr">${i<arr.length-1?"↓":"✓"}</div>
          </div>`).join("")}
      </div>
    </div>

    <div class="about-c">
      <div class="ornament">LJ</div>
      <div class="eye-c"><span class="sw"></span>VI. About</div>
      <h2 class="cc">ABOUT<br/>LOCALIZE JAPAN</h2>
      <p class="bio">${d.about.lead}</p>
      <div class="services">
        ${d.about.services.map(s => `<div class="s"><div class="c">${s.cd}</div><div class="n">${s.n}</div></div>`).join("")}
      </div>
    </div>

    <div class="final-c">
      <div class="eye-c"><span class="sw"></span>Contact</div>
      <h3>まずは<br/>無料相談から</h3>
      <p>現状のLP・パッケージに感じている違和感を、お気軽にお聞かせください。</p>
      <a class="btn" href="#">Google フォームへ ${arrow}</a>
      <div class="footnote">LOCALIZE JAPAN · Tokyo</div>
    </div>
  `;
}

// mount
renderA(document.querySelector(".frame.vA"));
renderB(document.querySelector(".frame.vB"));
renderC(document.querySelector(".frame.vC"));
