// Runs before first paint: apply the saved (or system) theme so the page
// never flashes the wrong colours, then bootstrap Google Analytics.
(function () {
  var dark;
  try {
    var saved = localStorage.getItem("Dark");
    if (saved !== null) dark = JSON.parse(saved) === true;
  } catch (e) {}
  if (dark === undefined) {
    dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }
  if (dark) document.documentElement.classList.add("is-dark-mode-active");
})();

// measurement id comes from site.json via the data-ga-id attribute in index.html
var gaId = document.currentScript && document.currentScript.dataset.gaId;
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
if (gaId) {
  gtag("js", new Date());
  gtag("config", gaId);
}
