// Article data
const articles = [
  {
    id: 1,
    title: "The Art of Minimalist Living",
    excerpt: "Exploring how simplicity can transform your daily life and bring deeper meaning to everyday experiences.",
    content: "In our increasingly complex world, the philosophy of minimalist living offers a refreshing perspective on what truly matters. Minimalism isn't about deprivation or living with nothing—it's about intentional living and focusing on what adds genuine value to your life.\n\nThe journey toward minimalist living begins with a simple question: Does this serve my life's purpose? This question can be applied to everything from the objects in your home to the commitments on your calendar. When we eliminate the excess, we create space for what matters most.\n\nMany people associate minimalism solely with decluttering physical possessions, but true minimalist living extends far beyond material items. It encompasses our digital lives, our relationships, our work, and our mental space. By reducing digital distractions, we can engage more deeply with the people and activities that bring us joy.\n\nThe benefits of minimalist living are both immediate and long-lasting. Reduced clutter leads to reduced stress, as our environment directly impacts our mental state. With fewer possessions to maintain and organize, we gain time and energy for meaningful pursuits. Financial benefits naturally follow as we become more intentional about our purchases.\n\nStarting your minimalist journey doesn't require dramatic changes overnight. Begin with one area—perhaps your wardrobe or workspace—and gradually expand your approach. Remember, minimalism looks different for everyone. The goal isn't to achieve some arbitrary standard, but to create a life that aligns with your values and priorities.",
    author: "Sarah Chen",
    date: "2025-08-01",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Digital Detox: Reclaiming Your Mental Space",
    excerpt: "Understanding the importance of disconnecting from digital devices to reconnect with yourself and the world around you.",
    content: "In the age of constant connectivity, our minds have become battlegrounds for attention. Notifications, alerts, and the endless scroll of social media have fundamentally changed how we think, focus, and relate to the world around us. A digital detox isn't just a trendy wellness practice—it's becoming a necessity for mental health and cognitive well-being.\n\nResearch shows that the average person checks their phone 96 times per day, creating a state of continuous partial attention that prevents deep focus and meaningful engagement. This constant stimulation has rewired our brains, making it increasingly difficult to engage in sustained thinking or simply be present in the moment.\n\nThe symptoms of digital overwhelm are becoming increasingly common: difficulty concentrating, sleep disruption, anxiety when separated from devices, and a sense of being perpetually 'behind' on information consumption. These symptoms signal that our relationship with technology has become unbalanced and potentially harmful.\n\nA successful digital detox doesn't require abandoning technology entirely. Instead, it involves creating intentional boundaries that allow technology to serve us rather than control us. Start by establishing phone-free zones in your home, such as the bedroom or dining area. Implement specific times for checking emails and social media rather than responding to every notification immediately.\n\nThe benefits of regular digital breaks extend beyond reduced screen time. People report improved sleep quality, enhanced creativity, stronger real-world relationships, and a greater sense of presence and mindfulness in daily activities. By reclaiming control over our digital consumption, we reclaim control over our attention and, ultimately, our lives.",
    author: "Marcus Johnson",
    date: "2025-07-28",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Sustainable Fashion: Beyond Fast Fashion",
    excerpt: "Exploring ethical alternatives to fast fashion and how conscious clothing choices can impact both personal style and environmental health.",
    content: "The fashion industry stands as one of the world's most polluting industries, responsible for 10% of global carbon emissions and 20% of global water waste. Fast fashion, characterized by rapid production cycles and disposable clothing, has created an environmental crisis that demands immediate attention from both consumers and industry leaders.\n\nFast fashion's true cost extends far beyond price tags. The industry's reliance on synthetic materials, chemical dyes, and exploitative labor practices creates a complex web of environmental and social problems. Microplastics from synthetic clothing pollute our oceans, while textile waste overwhelms landfills with 92 million tons of clothing waste annually.\n\nSustainable fashion offers hope through various approaches: buying less but buying better, choosing natural and organic materials, supporting ethical brands, and embracing circular fashion practices like clothing swaps and upcycling. These choices represent a shift from quantity-focused to quality-focused consumption.\n\nBuilding a sustainable wardrobe begins with assessment. Evaluate your current clothing with fresh eyes—what do you actually wear? What brings you joy? A capsule wardrobe approach, focusing on versatile, high-quality pieces that can be mixed and matched, often provides more outfit options than a closet full of trendy items.\n\nThe concept of cost-per-wear revolutionizes how we think about clothing investments. A well-made jacket worn 100 times costs less per wear than a cheap jacket worn five times before falling apart. This mindset encourages thoughtful purchasing decisions that benefit both your wallet and the environment.\n\nEmerging alternatives to traditional shopping include clothing rental services, subscription boxes focused on sustainable brands, and online marketplaces for pre-loved items. These options make sustainable fashion more accessible and affordable for people at various income levels.",
    author: "Emma Rodriguez",
    date: "2025-07-25",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=400&fit=crop"
  },
  {
    id: 4,
    title: "The Science of Mindful Breathing",
    excerpt: "Discovering how conscious breathing techniques can reduce stress, improve focus, and enhance overall well-being through scientific understanding.",
    content: "Breathing is the most fundamental of human functions, yet most of us pay little attention to this powerful tool for physical and mental well-being. Scientific research has revealed that conscious breathing techniques can profoundly impact our nervous system, stress levels, cognitive function, and overall health.\n\nThe connection between breath and mental state runs deeper than many realize. When we're stressed or anxious, our breathing becomes shallow and rapid, triggering the sympathetic nervous system's fight-or-flight response. Conversely, slow, deep breathing activates the parasympathetic nervous system, promoting relaxation and recovery.\n\nNeuroscience research has identified specific breathing patterns that optimize brain function. The 4-7-8 technique—inhaling for 4 counts, holding for 7, and exhaling for 8—has been shown to reduce cortisol levels and improve sleep quality. Box breathing, used by Navy SEALs and elite athletes, enhances focus and emotional regulation through equal counts of inhaling, holding, exhaling, and holding again.\n\nThe physiological benefits of mindful breathing extend throughout the body. Proper breathing techniques can lower blood pressure, improve heart rate variability, boost immune function, and enhance oxygen delivery to cells. These changes occur remarkably quickly—just five minutes of conscious breathing can shift your physiological state.\n\nFor beginners, the key is consistency rather than complexity. Start with simple awareness of your natural breath, noticing the sensation of air entering and leaving your body. Gradually incorporate techniques like belly breathing, where the diaphragm moves freely and the belly expands on inhalation.\n\nAdvanced practitioners explore techniques from various traditions: pranayama from yoga, qigong breathing from traditional Chinese medicine, and Wim Hof's method combining breathing with cold exposure. Each approach offers unique benefits while building on the fundamental principle that conscious breathing is a gateway to enhanced well-being.",
    author: "Dr. James Liu",
    date: "2025-07-22",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=400&fit=crop"
  }
];

