const menuBtn = document.getElementById("menuBtn");
  const iconOpen = document.getElementById("iconOpen");
  const iconClose = document.getElementById("iconClose");
  const mobileMenu = document.getElementById("mobileMenu");

  menuBtn.addEventListener("click", () => {
    iconOpen.classList.toggle("hidden");
    iconClose.classList.toggle("hidden");
    mobileMenu.classList.toggle("hidden");
  });