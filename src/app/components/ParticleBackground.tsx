"use client";

import { useEffect } from "react";

export default function ParticleBackground() {
  useEffect(() => {
    const heroSection = document.querySelector(".hero-section");
    if (!heroSection) return;

    const canvas = document.createElement("canvas");
    canvas.id = "particles-canvas";
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = "-1";
    canvas.style.pointerEvents = "none";

    (heroSection as HTMLElement).style.position = "relative";
    heroSection.insertBefore(canvas, heroSection.firstChild);

    const ctx = canvas.getContext("2d");
    let particles: any[] = [];
    const particlesNum = 50;
    let isDarkTheme = !document.body.classList.contains("light-theme");

    function resizeCanvas() {
      canvas.width = (heroSection as HTMLElement).offsetWidth;
      canvas.height = (heroSection as HTMLElement).offsetHeight;
    }

    function createParticles() {
      particles = [];
      for (let i = 0; i < particlesNum; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 3 + 1,
          vx: Math.random() * 2 - 1,
          vy: Math.random() * 2 - 1,
          color: isDarkTheme
            ? `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`
            : `rgba(15, 118, 110, ${Math.random() * 0.3 + 0.1})`,
        });
      }
    }

    function drawParticles() {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = p.color;
        ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          let p2 = particles[j];
          let distance = Math.sqrt(
            Math.pow(p.x - p2.x, 2) + Math.pow(p.y - p2.y, 2)
          );
          if (distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = isDarkTheme
              ? `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`
              : `rgba(15, 118, 110, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    }

    function updateParticles() {
      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx = -p.vx;
        if (p.y < 0 || p.y > canvas.height) p.vy = -p.vy;
      }
    }

    function animateParticles() {
      drawParticles();
      updateParticles();
      requestAnimationFrame(animateParticles);
    }

    resizeCanvas();
    createParticles();
    animateParticles();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return null;
}
