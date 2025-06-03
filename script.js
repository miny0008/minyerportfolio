// Smooth scroll to Projects
function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  }

  // Navigate to receipts
function goToReceipts() {
    window.location.href = "receipts.html";
  }
  
  // Scroll animations
  const sections = document.querySelectorAll("section");
  
  const options = {
    threshold: 1,
  };
  
  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    });
  }, options);
  
  sections.forEach((section) => {
    //section.classList.add("fade-out");
    observer.observe(section);
  });

  // Toggle hamburger menu
  function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    const hamburger = document.getElementById("hamburger");
    const overlay = document.getElementById("overlay");
  
    navLinks.classList.toggle("show");
    hamburger.classList.toggle("active");
    overlay.classList.toggle("show");
  }
  
  function closeMenu() {
    document.getElementById("navLinks").classList.remove("show");
    document.getElementById("hamburger").classList.remove("active");
    document.getElementById("overlay").classList.remove("show");
  }
  
  // Also update click-to-close for nav links:
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
  

// Scroll to top button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("load", () => {
  sections.forEach((section) => {
    if (!section.classList.contains("fade-in")) {
      section.classList.add("fade-in");
    }
  });
});

  