// Application state
let currentArticleId = null;
let comments = {}; // Store comments in memory instead of localStorage

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeComments();
    renderArticlesGrid();
    setupEventListeners();
});

// Initialize comments with sample data for demonstration
function initializeComments() {
    comments = {
        1: [
            {
                name: "Alex Thompson",
                email: "alex@example.com",
                text: "This article really resonated with me. I've been trying to adopt a more minimalist approach to my living space, and your insights about focusing on what truly adds value are so helpful. Thank you for sharing!",
                date: "2025-08-02"
            },
            {
                name: "Maria Santos",
                email: "maria@example.com", 
                text: "I love the idea that minimalism isn't about deprivation. It's refreshing to see it framed as intentional living rather than just getting rid of stuff. Going to start applying that question: 'Does this serve my life's purpose?'",
                date: "2025-08-03"
            }
        ],
        2: [
            {
                name: "David Chen",
                email: "david@example.com",
                text: "96 times per day?! That's eye-opening. I never realized how much my phone usage was affecting my ability to focus. Starting my first digital detox this weekend based on your suggestions.",
                date: "2025-07-29"
            }
        ],
        3: [
            {
                name: "Sophie Williams", 
                email: "sophie@example.com",
                text: "The cost-per-wear concept is brilliant! I've been tracking this for my wardrobe over the past year and it's completely changed how I shop. Quality over quantity really does make financial sense.",
                date: "2025-07-26"
            }
        ],
        4: []
    };
}

