document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  if (!header || !scrollTopBtn) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      scrollTopBtn.classList.toggle("show", !entry.isIntersecting);
    },
    { threshold: 0 }
  );

  observer.observe(header);

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
