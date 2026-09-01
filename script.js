const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.desktop-nav');

if (menuButton && nav) {
  const closeMenu = () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };

  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
  });

  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1120) closeMenu();
  });
}

const hero = document.querySelector('.hero');
const slides = Array.from(document.querySelectorAll('.hero-slide'));
const slideDots = Array.from(document.querySelectorAll('.slider-dot'));
const previousButton = document.querySelector('.slider-arrow.previous');
const nextButton = document.querySelector('.slider-arrow.next');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let currentSlide = 0;
let sliderTimer;

const showSlide = index => {
  if (!slides.length) return;
  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, slideIndex) => {
    const active = slideIndex === currentSlide;
    slide.classList.toggle('active', active);
    slide.setAttribute('aria-hidden', String(!active));
  });

  slideDots.forEach((dot, dotIndex) => {
    const active = dotIndex === currentSlide;
    dot.classList.toggle('active', active);
    dot.setAttribute('aria-selected', String(active));
    dot.tabIndex = active ? 0 : -1;
  });
};

const stopSlider = () => window.clearInterval(sliderTimer);
const startSlider = () => {
  stopSlider();
  if (!reduceMotion.matches && slides.length > 1) {
    sliderTimer = window.setInterval(() => showSlide(currentSlide + 1), 7000);
  }
};

previousButton?.addEventListener('click', () => {
  showSlide(currentSlide - 1);
  startSlider();
});

nextButton?.addEventListener('click', () => {
  showSlide(currentSlide + 1);
  startSlider();
});

slideDots.forEach(dot => {
  dot.addEventListener('click', () => {
    showSlide(Number(dot.dataset.target));
    startSlider();
  });
});

hero?.addEventListener('mouseenter', stopSlider);
hero?.addEventListener('mouseleave', startSlider);
document.addEventListener('visibilitychange', () => {
  if (document.hidden) stopSlider();
  else startSlider();
});
reduceMotion.addEventListener?.('change', startSlider);
showSlide(0);
startSlider();

if (!reduceMotion.matches && hero) {
  let parallaxFrame = null;
  const updateParallax = () => {
    const heroRect = hero.getBoundingClientRect();
    const progress = Math.max(0, Math.min(-heroRect.top, hero.offsetHeight));
    const offset = Math.min(progress * 0.12, 105);
    const activeImage = document.querySelector('.hero-slide.active .parallax-image');

    slides.forEach(slide => {
      const image = slide.querySelector('.parallax-image');
      if (image && image !== activeImage) image.style.transform = '';
    });

    if (activeImage) {
      activeImage.style.transform = `translate3d(0, ${offset}px, 0) scale(1.025)`;
    }

    parallaxFrame = null;
  };

  window.addEventListener('scroll', () => {
    if (!parallaxFrame) parallaxFrame = window.requestAnimationFrame(updateParallax);
  }, { passive: true });
  updateParallax();
}

const fleetData = {
  sedan: {
    type: 'Premium sedan',
    passengers: '1–3 passengers',
    use: 'Airport & business travel',
    feature: 'Quiet, polished, connected',
    image: 'assets/hero-electric.webp',
    alt: 'Premium electric sedan in Washington, D.C.'
  },
  suv: {
    type: 'Luxury SUV',
    passengers: 'Up to 6 passengers',
    use: 'Groups, luggage & road shows',
    feature: 'Spacious, confident, refined',
    image: 'assets/hero-capitol.webp',
    alt: 'Black luxury SUV near the United States Capitol'
  },
  sprinter: {
    type: 'Executive van',
    passengers: 'Up to 14 passengers',
    use: 'Teams, events & group transfers',
    feature: 'Flexible, coordinated, comfortable',
    image: 'assets/hero-groups.webp',
    alt: 'Executive van and motor coach in Washington, D.C.'
  },
  coach: {
    type: 'Motor coach',
    passengers: 'Up to 56 passengers',
    use: 'Conferences & large-group travel',
    feature: 'High-capacity, planned, dependable',
    image: 'assets/fleet-coach.webp',
    alt: 'Full-size black motor coach in Washington, D.C.'
  }
};

const fleetPhoto = document.getElementById('fleet-photo');
const fleetType = document.getElementById('fleet-type');
const fleetPassengers = document.getElementById('fleet-passengers');
const fleetUse = document.getElementById('fleet-use');
const fleetFeature = document.getElementById('fleet-feature');
const fleetTabs = document.querySelectorAll('.fleet-tab');

fleetTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const selection = fleetData[tab.dataset.fleet];
    if (!selection) return;

    fleetTabs.forEach(item => {
      const active = item === tab;
      item.classList.toggle('active', active);
      item.setAttribute('aria-selected', String(active));
      item.tabIndex = active ? 0 : -1;
    });

    if (fleetPhoto) {
      fleetPhoto.style.opacity = '0.18';
      window.setTimeout(() => {
        fleetPhoto.src = selection.image;
        fleetPhoto.alt = selection.alt;
        fleetPhoto.style.opacity = '1';
      }, 180);
    }

    if (fleetType) fleetType.textContent = selection.type;
    if (fleetPassengers) fleetPassengers.textContent = selection.passengers;
    if (fleetUse) fleetUse.textContent = selection.use;
    if (fleetFeature) fleetFeature.textContent = selection.feature;
  });
});

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !reduceMotion.matches) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach(item => revealObserver.observe(item));
} else {
  revealItems.forEach(item => item.classList.add('visible'));
}

const contactForm = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');

contactForm?.addEventListener('submit', event => {
  event.preventDefault();
  if (formNote) {
    formNote.textContent = 'Mockup complete — a live site would securely send this inquiry to the RMA team.';
  }
});

// Use the transparent official RMA logo everywhere the legacy PNG is referenced.
document.querySelectorAll('img[src="assets/rma-logo.png"]').forEach(image => {
  image.src = 'assets/rma-logo.svg';
});
