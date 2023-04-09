const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
  
    burger.addEventListener("click", () => {
      // Toggle Nav
      nav.classList.toggle("nav-active");
  
      // Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `fadeIn 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
      });
  
      // Burger Animation
      burger.classList.toggle("toggle");
    });
  
    // Fix menu disappearing bug when resizing window
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768 && nav.classList.contains("nav-active")) {
        nav.classList.remove("nav-active");
        burger.classList.remove("toggle");
        navLinks.forEach((link) => {
          link.style.animation = "";
        });
      }
    });
  };
  
  navSlide();

  const hamburger = document.querySelector(".burger");
  const navLinks = document.querySelector(".nav-links");
  
  
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
    
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
