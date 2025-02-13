const loader = document.querySelector('.loader');

setTimeout(() => {
  loader.classList.add('loader-hidden');
},900)

document.addEventListener("DOMContentLoaded", () => {
  const quantities = document.querySelectorAll('.quantity');
  const introSkills = document.querySelectorAll('.intro-skill');
  const services = document.querySelectorAll('.service'); 
  const about1 = document.querySelector('.about-1');
  const animatedElements = document.querySelectorAll('.animated-on-scroll');

  const startCounter = (num, incrementSpeed, element) => {
    let n = 0;
    const interval = setInterval(() => {
      n += 1;
      element.innerHTML = n;

      if (n >= num) {
        element.innerHTML = num;
        clearInterval(interval);
      }
    }, incrementSpeed);
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;

        if (element.classList.contains('quantity') && !element.classList.contains('animated')) {
          element.classList.add('animated');
          if (element === quantities[0]) {
            startCounter(225, 3, quantities[0]);
          } else if (element === quantities[1]) {
            startCounter(225, 3, quantities[1]);
          } else if (element === quantities[2]) {
            startCounter(185, 4.1, quantities[2]);
          } else if (element === quantities[3]) {
            startCounter(12, 63.75, quantities[3]);
          }
          observer.unobserve(element);
        }

        if (element.classList.contains('intro-skill')) {
          element.classList.add('animated');
          observer.unobserve(element);
        };

        if (element.classList.contains('service')) {
          element.classList.add('animated');
          observer.unobserve(element);
        };

        if (element.classList.contains('about-1')) {
          element.classList.add('animated');
          observer.unobserve(element);
        };
      }
    });
  };

  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px',
  };

  const myObserver = new IntersectionObserver(observerCallback, observerOptions);

  quantities.forEach(quantity => myObserver.observe(quantity));
  introSkills.forEach(introSkill => myObserver.observe(introSkill));
  services.forEach(service => myObserver.observe(service));
  if (about1) myObserver.observe(about1);
  animatedElements.forEach(animatedElement => myObserver.observe(animatedElement));
});

const pageLinksContainer = document.querySelector('.page-links-container');
const bar = document.querySelector('.bar');

bar.addEventListener('click', () => {
  pageLinksContainer.classList.toggle('page-active');
  bar.classList.toggle('bar-active');
})