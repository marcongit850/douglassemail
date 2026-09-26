(function () {
  var details = document.querySelector(".nav-disclosure");
  if (details) {
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && details.open) {
        details.removeAttribute("open");
        var summary = details.querySelector("summary");
        if (summary) summary.focus();
      }
    });
    details.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        details.removeAttribute("open");
      });
    });
  }

  var caption = document.getElementById("map-caption");
  var lakes = document.querySelectorAll("[data-lake]");
  if (!lakes.length) return;

  function activate(id) {
    lakes.forEach(function (el) {
      el.classList.toggle("is-active", el.getAttribute("data-lake") === id);
    });
    if (!caption) return;
    var source =
      document.querySelector('.lake-directory a[data-lake="' + id + '"]') ||
      document.querySelector('.name-index a[data-lake="' + id + '"]');
    var text = source && source.getAttribute("data-caption");
    if (text) caption.textContent = text;
  }

  lakes.forEach(function (el) {
    var id = el.getAttribute("data-lake");
    el.addEventListener("mouseenter", function () { activate(id); });
    el.addEventListener("focus", function () { activate(id); });
  });
})();
