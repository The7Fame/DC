const loadPage = async (page) => {
  try {
    const response = await fetch(`${page}.html`);
    const html = await response.text();
    const contentElem = document.getElementById("content");
    const heroElem = document.getElementById("hero");
    const mainElem = document.getElementById("main");
    heroElem.style.display = "none";
    mainElem.style.display = "block";
    contentElem.innerHTML = html;
    highlightCurrentPage(page);

    switch (page) {
      case "contacts": {
        loadScript("./js/map.js", () => {
          console.log("Скрипт map.js загружен!");
        });
        break;
      }
      case "services": {
        loadScript("./js/swiper_services.js", () => {
          console.log("Скрипт swiper_services.js загружен!");
        });
        break;
      }
    }
  } catch (error) {
    console.error("Ошибка загрузки страницы:", error);
  }
};

const loadScript = (src, callback) => {
  const script = document.createElement("script");
  script.src = src;
  script.onload = callback;
  document.body.appendChild(script);
};

const highlightCurrentPage = (currentPage) => {
  const links = document.querySelectorAll(".nav__link");

  links.forEach((link) => {
    const linkPath = link.getAttribute("href").replace("/", "");
    if (linkPath === currentPage) {
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
});
