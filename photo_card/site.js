(() => {
  const sections = [...document.querySelectorAll(".language-section")];
  const buttons = [...document.querySelectorAll("[data-language]")];
  if (!sections.length || !buttons.length) return;

  const available = new Set(sections.map((section) => section.dataset.languageSection));
  const browserLanguage = (navigator.language || "en").toLowerCase();
  const preferred = browserLanguage.startsWith("zh")
    ? (browserLanguage.includes("tw") || browserLanguage.includes("hk") || browserLanguage.includes("hant") ? "zh-Hant" : "zh-Hans")
    : browserLanguage.startsWith("ja") ? "ja" : "en";

  function setLanguage(language) {
    const selected = available.has(language) ? language : "en";
    sections.forEach((section) => {
      section.hidden = section.dataset.languageSection !== selected;
    });
    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === selected));
    });
    document.documentElement.lang = selected;
    try { localStorage.setItem("easyswipe-language", selected); } catch (_) {}
  }

  let storedLanguage;
  try { storedLanguage = localStorage.getItem("easyswipe-language"); } catch (_) {}
  setLanguage(storedLanguage || preferred);
  buttons.forEach((button) => button.addEventListener("click", () => setLanguage(button.dataset.language)));
})();
