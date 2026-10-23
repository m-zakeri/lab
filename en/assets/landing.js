/* Landing page motion: scroll reveal and the pointer-following card glow.
   Re-runs after Material's instant navigation via document$. Keep in sync
   with the copy in the other language's assets folder. */
(function () {
  var REVEAL = ".section-head, .split__intro, .pillar, .tile, .product, .course, .cta";
  var GROUPS = ".pillars, .tiles, .products, .courses";
  var GLOW = ".pillar, .tile, .product";
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  var observer = null;

  function reveal() {
    if (observer) observer.disconnect();
    var items = document.querySelectorAll(REVEAL);
    if (!items.length || reduce.matches || !("IntersectionObserver" in window)) return;

    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });

    items.forEach(function (el) {
      // Stagger siblings in the same card grid.
      var group = el.closest(GROUPS);
      if (group) {
        var index = Array.prototype.indexOf.call(group.querySelectorAll("a"), el);
        el.style.transitionDelay = Math.min(index, 4) * 70 + "ms";
      }
      el.classList.add("reveal");
      observer.observe(el);
    });
    document.documentElement.classList.add("js-reveal");
  }

  document.addEventListener("pointermove", function (event) {
    var card = event.target.closest && event.target.closest(GLOW);
    if (!card) return;
    var box = card.getBoundingClientRect();
    card.style.setProperty("--mx", event.clientX - box.left + "px");
    card.style.setProperty("--my", event.clientY - box.top + "px");
  });

  // Drop the stagger once revealed so hover feedback is immediate.
  document.addEventListener("transitionend", function (event) {
    if (event.target.classList && event.target.classList.contains("is-visible")) {
      event.target.style.transitionDelay = "";
    }
  });

  if (window.document$) {
    window.document$.subscribe(reveal);
  } else {
    document.addEventListener("DOMContentLoaded", reveal);
  }
})();
