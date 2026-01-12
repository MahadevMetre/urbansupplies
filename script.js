// DOM Elements
const slides = document.querySelector(".slides");
const dots = document.querySelectorAll(".dot");
const navPrev = document.querySelector(".nav-btn.prev");
const navNext = document.querySelector(".nav-btn.next");
const testimonialSlider = document.querySelector(".testimonial-slider");
const testimonials = document.querySelectorAll(".testimonial");
const testimonialDots = document.querySelectorAll(".testimonial-dot");
const testimonialPrev = document.querySelector(".testimonial-prev");
const testimonialNext = document.querySelector(".testimonial-next");
const faqItems = document.querySelectorAll(".faq-item");
const quickAddButtons = document.querySelectorAll(".btn-quick-add");
const cartModal = document.querySelector(".cart-modal");
const closeCartBtn = document.querySelector(".close-cart");
const cartProductName = document.querySelector(".cart-product-name");

// Slider Variables
let currentSlide = 0;
const totalSlides = dots.length;
let slideInterval;

// Testimonial Variables
let currentTestimonial = 0;
const totalTestimonials = testimonials.length;
let testimonialInterval;

// Initialize Slider
function initSlider() {
  showSlide(currentSlide);
  startSlideInterval();
  
  // Navigation Events
  navPrev.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
    resetSlideInterval();
  });
  
  navNext.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
    resetSlideInterval();
  });
  
  // Dot Events
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentSlide = index;
      showSlide(currentSlide);
      resetSlideInterval();
    });
  });
}

// Show Slide
function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
  
  // Update dots
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
  
  // Update slides
  document.querySelectorAll(".slide").forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

// Slide Interval
function startSlideInterval() {
  slideInterval = setInterval(() => {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }, 5000);
}

function resetSlideInterval() {
  clearInterval(slideInterval);
  startSlideInterval();
}

// Initialize Testimonials
function initTestimonials() {
  showTestimonial(currentTestimonial);
  startTestimonialInterval();
  
  // Navigation Events
  testimonialPrev.addEventListener("click", () => {
    currentTestimonial = (currentTestimonial - 1 + totalTestimonials) % totalTestimonials;
    showTestimonial(currentTestimonial);
    resetTestimonialInterval();
  });
  
  testimonialNext.addEventListener("click", () => {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
    resetTestimonialInterval();
  });
  
  // Dot Events
  testimonialDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentTestimonial = index;
      showTestimonial(currentTestimonial);
      resetTestimonialInterval();
    });
  });
}

// Show Testimonial
function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.toggle("active", i === index);
  });
  
  testimonialDots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

// Testimonial Interval
function startTestimonialInterval() {
  testimonialInterval = setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;
    showTestimonial(currentTestimonial);
  }, 7000);
}

function resetTestimonialInterval() {
  clearInterval(testimonialInterval);
  startTestimonialInterval();
}

// FAQ Accordion
function initFAQ() {
  faqItems.forEach((item, index) => {
    const question = item.querySelector(".faq-question");
    
    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("active");
      
      // Close all other items
      if (!isOpen) {
        faqItems.forEach((i) => i.classList.remove("active"));
      }
      
      // Toggle current item
      item.classList.toggle("active");
    });
  });
}

// Quick Add to Cart
function initQuickAdd() {
  quickAddButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      const productName = button.getAttribute("data-product");
      cartProductName.textContent = productName;
      
      // Show cart modal
      cartModal.classList.add("active");
      
      // Prevent default
      e.preventDefault();
    });
  });
  
  // Close cart modal
  closeCartBtn.addEventListener("click", () => {
    cartModal.classList.remove("active");
  });
  
  // Close modal when clicking outside
  cartModal.addEventListener("click", (e) => {
    if (e.target === cartModal) {
      cartModal.classList.remove("active");
    }
  });
}

// Smooth Scrolling for Anchor Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Newsletter Form Submission
function initNewsletter() {
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;
      
      // Here you would typically send this to your backend
      // For now, we'll just show an alert
      alert(`Thank you for subscribing with ${email}! You'll receive exclusive deals soon.`);
      this.reset();
    });
  }
}

