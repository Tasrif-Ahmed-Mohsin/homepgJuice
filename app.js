// 2Go Eye-Soothing Homepage JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality with gentle animations
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
            
            // Gentle haptic feedback simulation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    }

    // Smooth scrolling for navigation links with gentle easing
    const navigationLinks = document.querySelectorAll('.nav-link, .footer-nav a');
    
    navigationLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle hash links
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    // Smooth scroll with gentle easing
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
                
                // Close mobile menu gently if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                }
            }
        });
    });

    // Enhanced header scroll effect with subtle transitions
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        if (currentScroll > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });

    // Gentle CTA button handlers with soothing animations
    const ctaButtons = document.querySelectorAll('.btn-accent, .hero-cta, .nav-cta, .footer-cta, .btn-outline');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Gentle click animation
            this.style.transform = 'scale(0.96)';
            this.style.transition = 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)';
            
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
            
            // Handle different CTA actions with calming messages
            const buttonText = this.textContent.trim();
            
            if (buttonText.includes('Explore') || buttonText.includes('Start')) {
                showNotification('Welcome to 2Go...', 'success');
            } else if (buttonText === 'Discover') {
                showNotification('Discovering gentle flavors...', 'info');
            } else if (buttonText === 'Learn More' || buttonText.includes('Learn')) {
                showNotification('Exploring mindful crafting...', 'info');
            } else if (buttonText.includes('Benefits')) {
                showNotification('Unveiling natural wellness...', 'success');
            }
        });
    });

    // Enhanced product card interactions with gentle hover effects
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
            this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        // Gentle click interaction
        card.addEventListener('click', function() {
            const productName = this.querySelector('h3').textContent;
            showNotification(`Exploring ${productName} - crafted with care`, 'info');
        });
    });

// Replace the existing section animation code in app.js with this:

// Gentler intersection observer for subtle fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Subtle fade-in for child elements without movement
            const childElements = entry.target.querySelectorAll('.product-card, .sourcing-item, .benefit-card, .feature');
            childElements.forEach((child, index) => {
                setTimeout(() => {
                    child.style.opacity = '1';
                }, index * 100);
            });
        }
    });
}, observerOptions);