// Render articles grid on main page
function renderArticlesGrid() {
    const articlesGrid = document.getElementById('articles-grid');
    if (!articlesGrid) return;
    
    articlesGrid.innerHTML = '';
    
    articles.forEach((article, index) => {
        const articleElement = document.createElement('div');
        articleElement.className = 'article-preview fade-in';
        articleElement.style.animationDelay = `${index * 0.1}s`;
        articleElement.tabIndex = 0;
        articleElement.setAttribute('role', 'button');
        articleElement.setAttribute('aria-label', `Read article: ${article.title}`);
        articleElement.dataset.articleId = article.id;
        
        articleElement.innerHTML = `
            <img src="${article.image}" alt="${article.title}" class="article-preview__image" loading="lazy">
            <div class="article-preview__content">
                <h2 class="article-preview__title">${escapeHtml(article.title)}</h2>
                <p class="article-preview__excerpt">${escapeHtml(article.excerpt)}</p>
                <div class="article-preview__meta">
                    <span class="article-preview__date">${formatDate(article.date)}</span>
                    <button class="btn btn--primary btn--sm article-preview__read-more" data-article-id="${article.id}" aria-label="Read ${article.title}">
                        Read More
                    </button>
                </div>
            </div>
        `;
        
        articlesGrid.appendChild(articleElement);
    });
    
    // Add event listeners to the newly created elements
    addArticlePreviewListeners();
}

// Add event listeners to article previews
function addArticlePreviewListeners() {
    // Article preview click events (for the whole card)
    const articlePreviews = document.querySelectorAll('.article-preview');
    articlePreviews.forEach(preview => {
        preview.addEventListener('click', function(e) {
            // Don't trigger if clicking on the Read More button specifically
            if (e.target.classList.contains('article-preview__read-more')) {
                return;
            }
            e.preventDefault();
            const articleId = parseInt(this.dataset.articleId);
            if (articleId) {
                showArticle(articleId);
            }
        });
        
        preview.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const articleId = parseInt(this.dataset.articleId);
                if (articleId) {
                    showArticle(articleId);
                }
            }
        });
    });
    
    // Read More button specific click events
    const readMoreBtns = document.querySelectorAll('.article-preview__read-more');
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation(); // Prevent event bubbling to parent
            const articleId = parseInt(this.dataset.articleId);
            if (articleId) {
                showArticle(articleId);
            }
        });
    });
}

// Show individual article
function showArticle(articleId) {
    const article = articles.find(a => a.id === articleId);
    if (!article) {
        console.error('Article not found:', articleId);
        return;
    }
    
    currentArticleId = articleId;
    
    const articleFull = document.getElementById('article-full');
    if (!articleFull) {
        console.error('Article full container not found');
        return;
    }
    
    // Render article content
    articleFull.innerHTML = `
        <img src="${article.image}" alt="${escapeHtml(article.title)}" class="article-full__hero" loading="lazy">
        <h1 class="article-full__title">${escapeHtml(article.title)}</h1>
        <div class="article-full__meta">
            <span>By ${escapeHtml(article.author)}</span>
            <span>${formatDate(article.date)}</span>
        </div>
        <div class="article-full__content">
            ${article.content.split('\n\n').map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join('')}
        </div>
    `;
    
    // Load and render comments
    loadComments(articleId);
    
    // Update navigation buttons
    updateNavigationButtons();
    
    // Switch pages
    const mainPage = document.getElementById('main-page');
    const articlePage = document.getElementById('article-page');
    
    if (mainPage && articlePage) {
        mainPage.classList.add('hidden');
        articlePage.classList.remove('hidden');
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Clear and reset form
        resetCommentForm();
    }
}

