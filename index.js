document.querySelector(".mobile-toggle").addEventListener("click", function () {
  this.classList.toggle("active"),
    document.querySelector(".mobile-nav").classList.toggle("active"),
    (document.body.style.overflow = this.classList.contains("active")
      ? "hidden"
      : "");
});