// Observe sections for subtle animations
const sectionsToAnimate = document.querySelectorAll('.section-animate');
sectionsToAnimate.forEach(section => {
    observer.observe(section);
});

    // Add gentle scroll animation styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .section-animate {
            opacity: 0;
            transform: translateY(40px);
            transition: all 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .section-animate.animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
        
        .navbar.scrolled {
            background: linear-gradient(135deg, rgba(184, 212, 194, 0), rgba(168, 205, 184, 0));
            backdrop-filter: blur(20px);
            box-shadow: 0 8px 32px rgba(184, 212, 194, 0.0);
        }
        
        .nav-links.active {
            display: flex;
            position: fixed;
            top: 80px;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, var(--brand-secondary), #A8CDB8);
            flex-direction: column;
            padding: 30px 20px;
            box-shadow: 0 8px 32px rgba(184, 212, 194, 0.4);
            border-radius: 0 0 20px 20px;
            backdrop-filter: blur(20px);
        }
        
        .nav-links.active .nav-link {
            padding: 15px 20px;
            margin: 5px 0;
            border-radius: 15px;
            background: rgba(255, 255, 255, 0.2);
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .mobile-menu-toggle.active span:nth-child(1) {
            transform: rotate(45deg) translate(6px, 6px);
        }
        
        .mobile-menu-toggle.active span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-toggle.active span:nth-child(3) {
            transform: rotate(-45deg) translate(6px, -6px);
        }
        
       /* Add this to your style.css file to make notifications small on mobile */




/* Base notification styles */
.notification {
    position: fixed;
    top: 30px;
    right: 30px;
    padding: 14px 20px;
    background: rgba(255,255,255,.1);
    color: white;
    border-radius: 12px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
    z-index: 9999; /* Ensure it's above everything */
    transform: translateX(400px);
    transition: transform 0.3s ease-out;
    font-weight: 500;
    font-size: 14px;
    max-width: 280px;
    backdrop-filter: blur(10px);
    cursor: pointer; /* Make it dismissible by tapping */
    line-height: 1.4;
}

.notification.show {
    transform: translateX(0);
}

.notification.info {
    background: rgba(255,255,255,.1);
}

.notification.success {
    background: rgba(255,255,255,.1);
}

/* Tablet screens */
@media (max-width: 768px) {
    .notification {
        top: 10px;
        right: 10px;
        max-width: 260px;
        padding: 10px 16px;
        font-size: 13px;
        border-radius: 10px;
        box-shadow: 0 3px 12px rgba(255,255,255,.1);
    }
}

/* Mobile phones */
@media (max-width: 480px) {
    .notification {
        top: 5px;
        right: 5px;
        left: 5px;
        max-width: none;
        width: calc(100% - 10px);
        padding: 8px 12px;
        font-size: 12px;
        border-radius: 8px;
        font-weight: 400;
        min-height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        box-shadow: 0 2px 8px rgba(255,255,255,.1);
        transform: translateY(-100px); /* Come from top instead of side on mobile */
        transition: transform 0.25s ease-out;
    }
    
    .notification.show {
        transform: translateY(0);
    }
}

/* Very small screens */
@media (max-width: 320px) {
    .notification {
        padding: 6px 10px;
        font-size: 11px;
        border-radius: 6px;
    }
}
        
        .product-card,
        .sourcing-item,
        .benefit-card,
        .feature {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
    `;
    document.head.appendChild(style);

    // Gentle notification system
    function showNotification(message, type = 'info') {
        // Remove existing notification gently
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.classList.remove('show');
            setTimeout(() => {
                existingNotification.remove();
            }, 500);
        }
        
        // Create new notification with gentle appearance
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Show notification gently
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        // Hide notification gently after 4 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 500);
        }, 1500);
    }

    // Subtle parallax effect for hero section
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        const heroVisual = document.querySelector('.hero-visual');
        
        if (heroContent && heroVisual && scrolled < window.innerHeight) {
            const rate = scrolled * -0.3;
            heroContent.style.transform = `translateY(${rate * 0.3}px)`;
            heroVisual.style.transform = `translateY(${rate * 0.5}px)`;
        }
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });

    // Enhanced feature interactions
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-6px) scale(1.05)';
            this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        feature.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Gentle loading states for buttons
    function addGentleLoadingState(button) {
        const originalText = button.textContent;
        const originalBg = button.style.background;
        
        button.textContent = 'Processing...';
        button.disabled = true;
        button.style.opacity = '0.7';
        button.style.cursor = 'not-allowed';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            button.style.opacity = '';
            button.style.cursor = '';
            button.style.background = originalBg;
        }, 2500);
    }

    // Form submission handling with gentle feedback
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitButton = form.querySelector('button[type="submit"]');
            if (submitButton) {
                addGentleLoadingState(submitButton);
            }
            showNotification('Thank you for reaching out. We appreciate your interest! 🌿', 'success');
        });
    });

    // Gentle keyboard navigation improvements
    document.addEventListener('keydown', function(e) {
        // ESC key to gently close mobile menu
        if (e.key === 'Escape' && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            showNotification('Menu closed', 'info');
        }
        
        // Enter key on buttons with gentle feedback
        if (e.key === 'Enter' && e.target.classList.contains('btn')) {
            e.target.style.transform = 'scale(0.95)';
            setTimeout(() => {
                e.target.style.transform = '';
                e.target.click();
            }, 150);
        }
    });

    // Preload and optimize images for smooth experience
    function preloadImages() {
        const imageUrls = [
            // Add any critical image URLs here for preloading
        ];
        
        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
        });
    }

    preloadImages();

    // Progressive enhancement for smooth scrolling sections
    const lazyElements = document.querySelectorAll('.benefit-card, .sourcing-item, .product-card');
    
    const lazyObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
                lazyObserver.unobserve(entry.target);
            }
        });
    });

    lazyElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(25px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        lazyObserver.observe(el);
    });

    // Gentle touch gestures for mobile with haptic-like feedback
    let touchStartX = 0;
    let touchEndX = 0;
    let touchStartY = 0;
    let touchEndY = 0;

    document.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    });

    document.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleGentleSwipe();
    });

    function handleGentleSwipe() {
        const swipeThreshold = 60;
        const verticalThreshold = 100;
        
        // Only handle horizontal swipes that aren't too vertical
        if (Math.abs(touchStartY - touchEndY) < verticalThreshold) {
            if (touchEndX < touchStartX - swipeThreshold) {
                // Swipe left - close mobile menu gently
                if (window.innerWidth <= 768 && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                    showNotification('Menu closed', 'info');
                }
            }
            
            if (touchEndX > touchStartX + swipeThreshold) {
                // Swipe right - could be used for navigation
                if (window.innerWidth <= 768) {
                    showNotification('Swipe left to navigate', 'info');
                }
            }
        }
    }

    // Enhance scroll experience with momentum preservation
    let isScrolling;
    window.addEventListener('scroll', function() {
        window.clearTimeout(isScrolling);
        
        isScrolling = setTimeout(function() {
            // Scroll ended - gentle feedback
            const scrollPosition = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const sections = document.querySelectorAll('section');
            
            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPosition >= sectionTop - windowHeight/2 && 
                    scrollPosition < sectionTop + sectionHeight - windowHeight/2) {
                    // Section is in view - could add gentle active states
                }
            });
        }, 66);
    });

    // Initialize all components with gentle timing
    setTimeout(() => {
        console.log('2Go wellness website initialized with gentle care! 🌿');
        
        // Show gentle welcome message
        showNotification('Welcome to 2Go 🥤✨', 'success');
    }, 800);

    // Add gentle breathing animation to hero elements
    const heroLogo = document.querySelector('.hero-logo');
    if (heroLogo) {
        setTimeout(() => {
            heroLogo.style.animation = 'gentle-pulse 4s ease-in-out infinite';
        }, 1500);
    }

    // Add breathing animation keyframes
    const breathingStyle = document.createElement('style');
    breathingStyle.textContent = `
        @keyframes gentle-pulse {
            0%, 100% { 
                transform: scale(1);
                opacity: 1;
            }
            50% { 
                transform: scale(1.02);
                opacity: 0.95;
            }
        }
        
        .juice-glass {
            animation: gentle-glow 6s ease-in-out infinite;
        }
        
        @keyframes gentle-glow {
            0%, 100% { 
                box-shadow: 0 15px 40px rgba(0,0,0,0.3);
            }
            50% { 
                box-shadow: 0 15px 40px rgba(0,0,0,0.3), 0 0 30px rgba(245, 197, 160, 0.3);
            }
        }
    `;
    document.head.appendChild(breathingStyle);

    // Add gentle focus management for better accessibility
    const focusableElements = document.querySelectorAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');
    
    focusableElements.forEach(el => {
        el.addEventListener('focus', function() {
            this.style.outline = '3px solid rgba(245, 197, 160, 0.6)';
            this.style.outlineOffset = '2px';
        });
        
        el.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });

    // Product Showcase implementation
    class ProductShowcase {
        constructor() {
            this.currentIndex = 0;
            this.totalProducts = 4;
            this.autoPlayInterval = null;
            this.progressInterval = null;
            this.autoPlayDuration = 2500; // 2.5 seconds per slide
            this.isPlaying = true;
            this.isPaused = false;
            this.isTransitioning = false;

            this.products = [
                {
                    id: 1,
                    name: "Premium Vanilla Blend",
                    description: "Smooth and creamy with natural vanilla essence",
                    colors: {
                        primary: "#FFF8DC",
                        secondary: "#F5DEB3",
                        text: "#8B4513"
                    },
                    elements: "vanilla beans"
                },
                {
                    id: 2,
                    name: "Rich Chocolate Delight",
                    description: "Indulgent cocoa blend with real cocoa beans",
                    colors: {
                        primary: "#8B4513",
                        secondary: "#D2691E",
                        text: "#FFF8DC"
                    },
                    elements: "cocoa beans"
                },
                {
                    id: 3,
                    name: "Fresh Strawberry Burst",
                    description: "Sweet and fruity with fresh strawberry pieces",
                    colors: {
                        primary: "#FFB6C1",
                        secondary: "#FF69B4",
                        text: "#8B0000"
                    },
                    elements: "fresh strawberries"
                },
                {
                    id: 4,
                    name: "Cool Mint Refresh",
                    description: "Refreshing mint with natural mint leaves",
                    colors: {
                        primary: "#98FB98",
                        secondary: "#32CD32",
                        text: "#006400"
                    },
                    elements: "mint leaves"
                }
            ];

            this.init();
        }

        init() {
            this.bindEvents();
            this.updateProductTheme(0);
            this.updateFloatingElements(0);
            this.startAutoPlay();
            this.startProgressBar();
        }

        bindEvents() {
            // Navigation arrows
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            
            if (prevBtn) {
                prevBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.goToPrevious();
                });
            }
            
            if (nextBtn) {
                nextBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    this.goToNext();
                });
            }

            // Dot indicators
            const dotContainer = document.getElementById('dotIndicators');
            if (dotContainer) {
                dotContainer.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    if (e.target.classList.contains('dot')) {
                        const index = parseInt(e.target.getAttribute('data-index'));
                        if (!isNaN(index)) {
                            this.goToSlide(index);
                        }
                    }
                });
            }

            // Pause on hover
            const showcase = document.getElementById('productShowcase');
            if (showcase) {
                showcase.addEventListener('mouseenter', () => this.pauseAutoPlay());
                showcase.addEventListener('mouseleave', () => this.resumeAutoPlay());
            }

            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    this.goToPrevious();
                } else if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    this.goToNext();
                }
            });

            // Touch/swipe support for mobile
            this.addTouchSupport();
        }

        addTouchSupport() {
            const showcase = document.getElementById('productShowcase');
            if (!showcase) return;
            
            let startX = 0;
            let startY = 0;
            let endX = 0;
            let endY = 0;

            showcase.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
            }, { passive: true });

            showcase.addEventListener('touchend', (e) => {
                endX = e.changedTouches[0].clientX;
                endY = e.changedTouches[0].clientY;
                
                const deltaX = endX - startX;
                const deltaY = endY - startY;
                
                // Only trigger swipe if horizontal movement is greater than vertical
                if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                    if (deltaX > 0) {
                        this.goToPrevious();
                    } else {
                        this.goToNext();
                    }
                }
            }, { passive: true });
        }

        goToNext() {
            if (this.isTransitioning) return;
            const nextIndex = (this.currentIndex + 1) % this.totalProducts;
            this.slideToProduct(nextIndex);
        }

        goToPrevious() {
            if (this.isTransitioning) return;
            const prevIndex = (this.currentIndex - 1 + this.totalProducts) % this.totalProducts;
            this.slideToProduct(prevIndex);
        }

        goToSlide(index) {
            if (index === this.currentIndex || this.isTransitioning) return;
            this.slideToProduct(index);
        }

        slideToProduct(targetIndex) {
            if (this.isTransitioning || targetIndex === this.currentIndex) return;

            this.isTransitioning = true;
            
            const slides = document.querySelectorAll('.product-slide');
            const currentSlide = slides[this.currentIndex];
            const nextSlide = slides[targetIndex];

            if (!currentSlide || !nextSlide) {
                this.isTransitioning = false;
                return;
            }

            // Clean up any existing transition classes
            slides.forEach(slide => {
                slide.classList.remove('slide-out-right', 'slide-in-left', 'transitioning');
                slide.style.transform = '';
                slide.style.opacity = '';
            });

            // Prepare next slide (position it off-screen to the left)
            nextSlide.classList.add('slide-in-left');
            nextSlide.style.transform = 'translateX(-100%)';
            nextSlide.style.opacity = '0';

            // Force reflow
            nextSlide.offsetHeight;

            // Start transition
            requestAnimationFrame(() => {
                // Current slide moves out to the right
                currentSlide.classList.add('slide-out-right');
                currentSlide.classList.remove('active');
                
                // Next slide moves in from the left
                nextSlide.classList.remove('slide-in-left');
                nextSlide.classList.add('active');
                nextSlide.style.transform = 'translateX(0)';
                nextSlide.style.opacity = '1';

                // Update theme and indicators immediately
                this.updateProductTheme(targetIndex);
                this.updateFloatingElements(targetIndex);
                this.updateDotIndicators(targetIndex);
            });

            // Update current index immediately
            this.currentIndex = targetIndex;

            // Clean up after transition
            setTimeout(() => {
                slides.forEach(slide => {
                    slide.classList.remove('slide-out-right', 'slide-in-left', 'transitioning');
                    if (slide !== nextSlide) {
                        slide.classList.remove('active');
                    }
                    slide.style.transform = '';
                    slide.style.opacity = '';
                });
                
                this.isTransitioning = false;
            }, 800);

            // Restart auto-play and progress bar
            this.restartAutoPlay();
        }

        updateProductTheme(index) {
            document.body.setAttribute('data-product', index);
            
            // Smoothly update the background overlay
            const overlay = document.querySelector('.background-overlay');
            const product = this.products[index];
            
            if (overlay && product) {
                overlay.style.background = `linear-gradient(135deg, ${product.colors.primary}, ${product.colors.secondary})`;
            }
        }

        updateFloatingElements(index) {
            const floatingContainer = document.getElementById('floatingElements');
            if (!floatingContainer) return;

            const elements = ['vanilla-bean', 'cocoa-bean', 'strawberry', 'mint-leaf'];
            const currentClass = elements[index];

            // Remove all element classes and add the current one
            floatingContainer.querySelectorAll('.floating-element').forEach(element => {
                elements.forEach(cls => element.classList.remove(cls));
                element.classList.add(currentClass);
            });
        }

        updateDotIndicators(index) {
            const dots = document.querySelectorAll('.dot');
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }

        startAutoPlay() {
            if (!this.isPlaying) return;
            
            this.stopAutoPlay();
            this.autoPlayInterval = setInterval(() => {
                if (!this.isPaused && !this.isTransitioning) {
                    this.goToNext();
                }
            }, this.autoPlayDuration);
        }

        stopAutoPlay() {
            if (this.autoPlayInterval) {
                clearInterval(this.autoPlayInterval);
                this.autoPlayInterval = null;
            }
        }

        restartAutoPlay() {
            this.stopAutoPlay();
            this.stopProgressBar();
            // Use a shorter delay to ensure smoother transitions
            setTimeout(() => {
                if (this.isPlaying && !this.isPaused) {
                    this.startAutoPlay();
                    this.startProgressBar();
                }
            }, 50);
        }

        pauseAutoPlay() {
            this.isPaused = true;
            this.stopProgressBar();
        }

        resumeAutoPlay() {
            this.isPaused = false;
            if (this.isPlaying && !this.isTransitioning) {
                this.startAutoPlay();
                this.startProgressBar();
            }
        }

        startProgressBar() {
            const progressFill = document.getElementById('progressFill');
            if (!progressFill) return;
            
            let progress = 0;
            const increment = 100 / (this.autoPlayDuration / 50); // Update every 50ms
            
            this.stopProgressBar();
            
            progressFill.style.width = '0%';
            progressFill.style.transition = 'width 0.05s linear';
            
            this.progressInterval = setInterval(() => {
                if (!this.isPaused && this.isPlaying && !this.isTransitioning) {
                    progress += increment;
                    progressFill.style.width = `${Math.min(progress, 100)}%`;
                    
                    if (progress >= 100) {
                        progress = 0;
                    }
                }
            }, 50);
        }

        stopProgressBar() {
            if (this.progressInterval) {
                clearInterval(this.progressInterval);
                this.progressInterval = null;
            }
            
            // Reset progress bar
            const progressFill = document.getElementById('progressFill');
            if (progressFill) {
                progressFill.style.width = '0%';
            }
        }

        // Method to toggle auto-play (could be used for a play/pause button)
        toggleAutoPlay() {
            this.isPlaying = !this.isPlaying;
            
            if (this.isPlaying) {
                this.startAutoPlay();
                this.startProgressBar();
            } else {
                this.stopAutoPlay();
                this.stopProgressBar();
            }
        }

        // Cleanup method
        destroy() {
            this.stopAutoPlay();
            this.stopProgressBar();
        }
    }

    // Initialize the showcase if the products section exists
    const productSection = document.getElementById('products');
    if (productSection) {
        const showcase = new ProductShowcase();
        
        // Handle visibility change (pause when tab is not active)
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                showcase.pauseAutoPlay();
            } else {
                showcase.resumeAutoPlay();
            }
        });
        
        // Store reference globally for debugging
        window.productShowcase = showcase;
    }

    // Add text position offset for product showcase
    function adjustTextPosition(offset) {
        document.documentElement.style.setProperty('--text-offset', offset + 'px');
    }

    // Initialize text offset for product showcase
    adjustTextPosition(100);

    // Preload showcase images for smoother transitions
    const showcaseImageUrls = [
        'https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/2b7da868-6c54-4b4e-af92-cd0d951f742e.png',
        'https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/21556af9-9504-41dd-9890-4de04d40cf8e.png',
        'https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/741486e3-8a93-4539-8e15-354f1d83426a.png',
        'https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/681afa88-d050-4675-9ab7-12b3e42be765.png'
    ];

    showcaseImageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
});






// This will completely remove the animations by immediately setting elements to their final state

document.addEventListener('DOMContentLoaded', function() {
    // Remove animation classes
    document.querySelectorAll('.section-animate').forEach(section => {
        section.classList.remove('section-animate');
        section.classList.add('animate-in');
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
    });
    
    // Set all child elements to their final state
    document.querySelectorAll('.product-card, .sourcing-item, .benefit-card, .feature').forEach(element => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        element.style.transition = 'none';
    });
    
    // Remove the animation style
    const styleTag = document.createElement('style');
    styleTag.textContent = `
        .section-animate {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
        }
        
        .product-card, .sourcing-item, .benefit-card, .feature {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
        }
    `;
    document.head.appendChild(styleTag);
});