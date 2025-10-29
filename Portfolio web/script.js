// Inisialisasi AOS
AOS.init({
  duration: 1000,
  once: false,
});

// Ketikan otomatis untuk nama
const typedName = new Typed('#typed-name', {
  strings: ['<span class="white-text">Welcome</span> <span class="gray-text">To My</span> <br> <span class="purple-text">Portfolio Website</span>'],
  typeSpeed: 50,
  showCursor: false,
});

// Ketikan otomatis untuk pekerjaan
const typedJob = new Typed('#typed-job', {
  strings: ['My Name Is Rifqi Alfariz', 'Web Developer', 'UI/UX Enthusiast'],
  typeSpeed: 40,
  backSpeed: 30,
  backDelay: 2000,
  startDelay: 1500,
  loop: true,
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

const logoLink = document.getElementById("logo-link");

logo.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const navItems = document.querySelectorAll('nav-links li a');

  if (hamburger && navLinks) {
    // Toggle menu saat hamburger diklik
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });

    // Tutup menu saat salah satu link diklik
    navItems.forEach(link => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });
  }
});
