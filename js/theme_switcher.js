const themes = document.querySelectorAll(".theme-item");
const html = document.querySelector("html");
const themeList = document.getElementById("theme-list");

window.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme");
  if (theme) {
    html.setAttribute("data-theme", theme);
  }
});

const themeSwitcher = document.querySelector(".theme-switcher");

themeSwitcher.addEventListener("click", function () {
  // Toggle the visibility of the theme list when the theme switcher is clicked
  themeList.hidden = !themeList.hidden;
});

document.addEventListener("click", function (event) {
  // Close the theme list if a click occurs outside of the theme switcher and theme list
  if (
    !themeSwitcher.contains(event.target) &&
    !themeList.contains(event.target)
  ) {
    themeList.hidden = true;
  }
});

themes.forEach((theme) => {
  theme.addEventListener("click", () => {
    const theme_name = theme.getAttribute("theme");
    console.log(theme_name);
    html.setAttribute("data-theme", theme_name);
    saveTheme(theme_name);
  });
});

//save theme to local storage
function saveTheme(theme_name) {
  localStorage.setItem("theme", theme_name);
}

//get theme from local storage
function getTheme() {
  return localStorage.getItem("theme");
}
