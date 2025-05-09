const slides = [
    {
      title: "Loan",
      desc: "Apply and get a loan in just a few steps.",
    },
    {
      title: "Savings",
      desc: "Make your money work hard. Earn great interest on your savings and deposits.",
    },
    {
      title: "More",
      desc: "Pay bills, send and receive money from any Nigerian bank account.",
    },
  ];

  let currentSlide = 0;

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    const content = slides[currentSlide];
    document.getElementById("sliderContent").innerHTML = `
      <h2 class="text-2xl md:text-3xl font-semibold mb-4 text-gray-900">${content.title}</h2>
      <p class="text-gray-600 mb-4">${content.desc}</p>
      <a href="#" class="text-green-600 font-medium inline-flex items-center">Learn More →</a>
    `;
  }


  const slider = document.getElementById('testimonialSlider');
  const prevBtn = document.getElementById('prevTestimonial');
  const nextBtn = document.getElementById('nextTestimonial');
  
  let currentIndex = 0;
  const testimonialCount = 5;
  const testimonialsVisible = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 2 : 1;
  
  function updateSlider() {
    const slideWidth = 100 / testimonialsVisible;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
    
    // Disable buttons at boundaries
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= testimonialCount - testimonialsVisible;
  }
  
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });
  
  nextBtn.addEventListener('click', () => {
    if (currentIndex < testimonialCount - testimonialsVisible) {
      currentIndex++;
      updateSlider();
    }
  });
  
  // Handle window resize
  window.addEventListener('resize', () => {
    const newVisible = window.innerWidth >= 1024 ? 4 : window.innerWidth >= 768 ? 2 : 1;
    if (newVisible !== testimonialsVisible) {
      testimonialsVisible = newVisible;
      currentIndex = 0;
      updateSlider();
    }
  });
  
  // Initialize
  updateSlider();

  document.addEventListener('DOMContentLoaded', () => {
    const animateOnScroll = (elements, className) => {
      elements.forEach(el => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add(className);
            }
          });
        }, { threshold: 0.1 });
        observer.observe(el);
      });
    };
    
    animateOnScroll(document.querySelectorAll('.scroll-fade-in'), 'opacity-100 translate-y-0');
  });

  const textElement = document.getElementById('vibrating-text');
        
  function toggleVibration() {
      textElement.classList.toggle('vibrate');
  }
  
  // Vibrate every 3 seconds (vibrates for 0.3s then stops)
  setInterval(() => {
      toggleVibration();
      setTimeout(toggleVibration, 300); // Duration matches CSS animation
  }, 3000);
