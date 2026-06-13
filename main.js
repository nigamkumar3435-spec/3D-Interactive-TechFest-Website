// Basic interactivity for CYBORG layout

// Trailer selection
const trailers = document.querySelectorAll('.trailer-card');
trailers.forEach(card => {
  card.addEventListener('click', () => {
    trailers.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});

// Interactive Cards Flash Effect
const flashCards = document.querySelectorAll('.benefit-card, .reward-card');
flashCards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.remove('flash-active');
    void card.offsetWidth; // Trigger reflow to restart animation
    card.classList.add('flash-active');
    setTimeout(() => {
      card.classList.remove('flash-active');
    }, 600);
  });
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const btn = item.querySelector('.faq-question');
  btn.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    
    // Close all other items
    faqItems.forEach(faq => faq.classList.remove('active'));
    
    // Toggle current item
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// Gun-Bot Tracking
document.addEventListener('mousemove', (e) => {
  const bot = document.getElementById('gun-bot-container');
  if (!bot) return;
  const rect = bot.getBoundingClientRect();
  const botX = rect.left + rect.width / 2;
  const botY = rect.top + rect.height / 2;
  
  const angle = Math.atan2(e.clientY - botY, e.clientX - botX) * 180 / Math.PI;
  bot.style.transform = `rotate(${angle}deg)`;
});

let isFiring = false;

// Laser Strike Effect on Click (Capture Phase)
document.addEventListener('click', (e) => {
  if (isFiring) return; // Prevent loops
  
  // Only fire laser if clicking an interactive element
  const target = e.target.closest('a, button, .trailer-card, .search-box, .social-icon, .faq-question, .benefit-card, .reward-card');
  if (!target) return;

  const bot = document.getElementById('gun-bot-container');
  const botRect = bot.getBoundingClientRect();
  const startX = botRect.left + botRect.width / 2;
  const startY = botRect.top + botRect.height / 2;
  
  const endX = e.clientX;
  const endY = e.clientY;
  
  const length = Math.hypot(endX - startX, endY - startY);
  const angle = Math.atan2(endY - startY, endX - startX) * 180 / Math.PI;
  
  // Create laser
  const laser = document.createElement('div');
  laser.classList.add('targeted-laser');
  laser.style.width = `${length}px`;
  laser.style.left = `${startX}px`;
  laser.style.top = `${startY}px`;
  laser.style.setProperty('--angle', `${angle}deg`);
  document.body.appendChild(laser);
  
  // Create impact spark at target
  const spark = document.createElement('div');
  spark.classList.add('laser-spark');
  spark.style.left = `${endX}px`;
  spark.style.top = `${endY}px`;
  document.body.appendChild(spark);
  
  // Determine if we should delay the action
  const isLink = target.tagName === 'A';
  const isAccordion = target.classList.contains('faq-question');
  const isTrailer = target.closest('.trailer-card') || target.closest('.benefit-card') || target.closest('.reward-card');
  
  if (isLink || isAccordion || isTrailer) {
    e.preventDefault();
    e.stopPropagation();
    isFiring = true;
    
    setTimeout(() => {
      // Trigger the real click
      target.click();
      setTimeout(() => { isFiring = false; }, 50);
    }, 200);
  }

  // Clean up animation
  setTimeout(() => {
    laser.remove();
    spark.remove();
  }, 300);
}, true); // Use capture phase to intercept before normal handlers


