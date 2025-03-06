const loadPage = async (page) => {
  try {
    console.log(page);
    const response = await fetch(`${page}.html`);
    const html = await response.text();
    const contentElem = document.getElementById("content");
    contentElem.style.display = "block";
    contentElem.innerHTML = html;
    highlightCurrentPage();
  } catch (error) {
    console.error("Ошибка загрузки страницы:", error);
  }
};

const highlightCurrentPage = () => {
  const links = document.querySelectorAll(".nav__link");
  const currentPath = window.location.pathname.split("/").pop() || "/";

  links.forEach((link) => {
    const linkPath = link.getAttribute("href").replace("/", "");
    if (linkPath === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
};
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".nav__link");
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const page = e.target.getAttribute("href").replace("/", "");
      loadPage(page);
    });
  });

  window.addEventListener("popstate", () => {
    const page = window.location.pathname.split("/").pop() || "/";
    loadPage(page);
  });
});
