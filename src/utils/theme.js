export function setTheme(theme) {
  const root = document.documentElement;

  if (theme === "dark") {
    root.setAttribute("data-bs-theme", "dark");
    localStorage.setItem("app-theme", "dark");
  } else {
    root.setAttribute("data-bs-theme", "light");
    localStorage.setItem("app-theme", "light");
  }
}
