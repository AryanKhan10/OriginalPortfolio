const checkbox = document.querySelector("#theme-toggle");
const b= document.querySelector("#about");
// console.log(b)

// Theme Vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

// Initial Theme Check
const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    b.classList.add("light")
    checkbox.checked = true;
  } else {
    document.documentElement.classList.remove("dark");
    checkbox.checked = false;
  }
};

// Switch Theme
const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    }
    };

    // Event Listener for the checkbox
    checkbox.addEventListener("change", () => {
    themeSwitch();
    });

    // Initial check on page load
    themeCheck();
