(function(){
  const key = "site_theme";
  const root = document.documentElement;
  const saved = localStorage.getItem(key);

  if (saved === "light" || saved === "dark") {
    root.setAttribute("data-theme", saved);
  } else {
    // default: dark
    root.setAttribute("data-theme", "dark");
  }

  window.toggleTheme = function(){
    const cur = root.getAttribute("data-theme") || "dark";
    const next = (cur === "dark") ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem(key, next);
  }

  // Mark active nav link based on path
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".menu a[data-page]").forEach(a=>{
    if(a.getAttribute("data-page") === path) a.classList.add("active");
  });
})();
