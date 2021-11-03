document
  .querySelector(".hamburguer")
  .addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
  );

document
  .querySelector(".menu")
  .addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
  );

document
  .querySelector(".btn")
  .addEventListener("click", () =>
    document.querySelector(".aside-sobre").classList.toggle("show-sobre")
  );
document
  .querySelector(".icon-close-sobre")
  .addEventListener("click", () =>
    document.querySelector(".aside-sobre").classList.toggle("show-sobre")
  );
