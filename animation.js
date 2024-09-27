// Функція для плавної появи елементів
function revealElements() {
    let reveals = document.querySelectorAll('.section_item, .header_content, .github');
  
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active');
      }
    }
  }
  
  window.addEventListener('scroll', revealElements);
  
  // Викликаємо функцію, щоб елементи могли з'явитися при завантаженні сторінки
  revealElements();
  