// YouTube Video Player
function initVideoPlayer() {
  const videoPreview = document.getElementById('videoPreview');
  const videoEmbed = document.getElementById('videoEmbed');
  const youtubeVideo = document.getElementById('youtubeVideo');
  const closeVideo = document.getElementById('closeVideo');
  
  if (!videoPreview) return;
  
  // YouTube video ID from your link: https://youtu.be/RJwy7DDF_c0
  const videoId = 'RJwy7DDF_c0';
  
  // Open video when clicking preview
  videoPreview.addEventListener('click', () => {
    // Hide preview, show embedded video
    videoPreview.style.display = 'none';
    videoEmbed.style.display = 'block';
    
    // Set the iframe src with autoplay and no related videos
    youtubeVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0`;
    
    // Add a loading state
    youtubeVideo.style.opacity = '0';
    setTimeout(() => {
      youtubeVideo.style.opacity = '1';
      youtubeVideo.style.transition = 'opacity 0.3s ease';
    }, 300);
    
    // Track video play (optional for analytics)
    console.log('Video started playing');
    
    // Add a class to body to prevent scrolling while video is open
    document.body.classList.add('video-open');
  });
  
  // Close video
  closeVideo.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event bubbling
    
    // Show preview, hide embedded video
    videoPreview.style.display = 'block';
    videoEmbed.style.display = 'none';
    
    // Stop the video by removing src
    youtubeVideo.src = '';
    
    // Remove video-open class
    document.body.classList.remove('video-open');
    
    console.log('Video closed');
  });
  
  // Close video when clicking outside (optional)
  videoEmbed.addEventListener('click', (e) => {
    if (e.target === videoEmbed) {
      closeVideo.click();
    }
  });
  
  // Close video with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoEmbed.style.display === 'block') {
      closeVideo.click();
    }
  });
  
  // Lazy load the thumbnail (if needed)
  const thumbnailImg = document.querySelector('.thumbnail-img');
  if (thumbnailImg) {
    // Force high-quality thumbnail
    thumbnailImg.src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    
    // Fallback to high quality if maxresdefault doesn't exist
    thumbnailImg.onerror = function() {
      this.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    };
  }
}

// Animate Elements on Scroll
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  
  // Observe elements you want to animate
  document.querySelectorAll('.category-card, .product-card, .benefit-card, .step, .video-feature').forEach(el => {
    observer.observe(el);
  });
}

// Initialize Everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initSlider();
  initTestimonials();
  initFAQ();
  initQuickAdd();
  initSmoothScroll();
  initNewsletter();
  initVideoPlayer(); // Initialize video player
  initScrollAnimations();
  
  // Add animation classes
  document.body.classList.add('loaded');
});

// Add CSS animations for scroll effects
const style = document.createElement('style');
style.textContent = `
  .animate-in {
    animation: fadeInUp 0.6s ease forwards;
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .category-card, .product-card, .benefit-card, .step, .video-feature {
    opacity: 0;
  }
  
  .category-card:nth-child(1) { animation-delay: 0.1s; }
  .category-card:nth-child(2) { animation-delay: 0.2s; }
  .category-card:nth-child(3) { animation-delay: 0.3s; }
  .category-card:nth-child(4) { animation-delay: 0.4s; }
  .category-card:nth-child(5) { animation-delay: 0.5s; }
  .category-card:nth-child(6) { animation-delay: 0.6s; }
  
  .product-card:nth-child(1) { animation-delay: 0.1s; }
  .product-card:nth-child(2) { animation-delay: 0.2s; }
  .product-card:nth-child(3) { animation-delay: 0.3s; }
  .product-card:nth-child(4) { animation-delay: 0.4s; }
  
  .benefit-card:nth-child(1) { animation-delay: 0.1s; }
  .benefit-card:nth-child(2) { animation-delay: 0.2s; }
  .benefit-card:nth-child(3) { animation-delay: 0.3s; }
  .benefit-card:nth-child(4) { animation-delay: 0.4s; }
  
  .step:nth-child(1) { animation-delay: 0.1s; }
  .step:nth-child(2) { animation-delay: 0.2s; }
  .step:nth-child(3) { animation-delay: 0.3s; }
  
  .video-feature:nth-child(1) { animation-delay: 0.1s; }
  .video-feature:nth-child(2) { animation-delay: 0.2s; }
  .video-feature:nth-child(3) { animation-delay: 0.3s; }
  
  /* Prevent scrolling when video is open */
  body.video-open {
    overflow: hidden;
  }
`;
document.head.appendChild(style);