// Show main page
function showMainPage() {
    const mainPage = document.getElementById('main-page');
    const articlePage = document.getElementById('article-page');
    
    if (mainPage && articlePage) {
        articlePage.classList.add('hidden');
        mainPage.classList.remove('hidden');
        currentArticleId = null;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Update navigation buttons
function updateNavigationButtons() {
    const currentIndex = articles.findIndex(a => a.id === currentArticleId);
    const prevIndex = currentIndex === 0 ? articles.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === articles.length - 1 ? 0 : currentIndex + 1;
    
    const prevArticle = articles[prevIndex];
    const nextArticle = articles[nextIndex];
    
    const prevBtn = document.getElementById('prev-article-btn');
    const nextBtn = document.getElementById('next-article-btn');
    
    if (prevBtn && prevArticle) {
        prevBtn.innerHTML = `← ${escapeHtml(prevArticle.title)}`;
        prevBtn.setAttribute('aria-label', `Go to previous article: ${prevArticle.title}`);
    }
    
    if (nextBtn && nextArticle) {
        nextBtn.innerHTML = `${escapeHtml(nextArticle.title)} →`;
        nextBtn.setAttribute('aria-label', `Go to next article: ${nextArticle.title}`);
    }
}

// Navigate to previous article
function showPreviousArticle() {
    if (!currentArticleId) return;
    
    const currentIndex = articles.findIndex(a => a.id === currentArticleId);
    const prevIndex = currentIndex === 0 ? articles.length - 1 : currentIndex - 1;
    const prevArticle = articles[prevIndex];
    if (prevArticle) {
        showArticle(prevArticle.id);
    }
}

// Navigate to next article
function showNextArticle() {
    if (!currentArticleId) return;
    
    const currentIndex = articles.findIndex(a => a.id === currentArticleId);
    const nextIndex = currentIndex === articles.length - 1 ? 0 : currentIndex + 1;
    const nextArticle = articles[nextIndex];
    if (nextArticle) {
        showArticle(nextArticle.id);
    }
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// Comments functionality
function loadComments(articleId) {
    const articleComments = comments[articleId] || [];
    renderComments(articleComments);
}

function renderComments(articleComments) {
    const commentsList = document.getElementById('comments-list');
    if (!commentsList) return;
    
    if (articleComments.length === 0) {
        commentsList.innerHTML = '<div class="empty-comments">No comments yet. Be the first to share your thoughts!</div>';
        return;
    }
    
    commentsList.innerHTML = articleComments.map((comment, index) => `
        <div class="comment fade-in" style="animation-delay: ${index * 0.1}s">
            <div class="comment__header">
                <span class="comment__author">${escapeHtml(comment.name)}</span>
                <span class="comment__date">${formatDate(comment.date)}</span>
            </div>
            <p class="comment__text">${escapeHtml(comment.text)}</p>
        </div>
    `).join('');
}

// Form validation and submission
function validateForm() {
    const nameField = document.getElementById('comment-name');
    const emailField = document.getElementById('comment-email');
    const textField = document.getElementById('comment-text');
    
    if (!nameField || !emailField || !textField) {
        console.error('Form fields not found');
        return false;
    }
    
    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const text = textField.value.trim();
    
    let isValid = true;
    
    // Clear previous errors
    clearFormErrors();
    
    // Validate name
    if (!name) {
        showFieldError('comment-name', 'Name is required');
        isValid = false;
    } else if (name.length < 2) {
        showFieldError('comment-name', 'Name must be at least 2 characters');
        isValid = false;
    } else if (name.length > 50) {
        showFieldError('comment-name', 'Name must be less than 50 characters');
        isValid = false;
    }
    
    // Validate email
    if (!email) {
        showFieldError('comment-email', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showFieldError('comment-email', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate comment text
    if (!text) {
        showFieldError('comment-text', 'Comment is required');
        isValid = false;
    } else if (text.length < 10) {
        showFieldError('comment-text', 'Comment must be at least 10 characters');
        isValid = false;
    } else if (text.length > 1000) {
        showFieldError('comment-text', 'Comment must be less than 1000 characters');
        isValid = false;
    }
    
    return isValid;
}

function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    
    field.classList.add('error');
    field.setAttribute('aria-invalid', 'true');
    
    const errorElement = document.createElement('span');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.setAttribute('role', 'alert');
    
    field.parentNode.appendChild(errorElement);
}

function clearFormErrors() {
    const errorFields = document.querySelectorAll('.form-control.error');
    const errorMessages = document.querySelectorAll('.error-message');
    
    errorFields.forEach(field => {
        field.classList.remove('error');
        field.removeAttribute('aria-invalid');
    });
    errorMessages.forEach(message => message.remove());
    
    // Remove success message if exists
    const successMessage = document.querySelector('.success-message');
    if (successMessage) {
        successMessage.remove();
    }
}

function showSuccessMessage() {
    const commentForm = document.getElementById('comment-form');
    if (!commentForm) return;
    
    const successElement = document.createElement('div');
    successElement.className = 'success-message fade-in';
    successElement.textContent = 'Your comment has been posted successfully!';
    successElement.setAttribute('role', 'status');
    
    commentForm.parentNode.insertBefore(successElement, commentForm);
    
    // Remove after 5 seconds
    setTimeout(() => {
        if (successElement.parentNode) {
            successElement.parentNode.removeChild(successElement);
        }
    }, 5000);
}

function resetCommentForm() {
    const commentForm = document.getElementById('comment-form');
    if (commentForm) {
        commentForm.reset();
        clearFormErrors();
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function escapeHtml(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Setup all event listeners
function setupEventListeners() {
    // Back to home button
    const backHomeBtn = document.getElementById('back-home-btn');
    if (backHomeBtn) {
        backHomeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showMainPage();
        });
    }
    
    // Navigation buttons
    const prevArticleBtn = document.getElementById('prev-article-btn');
    const nextArticleBtn = document.getElementById('next-article-btn');
    
    if (prevArticleBtn) {
        prevArticleBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showPreviousArticle();
        });
    }
    
    if (nextArticleBtn) {
        nextArticleBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showNextArticle();
        });
    }
    
    // Comment form
    const commentForm = document.getElementById('comment-form');
    if (commentForm) {
        commentForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!validateForm()) {
                // Focus on the first error field
                const firstError = document.querySelector('.form-control.error');
                if (firstError) {
                    firstError.focus();
                }
                return;
            }
            
            // Get form values
            const nameField = document.getElementById('comment-name');
            const emailField = document.getElementById('comment-email');
            const textField = document.getElementById('comment-text');
            
            if (!nameField || !emailField || !textField || !currentArticleId) {
                console.error('Form submission failed: missing fields or article ID');
                return;
            }
            
            const name = nameField.value.trim();
            const email = emailField.value.trim();
            const text = textField.value.trim();
            
            const comment = {
                name: name,
                email: email,
                text: text,
                date: new Date().toISOString().split('T')[0]
            };
            
            // Save comment to memory
            if (!comments[currentArticleId]) {
                comments[currentArticleId] = [];
            }
            comments[currentArticleId].unshift(comment); // Add to beginning
            
            // Reload comments
            loadComments(currentArticleId);
            
            // Clear form and show success
            resetCommentForm();
            showSuccessMessage();
            
            // Scroll to comments section
            const commentsSection = document.querySelector('.comments-section');
            if (commentsSection) {
                commentsSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (currentArticleId) {
            if (e.key === 'ArrowLeft' && e.altKey) {
                e.preventDefault();
                showPreviousArticle();
            } else if (e.key === 'ArrowRight' && e.altKey) {
                e.preventDefault();
                showNextArticle();
            } else if (e.key === 'Escape') {
                e.preventDefault();
                showMainPage();
            }
        }
    });
    
    // Handle hero button scroll
    const heroButton = document.querySelector('.btn--hero');
    if (heroButton) {
        heroButton.addEventListener('click', function(e) {
            e.preventDefault();
            const articlesSection = document.getElementById('articles-grid');
            if (articlesSection) {
                articlesSection.scrollIntoView({ behavior: 'smooth' });
                // Set focus to the articles grid for accessibility
                setTimeout(() => {
                    articlesSection.focus();
                }, 800);
            }
        });
    }
}