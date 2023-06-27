// script.js

const messages = document.querySelectorAll('.message');
const categories = document.querySelectorAll('.category');

// Accordion functionality
messages.forEach((message) => {
  const header = message.querySelector('.header');
  
  header.addEventListener('click', () => {
    message.classList.toggle('active');
  });
});

// Category filtering
categories.forEach(category => {
  category.addEventListener('click', () => {
    const filter = category.getAttribute('data-filter');
    
    messages.forEach(message => {
      if (filter === 'all' || message.classList.contains(filter)) {
        message.style.display = 'block';
      } else {
        message.style.display = 'none';
      }
    });
    
    categories.forEach(category => {
      category.classList.remove('active');
    });
    
    category.classList.add('active');
  });
});
