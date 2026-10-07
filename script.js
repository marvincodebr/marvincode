"use strict";

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.getElementById("navigation");

if (menuButton && navigation) {
  document.body.classList.add("menu-ready");
  function setMenu(open) {
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    navigation.classList.toggle("is-open", open);
  }
  menuButton.addEventListener("click", () =>
    setMenu(menuButton.getAttribute("aria-expanded") !== "true"),
  );
  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenu(false);
  });
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      menuButton.getAttribute("aria-expanded") === "true"
    ) {
      setMenu(false);
      menuButton.focus();
    }
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".header")) setMenu(false);
  });
  const desktop = window.matchMedia("(min-width: 601px)");
  desktop.addEventListener("change", () => setMenu(false));
}

const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

// Content stays visible without JavaScript, with reduced motion, or without observers.
const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
const reveals = document.querySelectorAll(".reveal");
let revealObserver;
if ("IntersectionObserver" in window && !motionPreference.matches) {
  revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove("is-pending");
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.08 },
  );
  reveals.forEach((element) => {
    // Do not hide content that is already in the viewport.
    if (element.getBoundingClientRect().top < window.innerHeight) return;
    element.classList.add("is-pending");
    revealObserver.observe(element);
  });
}
motionPreference.addEventListener("change", (event) => {
  if (!event.matches) return;
  revealObserver?.disconnect();
  reveals.forEach((element) => element.classList.remove("is-pending"));
});

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navigation?.querySelectorAll("a").forEach((link) => {
          if (link.hash === "#" + entry.target.id)
            link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-20% 0px -55% 0px", threshold: 0 },
  );
  document
    .querySelectorAll("main section[id]")
    .forEach((section) => sectionObserver.observe(section));
}
