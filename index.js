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
    threshold: 0.1,
  };
  
  const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    });
  }, options);
  
  sections.forEach((section) => {
    section.classList.add("fade-out");
    observer.observe(section);
  });
  