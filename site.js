/* Roverland Voyage — site interactions. Vanilla JS, no deps. */
(function () {
  // ---- Sticky nav: solid on scroll (or always solid on inner pages w/o hero) ----
  var nav = document.querySelector(".nav");
  var hasHero = !!document.querySelector(".hero");
  function onScroll() {
    if (!nav) return;
    if (!hasHero || window.scrollY > 40) nav.classList.add("solid");
    else nav.classList.remove("solid");
  }
  if (!hasHero && nav) nav.classList.add("solid");
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---- Mobile menu ----
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () { links.classList.toggle("open"); });
    links.addEventListener("click", function (e) { if (e.target.closest("a")) links.classList.remove("open"); });
  }

  // ---- Hero reel (cross-fade images) ----
  document.querySelectorAll(".hero-reel").forEach(function (reel) {
    var imgs = reel.querySelectorAll("img");
    if (imgs.length < 2) return;
    var dots = document.querySelectorAll(".reel-dots button");
    var i = 0;
    function show(n) {
      imgs[i].classList.remove("active");
      if (dots[i]) dots[i].classList.remove("active");
      i = (n + imgs.length) % imgs.length;
      imgs[i].classList.add("active");
      if (dots[i]) dots[i].classList.add("active");
    }
    var timer = setInterval(function () { show(i + 1); }, 4200);
    dots.forEach(function (d, n) { d.addEventListener("click", function () { clearInterval(timer); show(n); timer = setInterval(function () { show(i + 1); }, 4200); }); });
  });

  // ---- FAQ accordion ----
  document.querySelectorAll(".acc-q").forEach(function (q) {
    q.addEventListener("click", function () {
      var item = q.closest(".acc-item");
      var ans = item.querySelector(".acc-a");
      var open = item.classList.contains("open");
      if (open) { item.classList.remove("open"); ans.style.maxHeight = null; }
      else { item.classList.add("open"); ans.style.maxHeight = ans.scrollHeight + "px"; }
    });
  });

  // ---- Gallery filter ----
  var gFilters = document.querySelectorAll("[data-filter]");
  if (gFilters.length) {
    gFilters.forEach(function (btn) {
      btn.addEventListener("click", function () {
        gFilters.forEach(function (b) { b.classList.remove("active"); });
        btn.classList.add("active");
        var f = btn.getAttribute("data-filter");
        document.querySelectorAll(".g-item").forEach(function (it) {
          var cat = it.getAttribute("data-cat");
          it.classList.toggle("hide", !(f === "all" || cat === f));
        });
      });
    });
  }

  // ---- Forms (fake submit → success message) ----
  document.querySelectorAll("form[data-fake]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = form.querySelector(".form-success");
      if (msg) msg.classList.add("show");
      form.querySelectorAll(".input, .select, .textarea").forEach(function (el) { el.value = ""; });
      if (msg) msg.scrollIntoView ? null : null; // never use scrollIntoView
    });
  });

  // ---- Reveal on scroll ----
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  // ---- Experience video slots: show video when the file exists ----
  document.querySelectorAll('.exp-media[data-video], .wow-media[data-video]').forEach(function (m) {
    var v = document.createElement('video');
    v.muted = true; v.loop = true; v.playsInline = true; v.autoplay = true;
    v.setAttribute('muted',''); v.setAttribute('playsinline','');
    v.src = m.getAttribute('data-video');
    v.addEventListener('loadeddata', function () { m.classList.add('has-video'); v.play().catch(function(){}); });
    v.addEventListener('error', function () { m.classList.remove('has-video'); });
    m.prepend(v);
  });

  // ---- Heart toggle ----
  document.querySelectorAll('.exp-fav').forEach(function (b) {
    b.addEventListener('click', function (e) { e.preventDefault(); b.classList.toggle('faved'); });
  });

  // ---- wow-row interactions: expand, stagger entrance, parallax, auto-cycle ----
  var wowRow = document.querySelector('.wow-row');
  if (wowRow) {
    var panels = Array.prototype.slice.call(wowRow.querySelectorAll('.wow-panel'));
    var userTouched = false;

    function openPanel(p) {
      panels.forEach(function (x) { x.classList.toggle('open', x === p); x.setAttribute('aria-expanded', x === p ? 'true' : 'false'); });
    }
    panels.forEach(function (p, i) {
      p.style.setProperty('--wd', (i * 80) + 'ms');
      p.addEventListener('click', function () { userTouched = true; if (!p.classList.contains('open')) openPanel(p); });
      p.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); userTouched = true; openPanel(p); } });
    });

    // staggered entrance — IO fast path + poll fallback + guaranteed end-state
    var wowEntered = false;
    function wowEnter() {
      if (wowEntered) return;
      wowEntered = true;
      panels.forEach(function (p, i) {
        p.classList.add('in');
        setTimeout(function () {
          p.style.transition = 'none';
          p.style.opacity = '1';
          p.style.transform = 'none';
          requestAnimationFrame(function () { requestAnimationFrame(function () { p.style.transition = ''; }); });
        }, i * 80 + 780);
      });
    }
    function wowInView() {
      var r = wowRow.getBoundingClientRect();
      return r.top < window.innerHeight * 0.92 && r.bottom > 0;
    }
    var wio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { wowEnter(); wio.disconnect(); } });
    }, { threshold: 0.15 });
    wio.observe(wowRow);
    var wowPoll = setInterval(function () {
      if (wowEntered) { clearInterval(wowPoll); return; }
      if (wowInView()) { wowEnter(); clearInterval(wowPoll); }
    }, 350);

    // gentle parallax on the open panel's media
    var ticking = false;
    function parallax() {
      var r = wowRow.getBoundingClientRect();
      if (r.bottom > 0 && r.top < window.innerHeight) {
        var p = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
        wowRow.querySelectorAll('.wow-panel.open video, .wow-panel.open .video-ph').forEach(function (el) {
          el.style.transform = 'translateY(' + (p * 34).toFixed(1) + 'px)';
        });
      }
      ticking = false;
    }
    window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(parallax); } }, { passive: true });
    parallax();
  }
})();
