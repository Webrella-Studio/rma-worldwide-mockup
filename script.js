const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.desktop-nav');

menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const fleetData = {
  sedan: { passengers: '1–3', use: 'Airport & business' },
  suv: { passengers: 'Up to 6', use: 'Groups & luggage' },
  sprinter: { passengers: 'Up to 14', use: 'Teams & events' },
  coach: { passengers: 'Up to 56', use: 'Large-group travel' }
};

document.querySelectorAll('.fleet-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelector('.fleet-tab.active').classList.remove('active');
    tab.classList.add('active');
    const type = tab.dataset.fleet;
    const stage = document.getElementById('vehicle-stage');
    stage.className = `vehicle-stage ${type}`;
    document.getElementById('fleet-passengers').textContent = fleetData[type].passengers;
    document.getElementById('fleet-use').textContent = fleetData[type].use;
  });
});

document.getElementById('booking-form').addEventListener('submit', event => {
  event.preventDefault();
  document.getElementById('booking-note').textContent = 'Concept interaction: a live site would continue to rates and vehicle selection.';
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach(item => revealObserver.observe(item));
