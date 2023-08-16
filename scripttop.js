const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) { // Adjust the scroll position to show the button
        backToTop.classList.add('active');
      } else {
        backToTop.classList.remove('active');
      }
    });

    document.getElementById('scroll-top').addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  

    