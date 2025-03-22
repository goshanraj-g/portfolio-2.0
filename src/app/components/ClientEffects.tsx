"use client";

import { useEffect } from "react";

export default function ClientEffects() {
  useEffect(() => {
    const themeToggle = document.getElementById(
      "theme-toggle"
    ) as HTMLInputElement | null;
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.body.classList.add("light-theme");
      if (themeToggle) themeToggle.checked = true;
    }

    const handleThemeChange = () => {
      if (themeToggle && themeToggle.checked) {
        document.body.classList.add("light-theme");
        localStorage.setItem("theme", "light");
      } else {
        document.body.classList.remove("light-theme");
        localStorage.setItem("theme", "dark");
      }
    };

    themeToggle?.addEventListener("change", handleThemeChange);

    const handleHamburgerClick = (e: Event) => {
      e.stopPropagation();
      navLinks?.classList.toggle("active");
      hamburger?.classList.toggle("active");
    };

    hamburger?.addEventListener("click", handleHamburgerClick);

    const handleDocumentClick = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".nav-right")) {
        navLinks?.classList.remove("active");
        hamburger?.classList.remove("active");
      }
    };

    document.addEventListener("click", handleDocumentClick);

    const handleResize = () => {
      if (window.innerWidth > 768) {
        navLinks?.classList.remove("active");
        hamburger?.classList.remove("active");
      }
    };

    window.addEventListener("resize", handleResize);

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        if (targetId && targetId !== "#") {
          document
            .querySelector(targetId)
            ?.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    function setupTypingEffect() {
      const title = "Software Engineer";
      let charIndex = 0;
      const typeSpeed = 100;
      const headerElement = document.querySelector(".hero-content h2");
      if (!headerElement) return;
      headerElement.innerHTML = "";

      function type() {
        if (charIndex < title.length) {
          headerElement.innerHTML =
            title.substring(0, charIndex + 1) +
            '<span class="blinking-cursor">|</span>';
          charIndex++;
          setTimeout(type, typeSpeed);
        } else {
          headerElement.innerHTML =
            title + '<span class="blinking-cursor">|</span>';
        }
      }
      type();
    }

    function setupScrollReveal() {
      const revealElements = document.querySelectorAll(
        ".project-card, .about-card"
      );
      const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      };

      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      }, revealOptions);

      revealElements.forEach((element) => {
        (element as HTMLElement).style.opacity = "0";
        (element as HTMLElement).style.transform = "translateY(30px)";
        (element as HTMLElement).style.transition =
          "opacity 0.6s ease-out, transform 0.6s ease-out";
        revealObserver.observe(element);
      });

      document.head.insertAdjacentHTML(
        "beforeend",
        `
        <style>
          .revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
          }
        </style>
      `
      );
    }

    function setupProjectInteraction() {
      const projectCards = document.querySelectorAll(".project-card");
      projectCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          (card as HTMLElement).style.transform =
            "translateY(-10px) scale(1.02)";
          (card as HTMLElement).style.boxShadow =
            "0 15px 30px rgba(0, 0, 0, 0.3)";
        });
        card.addEventListener("mouseleave", () => {
          (card as HTMLElement).style.transform = "translateY(-5px)";
          (card as HTMLElement).style.boxShadow =
            "0 8px 16px rgba(0, 0, 0, 0.2)";
        });
      });
    }

    function setupParallax() {
      const heroSection = document.querySelector(".hero-section");
      if (!heroSection) return;
      window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        if (scrollPosition < window.innerHeight) {
          (heroSection as HTMLElement).style.backgroundPositionY = `${
            scrollPosition * 0.5
          }px`;
        }
      });
    }

    function setupScrollProgressBar() {
      const progressBar = document.createElement("div");
      progressBar.className = "scroll-progress-bar";
      progressBar.style.position = "fixed";
      progressBar.style.top = "0";
      progressBar.style.left = "0";
      progressBar.style.height = "3px";
      progressBar.style.width = "0%";
      progressBar.style.backgroundColor = "#1f6feb";
      progressBar.style.zIndex = "1000";
      progressBar.style.transition = "width 0.1s";
      document.body.appendChild(progressBar);

      window.addEventListener("scroll", () => {
        const scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight =
          document.documentElement.scrollHeight || document.body.scrollHeight;
        const clientHeight =
          document.documentElement.clientHeight || window.innerHeight;
        const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
        progressBar.style.width = scrolled + "%";
      });
    }

    setupTypingEffect();
    setupScrollReveal();
    setupProjectInteraction();
    setupParallax();
    setupScrollProgressBar();
  }, []);

  return null;
}
