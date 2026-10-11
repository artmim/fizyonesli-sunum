/* =========================================================
   FİZYONESLİ — etkileşim
   ========================================================= */
(() => {
  "use strict";

  // ---------------------------------------------------------
  // İLETİŞİM BİLGİLERİ — tek yerden düzenlenir
  // (instagram/araclar/render.js de bu nesneyi okur; biçimini koruyun)
  // ---------------------------------------------------------
  const SITE = {
    phone: { display: "0 (5XX) XXX XX XX", tel: "+905000000000" },
    whatsapp: "905000000000", // ülke koduyla, + ve boşluk olmadan
    instagram: "fizyonesli",
    address: { text: "Adres bilgisi eklenecek", maps: "https://www.google.com/maps/search/?api=1&query=Fizyonesli" },
    hours: [["Hafta içi", "09:00 – 19:00"], ["Cumartesi", "10:00 – 15:00"], ["Pazar", "Kapalı"]],
  };

  // ---------------------------------------------------------
  // İÇERİK VERİLERİ
  // ---------------------------------------------------------
  const SERVICES = {
    manuel: {
      title: "Manuel Terapi", icon: "ic-hand",
      lead: "Fizyoterapistin elleriyle uygulanan; eklemleri, kasları ve bağ dokusunu hedefleyen tekniklerden oluşan bir yaklaşımdır. Ağrıyı azaltmaya, hareket açıklığını artırmaya ve dokunun iyileşmesini desteklemeye yardımcı olur.",
      for: ["Boyun ve bel ağrıları", "Eklem kısıtlılıkları", "Kas spazmı ve tutulmalar", "Baş ağrısı ve çene problemleri"],
      session: "Değerlendirmenin ardından eklem mobilizasyonu, yumuşak doku ve miyofasyal gevşetme teknikleri uygulanır; seans egzersizlerle tamamlanır.",
    },
    pilates: {
      title: "Klinik Pilates", icon: "ic-pilates",
      lead: "Pilates prensiplerinin fizyoterapi bilgisiyle harmanlandığı, ihtiyacına göre uyarlanmış bir egzersiz yöntemidir. Derin kasları güçlendirmeyi, omurgayı desteklemeyi ve beden farkındalığını artırmayı hedefler.",
      for: ["Bel ve boyun ağrısı yaşayanlar", "Postür bozuklukları", "Masa başı çalışanlar", "Gebelik ve doğum sonrası"],
      session: "Mat ve alet egzersizleriyle yürütülür. Her hareket nefes, hizalanma ve kontrol üzerine kuruludur ve seviyene göre adım adım ilerletilir.",
    },
    skolyoz: {
      title: "Skolyoz & Schroth", icon: "ic-spine",
      lead: "Omurganın üç boyutlu eğriliğine özel geliştirilmiş Schroth yöntemi; düzeltici duruşlar, yönlendirilmiş nefes ve kas aktivasyonuyla duruşu iyileştirmeyi hedefler.",
      for: ["Çocuk ve ergen skolyozu", "Yetişkin skolyozu", "Kifoz (kambur duruş)", "Postür asimetrileri"],
      session: "Eğriliğin tipine göre sana özel düzeltici pozisyonlar öğretilir; evde düzenli uygulayabileceğin bir program oluşturulur.",
    },
    ortopedik: {
      title: "Ortopedik Rehabilitasyon", icon: "ic-bone",
      lead: "Ameliyat, kırık, bağ ya da tendon yaralanması sonrasında eklem hareketinin ve kas gücünün aşamalı olarak geri kazanılmasını hedefleyen planlı bir süreçtir.",
      for: ["Diz ve kalça protezi sonrası", "Ön çapraz bağ ameliyatı sonrası", "Kırık ve alçı sonrası", "Omuz ameliyatları sonrası"],
      session: "Hekiminin önerileri doğrultusunda, iyileşme evresine uygun egzersiz ve manuel tekniklerle ilerlenir; program düzenli olarak güncellenir.",
    },
    sporcu: {
      title: "Sporcu Rehabilitasyonu", icon: "ic-pulse",
      lead: "Sakatlık sonrasında sahaya güvenle dönmeni hedefler. Kuvvet, çeviklik, denge ve spora özgü hareketler aşamalı olarak çalışılır.",
      for: ["Bağ ve kas yaralanmaları", "Tendon problemleri", "Tekrarlayan sakatlıklar", "Sezon öncesi hazırlık"],
      session: "Hareket analiziyle başlanır; yük, hız ve karmaşıklık kademeli olarak artırılır.",
    },
    iglene: {
      title: "Kuru İğneleme", icon: "ic-needle",
      lead: "Kas içindeki hassas tetik noktalarına, ilaç içermeyen ince ve steril iğnelerle yapılan bir uygulamadır. Kas gerginliğini çözmeye ve ağrıyı azaltmaya yardımcı olur.",
      for: ["Tetik nokta ağrıları", "Boyun ve sırt gerginliği", "Gerilim tipi baş ağrısı", "Kronik kas ağrıları"],
      session: "Belirlenen noktalara tek kullanımlık steril iğnelerle kısa süreli uygulama yapılır; ardından germe ve hareket egzersizleriyle desteklenir.",
    },
    bant: {
      title: "Kinezyo Bantlama", icon: "ic-tape",
      lead: "Cilde uygulanan elastik bantlar, kas ve eklemleri desteklerken hareket özgürlüğünü korur. Ödemin ve ağrının azalmasına yardımcı olur.",
      for: ["Spor yaralanmaları", "Ödem ve şişlik", "Postür desteği", "Gebelikte bel desteği"],
      session: "Hedefe göre farklı gerginlik ve tekniklerle uygulanır. Bant birkaç gün üzerinde kalabilir ve günlük yaşamını kısıtlamaz.",
    },
    kadin: {
      title: "Kadın Sağlığı & Pelvik Taban", icon: "ic-lotus",
      lead: "Gebelik, doğum sonrası ve yaşamın farklı dönemlerinde pelvik taban kaslarının gücünü ve kontrolünü desteklemeye yönelik bir alandır. Süreç mahremiyete ve konfora özen gösterilerek yürütülür.",
      for: ["Gebelikte bel ve kalça ağrısı", "Doğum sonrası toparlanma", "Karın kası ayrılması (diastazis)", "İdrar kaçırma"],
      session: "Görüşme ve değerlendirmeyle başlar. Nefes, pelvik taban ve derin karın kası çalışmaları günlük yaşama uyarlanmış egzersizlerle desteklenir.",
    },
  };

  // x, y: logonun koordinat sistemindeki nokta (viewBox 1180 567 1780 1780)
  const REGIONS = [
    { id: "bas", name: "Baş & Çene", x: 2060, y: 1200,
      desc: "Boyun kaslarındaki gerginlik, diş sıkma ve uzun süre ekrana bakmak baş ve çene ağrılarının sık görülen kaynakları arasındadır.",
      cond: ["Gerilim tipi baş ağrısı", "Boyun kaynaklı baş ağrısı", "Çene eklemi (TME) problemleri", "Diş sıkma"],
      treat: ["Manuel terapi", "Miyofasyal gevşetme", "Postür eğitimi", "Nefes ve gevşeme teknikleri"], service: "manuel" },
    { id: "boyun", name: "Boyun", x: 2025, y: 1352,
      desc: "Masa başı çalışma, telefon kullanımı ve stres yükünü en çok boyna bindirir. Tutulma, uyuşma ve baş ağrısı bu yükün sinyalleri olabilir.",
      cond: ["Boyun fıtığı", "Boyun düzleşmesi", "Tutulma ve kas spazmı", "Kollara yayılan uyuşma"],
      treat: ["Manuel terapi", "Kuru iğneleme", "Derin boyun kası egzersizleri", "Ergonomi danışmanlığı"], service: "manuel" },
    { id: "omuz", name: "Omuz", x: 2190, y: 1480,
      desc: "Vücudun en hareketli eklemi olan omuz, uyum içinde çalışan kaslara ihtiyaç duyar. Kolunu kaldırırken ya da gece yatarken hissettiğin ağrı önemli bir ipucudur.",
      cond: ["Donuk omuz", "Rotator manşet yaralanmaları", "Sıkışma sendromu", "Omuz ameliyatı sonrası"],
      treat: ["Eklem mobilizasyonu", "Kuvvetlendirme egzersizleri", "Kinezyo bantlama", "Ameliyat sonrası rehabilitasyon"], service: "ortopedik" },
    { id: "dirsek", name: "Dirsek & El Bileği", x: 2545, y: 1362, left: true,
      desc: "Tekrarlayan hareketler, klavye ve mouse kullanımı ya da raket sporları dirsek ve bilekte aşırı kullanım sorunlarına yol açabilir.",
      cond: ["Tenisçi dirseği", "Golfçü dirseği", "Karpal tünel sendromu", "Tendinit"],
      treat: ["Manuel terapi", "Tendon yükleme programı", "Kinezyo bantlama", "Ergonomik düzenleme"], service: "bant" },
    { id: "sirt", name: "Sırt & Omurga", x: 1950, y: 1640, left: true,
      desc: "Omurga, bedenin taşıyıcı eksenidir. Eğrilikler ve duruş bozuklukları çoğu zaman sessizce ilerler; erken fark etmek önemlidir.",
      cond: ["Skolyoz", "Kifoz (kambur duruş)", "Sırt ağrısı", "Postür bozuklukları"],
      treat: ["Schroth egzersizleri", "Postür analizi", "Klinik pilates", "Solunum egzersizleri"], service: "skolyoz" },
    { id: "bel", name: "Bel", x: 1880, y: 1800, left: true,
      desc: "Bel ağrısı, neredeyse herkesin hayatında en az bir kez yaşadığı bir şikâyettir. Doğru hareket ve güçlü bir merkez beli korumaya yardımcı olur.",
      cond: ["Bel fıtığı", "Bel kayması", "Siyatik", "Kronik bel ağrısı"],
      treat: ["Manuel terapi", "Core stabilizasyon", "Klinik pilates", "Hareket ve taşıma eğitimi"], service: "pilates" },
    { id: "kalca", name: "Kalça & Pelvis", x: 2030, y: 1905,
      desc: "Kalça ve pelvis, yürümekten oturmaya kadar her hareketin merkezindedir. Gebelik ve doğum sonrası dönemde ayrıca özel ilgi ister.",
      cond: ["Kalça kireçlenmesi", "Protez sonrası süreç", "Piriformis sendromu", "Pelvik taban problemleri"],
      treat: ["Kuvvetlendirme", "Pelvik taban egzersizleri", "Yürüme analizi", "Manuel terapi"], service: "kadin" },
    { id: "diz", name: "Diz",
      desc: "Diz, vücut ağırlığını taşıyan en yüklü eklemlerden biridir. Sporda, merdivende ya da çömelirken hissedilen ağrılar dikkat ister.",
      cond: ["Menisküs yaralanmaları", "Ön çapraz bağ (ÖÇB) rehabilitasyonu", "Diz kireçlenmesi", "Diz önü ağrısı"],
      treat: ["Ameliyat sonrası rehabilitasyon", "Kuvvet ve denge çalışmaları", "Sporcu rehabilitasyonu", "Kinezyo bantlama"], service: "sporcu" },
    { id: "ayak", name: "Ayak & Ayak Bileği",
      desc: "Her adımda yükü ilk karşılayan ayaklar, tüm bedenin dengesini etkiler. Burkulmalar ve topuk ağrıları doğru yönetilmezse tekrarlayabilir.",
      cond: ["Ayak bileği burkulması", "Topuk dikeni / plantar fasiit", "Aşil tendiniti", "Düztabanlık"],
      treat: ["Denge ve propriosepsiyon", "Tendon yükleme programı", "Kinezyo bantlama", "Yürüme analizi"], service: "sporcu" },
  ];

  // ---------------------------------------------------------
  // YARDIMCILAR
  // ---------------------------------------------------------
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const root = document.documentElement;
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = matchMedia("(pointer: fine)").matches;
  const desktop = matchMedia("(min-width: 900px)");
  let vh = innerHeight;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
  const waLink = (text) => `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

  function moonPath(cx, cy, r, k) {
    k = clamp(k);
    if (k < 0.002) return "";
    if (k > 0.998) return `M${cx} ${cy - r}A${r} ${r} 0 1 1 ${cx} ${cy + r}A${r} ${r} 0 1 1 ${cx} ${cy - r}Z`;
    const rx = Math.abs(1 - 2 * k) * r;
    return `M${cx} ${cy - r}A${r} ${r} 0 0 1 ${cx} ${cy + r}A${rx} ${r} 0 0 ${k < 0.5 ? 0 : 1} ${cx} ${cy - r}Z`;
  }

  // ---------------------------------------------------------
  // İLETİŞİM BİLGİLERİNİ SAYFAYA YERLEŞTİR
  // ---------------------------------------------------------
  const placeholder = (el) => el.textContent.trim() === "—";
  $$('[data-site="phone"]').forEach((el) => { el.href = `tel:${SITE.phone.tel}`; if (placeholder(el)) el.textContent = SITE.phone.display; });
  $$('[data-site="whatsapp"]').forEach((el) => { el.href = waLink("Merhaba, Fizyonesli web sitesinden yazıyorum."); });
  $$('[data-site="instagram"]').forEach((el) => { el.href = `https://instagram.com/${SITE.instagram}`; if (placeholder(el)) el.textContent = `@${SITE.instagram}`; });
  $$('[data-site="address"]').forEach((el) => { el.href = SITE.address.maps; if (placeholder(el)) el.textContent = SITE.address.text; });
  $$('[data-site="hours"]').forEach((el) => { el.innerHTML = SITE.hours.filter((h) => h[1] !== "Kapalı").map((h) => esc(`${h[0]} ${h[1]}`)).join("<br>"); });
  $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));

  // ---------------------------------------------------------
  // IŞIK ZERRELERİ — sabah ışığında süzülen altın tozlar
  // ---------------------------------------------------------
  const MOTE_COLORS = ["201,160,106", "226,192,138", "255,250,242", "184,146,108"];
  class Motes {
    constructor(canvas) {
      this.c = canvas;
      this.ctx = canvas.getContext("2d");
      this.mx = this.my = this.tmx = this.tmy = 0;
      this.dust = [];
      this.visible = false;
      this.resize();
      new ResizeObserver(() => this.resize()).observe(canvas);
      new IntersectionObserver(([e]) => { this.visible = e.isIntersecting; }).observe(canvas);
    }
    resize() {
      const w = this.c.clientWidth, h = this.c.clientHeight;
      if (!w || !h || (w === this.w && h === this.h)) return;
      const dpr = Math.min(devicePixelRatio || 1, 2);
      this.w = w; this.h = h;
      this.c.width = Math.round(w * dpr); this.c.height = Math.round(h * dpr);
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(110, Math.round((w * h) / 12000));
      this.parts = Array.from({ length: n }, () => this.spawn(true));
      if (reduceMotion) this.draw(0, 0);
    }
    spawn(anywhere) {
      const glint = Math.random() < 0.14;
      return {
        x: Math.random() * this.w, y: anywhere ? Math.random() * this.h : this.h + 12,
        r: glint ? 1.5 + Math.random() * 1.5 : 0.6 + Math.random() * 1.7,
        vy: -(4 + Math.random() * 11), sway: 6 + Math.random() * 16, ph: Math.random() * 6.3, sp: 0.2 + Math.random() * 0.45,
        a: 0.3 + Math.random() * 0.5, tw: 0.5 + Math.random() * 1.4, z: 0.2 + Math.random() * 0.8,
        c: MOTE_COLORS[(Math.random() * MOTE_COLORS.length) | 0], glint,
      };
    }
    addDust(x, y) {
      if (this.dust.length > 90) this.dust.shift();
      this.dust.push({ x, y, vx: (Math.random() - 0.5) * 26, vy: -6 - Math.random() * 20, life: 1, r: 0.6 + Math.random() * 1.4 });
    }
    draw(t, dt) {
      const { ctx, w, h } = this;
      if (!w) return;
      this.mx += (this.tmx - this.mx) * 0.04;
      this.my += (this.tmy - this.my) * 0.04;
      ctx.clearRect(0, 0, w, h);
      for (const p of this.parts) {
        if (!reduceMotion) { p.y += p.vy * dt; if (p.y < -14) Object.assign(p, this.spawn(false)); }
        const x = p.x + Math.sin(t * p.sp + p.ph) * p.sway - this.mx * p.z * 16;
        const y = p.y - this.my * p.z * 12;
        const al = p.a * (reduceMotion ? 0.8 : 0.5 + 0.5 * Math.sin(t * p.tw + p.ph));
        ctx.fillStyle = `rgb(${p.c})`;
        if (p.glint) {
          ctx.globalAlpha = al;
          ctx.beginPath(); ctx.arc(x, y, p.r * 0.55, 0, 6.2832); ctx.fill();
          ctx.globalAlpha = al * 0.55;
          ctx.fillRect(x - p.r * 3.2, y - 0.35, p.r * 6.4, 0.7);
          ctx.fillRect(x - 0.35, y - p.r * 3.2, 0.7, p.r * 6.4);
        } else {
          ctx.globalAlpha = al * 0.22;
          ctx.beginPath(); ctx.arc(x, y, p.r * 2.6, 0, 6.2832); ctx.fill();
          ctx.globalAlpha = al;
          ctx.beginPath(); ctx.arc(x, y, p.r, 0, 6.2832); ctx.fill();
        }
      }
      if (this.dust.length) {
        ctx.fillStyle = "rgb(201,160,106)";
        for (const d of this.dust) {
          d.life -= dt * 0.9; d.x += d.vx * dt; d.y += d.vy * dt;
          ctx.globalAlpha = clamp(d.life) * 0.8;
          ctx.beginPath(); ctx.arc(d.x, d.y, d.r * clamp(d.life + 0.2), 0, 6.2832); ctx.fill();
        }
        this.dust = this.dust.filter((d) => d.life > 0);
      }
      ctx.globalAlpha = 1;
    }
  }
  const motesCanvas = $("[data-motes]");
  const motes = motesCanvas ? new Motes(motesCanvas) : null;

  // ---------------------------------------------------------
  // HERO — açılış ve paralaks
  // ---------------------------------------------------------
  const hero = $(".hero");
  const heroArt = $(".hero-art");
  const layers = [
    [$(".px-moon"), -22, -16],
    [$(".px-figure"), 34, 22],
    [$(".px-stars"), 90, 60],
  ];
  let ptx = 0, pty = 0, pcx = 0, pcy = 0, lastDust = 0, lastLayerKey = "";
  if (finePointer && !reduceMotion) {
    hero.addEventListener("pointermove", (e) => {
      const r = hero.getBoundingClientRect();
      ptx = ((e.clientX - r.left) / r.width) * 2 - 1;
      pty = ((e.clientY - r.top) / r.height) * 2 - 1;
      if (motes) {
        motes.tmx = ptx; motes.tmy = pty;
        const now = performance.now();
        if (now - lastDust > 24) { motes.addDust(e.clientX - r.left, e.clientY - r.top); lastDust = now; }
      }
    });
    hero.addEventListener("pointerleave", () => { ptx = pty = 0; if (motes) motes.tmx = motes.tmy = 0; });
  }
  function heroTick() {
    if (!root.classList.contains("intro-done")) return; // açılış bitmeden katmanlar kaymasın
    pcx += (ptx - pcx) * 0.05;
    pcy += (pty - pcy) * 0.05;
    const key = pcx.toFixed(3) + "," + pcy.toFixed(3);
    if (key === lastLayerKey) return; // değişmediyse yeniden boyatma
    lastLayerKey = key;
    for (const [el, ax, ay] of layers) el && el.setAttribute("transform", `translate(${(pcx * ax).toFixed(2)} ${(pcy * ay).toFixed(2)})`);
  }

  // Açılış: ay çizilir, figür aydan yükselir, omurga yanar, yıldız parlar.
  // Bitince aydan yükselme kırpması kaldırılır (paralaks ay ile figürü ayrı kaydırır).
  function finishIntro() {
    root.classList.add("intro-done");
    const pf = $(".px-figure");
    pf && pf.removeAttribute("clip-path");
  }
  const start = () => requestAnimationFrame(() => {
    root.classList.add("is-ready");
    setTimeout(finishIntro, reduceMotion ? 0 : 2900);
    setTimeout(() => root.classList.add("star-live"), 4200);
  });
  Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise((r) => setTimeout(r, 1200))]).then(start);

  // ---------------------------------------------------------
  // ÜST MENÜ
  // ---------------------------------------------------------
  const nav = $("[data-nav]");
  const navLinks = $$(".nav-links a");
  const menu = $("#mobil-menu");
  const toggle = $(".menu-toggle");
  let lastY = scrollY;

  function openMenu(open) {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Menüyü kapat" : "Menüyü aç");
    if (open) {
      menu.hidden = false;
      requestAnimationFrame(() => requestAnimationFrame(() => menu.classList.add("open")));
      document.body.style.overflow = "hidden";
    } else {
      menu.classList.remove("open");
      document.body.style.overflow = "";
      setTimeout(() => { if (!menu.classList.contains("open")) menu.hidden = true; }, 800);
    }
  }
  toggle.addEventListener("click", () => openMenu(toggle.getAttribute("aria-expanded") !== "true"));
  $$("a", menu).forEach((a) => a.addEventListener("click", () => openMenu(false)));
  addEventListener("keydown", (e) => { if (e.key === "Escape" && menu.classList.contains("open")) openMenu(false); });

  const linkObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${e.target.id}`));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  navLinks.forEach((a) => { const t = $(a.getAttribute("href")); t && linkObserver.observe(t); });

  // ---------------------------------------------------------
  // KAYDIRINCA BELİRME
  // ---------------------------------------------------------
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); revealObserver.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  $$(".reveal").forEach((el) => revealObserver.observe(el));

  // ---------------------------------------------------------
  // AĞRI HARİTASI
  // ---------------------------------------------------------
  const stage = $(".map-stage");
  const hotspotWrap = $(".hotspots");
  const chipWrap = $(".region-chips");
  const panel = $(".region-panel-inner");
  const VB = { x: 1180, y: 567, s: 1780 };

  REGIONS.forEach((reg, i) => {
    if (reg.x) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "hotspot" + (reg.left ? " left" : "");
      b.dataset.region = reg.id;
      b.style.left = ((reg.x - VB.x) / VB.s * 100).toFixed(2) + "%";
      b.style.top = ((reg.y - VB.y) / VB.s * 100).toFixed(2) + "%";
      b.style.setProperty("--delay", (i * 0.35).toFixed(2) + "s");
      b.setAttribute("aria-label", reg.name);
      b.setAttribute("aria-pressed", "false");
      b.innerHTML = `<span class="hotspot-label" aria-hidden="true">${esc(reg.name)}</span>`;
      hotspotWrap.appendChild(b);
    }
    const c = document.createElement("button");
    c.type = "button";
    c.className = "region-chip";
    c.dataset.region = reg.id;
    c.setAttribute("aria-pressed", "false");
    c.innerHTML = (reg.x ? "" : '<span class="dotmark" aria-hidden="true"></span>') + esc(reg.name);
    chipWrap.appendChild(c);
  });

  function selectRegion(id, animate = true) {
    const idx = REGIONS.findIndex((r) => r.id === id);
    const reg = REGIONS[idx];
    if (!reg) return;
    stage.dataset.region = id;
    $$(".hotspot", hotspotWrap).forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.region === id)));
    $$(".region-chip", chipWrap).forEach((c) => c.setAttribute("aria-pressed", String(c.dataset.region === id)));
    const svc = SERVICES[reg.service];
    panel.innerHTML = `
      <span class="region-kicker">Bölge ${String(idx + 1).padStart(2, "0")} / ${String(REGIONS.length).padStart(2, "0")}</span>
      <h3 class="region-title">${esc(reg.name)}</h3>
      <p class="region-desc">${esc(reg.desc)}</p>
      <div class="region-cols">
        <div><h4>Sık karşılaşılanlar</h4><ul>${reg.cond.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
        <div class="treat"><h4>Birlikte neler yapabiliriz</h4><ul>${reg.treat.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
      </div>
      <div class="region-cta">
        <a class="btn btn-primary" href="#randevu" data-book="${esc(reg.name)}">Bu bölge için randevu al <svg class="i"><use href="#i-arrow"/></svg></a>
        ${svc ? `<button type="button" class="text-link" data-open-service="${reg.service}">${esc(svc.title)} <svg class="i"><use href="#i-arrow"/></svg></button>` : ""}
      </div>`;
    if (animate) { panel.classList.remove("swap"); void panel.offsetWidth; panel.classList.add("swap"); }
  }
  hotspotWrap.addEventListener("click", (e) => { const b = e.target.closest(".hotspot"); b && selectRegion(b.dataset.region); });
  chipWrap.addEventListener("click", (e) => {
    const c = e.target.closest(".region-chip");
    if (!c) return;
    selectRegion(c.dataset.region);
    if (!desktop.matches) c.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", inline: "center", block: "nearest" });
  });
  selectRegion("bel", false);

  // Bölgeden randevuya geçiş: formdaki seçimi doldur
  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-book]");
    if (!a) return;
    const sel = $("#f-bolge");
    if (sel) sel.value = a.dataset.book;
  });

  // ---------------------------------------------------------
  // TEDAVİLER — ışık takibi ve detay penceresi
  // ---------------------------------------------------------
  const modal = $(".service-modal:not(.kvkk-modal):not(.about-modal)");
  const modalContent = $(".sm-content", modal);
  function openService(id) {
    const s = SERVICES[id];
    if (!s || !modal) return;
    modalContent.innerHTML = `
      <div class="sm-hero">
        <svg class="service-icon"><use href="#${s.icon}"/></svg>
        <h3 id="sm-title">${esc(s.title)}</h3>
        <p>${esc(s.lead)}</p>
        <svg class="sm-hero-star" aria-hidden="true"><use href="#i-star"/></svg>
      </div>
      <div class="sm-body">
        <div><h4>Kimler için?</h4><ul>${s.for.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
        <div><h4>Seans nasıl geçer?</h4><p>${esc(s.session)}</p></div>
        <div><a class="btn btn-dark" href="#randevu" data-close-modal>Randevu al <svg class="i"><use href="#i-arrow"/></svg></a></div>
      </div>`;
    modal.showModal();
    $(".sm-inner", modal).scrollTop = 0;
  }
  $$(".service-tile").forEach((tile) => {
    tile.addEventListener("click", () => openService(tile.dataset.service));
    if (finePointer) tile.addEventListener("pointermove", (e) => {
      const r = tile.getBoundingClientRect();
      tile.style.setProperty("--mx", `${e.clientX - r.left}px`);
      tile.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-open-service]");
    if (b) openService(b.dataset.openService);
  });
  $$(".service-modal").forEach((dlg) => {
    $(".sm-close", dlg).addEventListener("click", () => dlg.close());
    dlg.addEventListener("click", (e) => {
      if (e.target === dlg) dlg.close();
      if (e.target.closest("[data-close-modal]")) dlg.close();
    });
  });
  const kvkk = $(".kvkk-modal");
  $$("[data-kvkk]").forEach((a) => a.addEventListener("click", (e) => { e.preventDefault(); kvkk && kvkk.showModal(); }));

  // Hakkımda artık ayrı bölüm değil: menüdeki bağlantı tanışma kartını açar
  const about = $(".about-modal");
  const openAbout = () => { if (about && !about.open) { about.showModal(); $(".sm-inner", about).scrollTop = 0; } };
  document.addEventListener("click", (e) => {
    if (!e.target.closest('a[href="#hakkimda"]')) return;
    e.preventDefault();
    openAbout();
  });
  if (location.hash === "#hakkimda") openAbout();

  // ---------------------------------------------------------
  // RANDEVU FORMU → WhatsApp
  // ---------------------------------------------------------
  const form = $(".booking-form");
  if (form) {
    const F = form.elements;
    const setErr = (input, msg) => {
      const f = input.closest(".field");
      f.classList.toggle("invalid", !!msg);
      $(".field-error", f).textContent = msg || "";
    };
    const kvkkErr = $(".kvkk-error", form);
    F.ad.addEventListener("input", () => setErr(F.ad, ""));
    F.tel.addEventListener("input", () => setErr(F.tel, ""));
    F.kvkk.addEventListener("change", () => { kvkkErr.textContent = ""; });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = F.ad.value.trim();
      const tel = F.tel.value.trim();
      const errs = [];
      if (name.length < 2) { setErr(F.ad, "Lütfen adını ve soyadını yaz."); errs.push(F.ad); }
      if (tel.replace(/\D/g, "").length < 10) { setErr(F.tel, "Geçerli bir telefon numarası yaz."); errs.push(F.tel); }
      if (!F.kvkk.checked) { kvkkErr.textContent = "Devam etmek için onay kutusunu işaretlemelisin."; errs.push(F.kvkk); }
      if (errs.length) { errs[0].focus(); return; }

      const lines = [
        "Merhaba, Fizyonesli web sitesinden randevu almak istiyorum.",
        "",
        `Ad Soyad: ${name}`,
        `Telefon: ${tel}`,
      ];
      if (F.bolge.value) lines.push(`Şikâyet bölgesi: ${F.bolge.value}`);
      lines.push(`Uygun zaman: ${F.zaman.value}`);
      window.open(waLink(lines.join("\n")), "_blank", "noopener");
      $(".form-success", form).hidden = false;
    });
  }

  // ---------------------------------------------------------
  // YÜZEN ÖĞELER
  // ---------------------------------------------------------
  const waFloat = $(".wa-float");
  const scrollMoon = $(".scroll-moon");
  const scrollMoonPath = scrollMoon && $("path", scrollMoon);
  scrollMoon && scrollMoon.addEventListener("click", () => scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }));
  let lastMoonK = -1;
  const bookingEl = $("#randevu");
  function floatTick(y) {
    const nearBooking = bookingEl && bookingEl.getBoundingClientRect().top < vh * 0.6;
    const past = y > vh * 0.7 && !nearBooking;
    waFloat && waFloat.classList.toggle("show", past);
    scrollMoon && scrollMoon.classList.toggle("show", past);
    if (scrollMoonPath) {
      const k = clamp(y / (document.documentElement.scrollHeight - vh));
      if (Math.abs(k - lastMoonK) > 0.002) { scrollMoonPath.setAttribute("d", moonPath(32, 32, 20, k)); lastMoonK = k; }
    }
  }

  // ---------------------------------------------------------
  // MIKNATISLI BUTONLAR
  // ---------------------------------------------------------
  if (finePointer && !reduceMotion) {
    $$("[data-magnetic]").forEach((el) => {
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${((e.clientX - r.left - r.width / 2) * 0.18).toFixed(1)}px, ${((e.clientY - r.top - r.height / 2) * 0.32).toFixed(1)}px)`;
      });
      el.addEventListener("pointerleave", () => { el.style.transform = ""; });
    });
  }

  // ---------------------------------------------------------
  // KAYDIRMA + ANA DÖNGÜ
  // ---------------------------------------------------------
  let scrollDirty = true;
  function onScroll() {
    const y = scrollY;
    const dy = y - lastY;
    nav.classList.toggle("scrolled", y > 30);
    if (!menu.classList.contains("open")) {
      if (y > vh * 0.9 && dy > 6) nav.classList.add("hidden");
      else if (dy < -6 || y < vh * 0.9) nav.classList.remove("hidden");
    }
    lastY = y;
    if (heroArt && y < vh * 1.2 && !reduceMotion) {
      const p = clamp(y / (hero.offsetHeight || vh));
      heroArt.style.transform = `translate3d(0, ${(p * 90).toFixed(1)}px, 0) scale(${(1 - p * 0.06).toFixed(4)})`;
      heroArt.style.opacity = (1 - p * 0.75).toFixed(3);
    }
    floatTick(y);
  }
  addEventListener("scroll", () => { scrollDirty = true; }, { passive: true });
  addEventListener("resize", () => { vh = innerHeight; scrollDirty = true; });

  let last = performance.now();
  function loop(now) {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    if (scrollDirty) { scrollDirty = false; onScroll(); }
    if (!reduceMotion) {
      const t = now / 1000;
      if (motes && motes.visible) motes.draw(t, dt);
      heroTick();
    }
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
})();
