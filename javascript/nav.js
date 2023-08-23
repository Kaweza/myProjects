let lastScrollPos = window.pageYOffset;

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;

  if (currentScrollPos > lastScrollPos && currentScrollPos > 100) {
    document.querySelector(".navbar").style.transform = "translateY(-100%)";
  } else {
    document.querySelector(".navbar").style.transform = "translateY(0)";
  }

  lastScrollPos = currentScrollPos;
});

function logout() {
  // Your logout logic here
}
window.addEventListener("scroll", function () {
  const navbarCollapse = document.querySelector(".navbar-collapse");
  if (navbarCollapse.classList.contains("show")) {
    navbarCollapse.classList.remove("show");
  }
});
