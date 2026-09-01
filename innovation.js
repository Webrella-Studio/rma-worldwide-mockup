(() => {
  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet';
  stylesheet.href = 'innovation.css?v=20260901';
  document.head.appendChild(stylesheet);

  const servicesSection = document.querySelector('.service-section');
  const appSection = document.querySelector('.app-section');
  const globalSection = document.querySelector('.global-section');
  const nav = document.querySelector('.desktop-nav');

  if (nav && !nav.querySelector('a[href="#smart-planner"]')) {
    const planLink = document.createElement('a');
    planLink.href = '#smart-planner';
    planLink.innerHTML = 'Smart Plan <span class="innovation-tag">New</span>';
    nav.insertBefore(planLink, nav.querySelector('a[href="#fleet"]'));
  }

  if (servicesSection && !document.getElementById('smart-planner')) {
    servicesSection.insertAdjacentHTML('afterend', `
      <section class="innovation-planner" id="smart-planner" aria-labelledby="planner-title">
        <div class="innovation-shell">
          <div class="innovation-head reveal">
            <div>
              <p class="innovation-kicker">Webrella concept · smarter conversion</p>
              <h2 id="planner-title">Tell us the journey.<br><em>We’ll shape the ride.</em></h2>
            </div>
            <p>Instead of making travelers search through service pages and fleet charts, this interactive planner turns a few trip details into a recommended RMA service and vehicle path.</p>
          </div>

          <div class="planner-experience reveal">
            <div class="planner-controls">
              <div class="planner-step">
                <div class="planner-step-label"><span>01</span>What are you planning?</div>
                <div class="trip-choice-grid" role="group" aria-label="Trip type">
                  <button class="trip-choice active" type="button" data-trip="airport" aria-pressed="true"><i>✈</i><span>Airport transfer</span></button>
                  <button class="trip-choice" type="button" data-trip="corporate" aria-pressed="false"><i>↗</i><span>Corporate travel</span></button>
                  <button class="trip-choice" type="button" data-trip="event" aria-pressed="false"><i>◎</i><span>Meeting / event</span></button>
                  <button class="trip-choice" type="button" data-trip="global" aria-pressed="false"><i>⌁</i><span>Multi-city / global</span></button>
                </div>
              </div>

              <div class="planner-step">
                <div class="planner-step-label"><span>02</span>How many travelers?</div>
                <div class="passenger-line">
                  <div class="passenger-value"><strong id="planner-passengers">2</strong><span>travelers</span></div>
                  <input class="passenger-range" id="passenger-range" type="range" min="1" max="56" value="2" aria-label="Number of travelers">
                </div>
              </div>

              <div class="planner-step">
                <div class="planner-step-label"><span>03</span>What matters most?</div>
                <div class="priority-grid" role="group" aria-label="Travel priority">
                  <button class="priority-choice active" type="button" data-priority="executive" aria-pressed="true">Executive experience</button>
                  <button class="priority-choice" type="button" data-priority="efficiency" aria-pressed="false">Group efficiency</button>
                  <button class="priority-choice" type="button" data-priority="electric" aria-pressed="false">Electric when available</button>
                </div>
              </div>
            </div>

            <aside class="planner-result" aria-live="polite">
              <div>
                <div class="result-topline"><span>Recommended plan</span><span class="result-live"><i></i>Instant guidance</span></div>
                <div class="result-icon" id="result-icon">◆</div>
                <h3 id="result-vehicle">Premium sedan</h3>
                <p id="result-summary">A polished airport transfer for a small party with room for luggage and a streamlined pickup experience.</p>
                <div class="result-specs">
                  <div class="result-spec"><span>Service</span><strong id="result-service">Airport transfer</strong></div>
                  <div class="result-spec"><span>Coordination</span><strong id="result-coordination">Single-vehicle itinerary</strong></div>
                  <div class="result-spec"><span>Experience</span><strong id="result-priority">Executive-focused</strong></div>
                </div>
              </div>
              <div>
                <button class="button use-plan-button" type="button" id="use-plan">Use this plan</button>
                <p class="planner-disclaimer">Concept recommendation only. Final vehicle availability, capacity, routing, and pricing would be confirmed by RMA.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    `);
  }

  if (appSection && !document.getElementById('operations')) {
    appSection.insertAdjacentHTML('afterend', `
      <section class="ops-section" id="operations" aria-labelledby="ops-title">
        <div class="ops-shell">
          <div class="ops-copy reveal">
            <p class="ops-kicker">Product storytelling · MeetingPad concept extension</p>
            <h2 id="ops-title">Make event logistics<br><em>visible.</em></h2>
            <p>RMA already gives meeting organizers access to chauffeur information through MeetingPad. This concept shows how that capability could become a stronger selling point on the website by letting planners visualize the control they gain before they ever request a quote.</p>
            <div class="concept-note"><span>↗</span><div><strong>Why this matters for marketing</strong>It turns an operational advantage into something a prospect can immediately see, understand, and remember.</div></div>
          </div>

          <div class="ops-dashboard reveal" aria-label="Illustrative event operations dashboard">
            <div class="ops-dashboard-head">
              <div class="ops-brand"><span class="ops-brand-mark">RMA</span><div><span>Event Command Center</span><small>Concept interface</small></div></div>
              <span class="ops-live"><i></i>Illustrative live view</span>
            </div>
            <div class="ops-dashboard-body">
              <div class="ops-nav" role="tablist" aria-label="Operations dashboard views">
                <button class="ops-mode active" type="button" data-ops-view="overview" role="tab" aria-selected="true">Overview</button>
                <button class="ops-mode" type="button" data-ops-view="arrivals" role="tab" aria-selected="false">Arrivals</button>
                <button class="ops-mode" type="button" data-ops-view="manifest" role="tab" aria-selected="false">Manifest</button>
              </div>
              <div class="ops-main">
                <div class="ops-view active" data-ops-panel="overview">
                  <div class="ops-view-title"><div><span>Leadership summit · demo</span><h3>Morning movement overview</h3></div><span class="demo-badge">Demo data</span></div>
                  <div class="ops-stats">
                    <div class="ops-stat"><span>Movements</span><strong>18</strong><small>scheduled this morning</small></div>
                    <div class="ops-stat"><span>Vehicles</span><strong>12</strong><small>across the program</small></div>
                    <div class="ops-stat"><span>Pickup zones</span><strong>6</strong><small>coordinated locations</small></div>
                  </div>
                  <div class="ops-map-demo" aria-hidden="true">
                    <span class="ops-route one"></span><span class="ops-route two"></span><span class="ops-route three"></span>
                    <i class="ops-point a"></i><i class="ops-point b"></i><i class="ops-point c"></i><i class="ops-point d"></i>
                    <span class="ops-map-label l1">DCA arrivals</span><span class="ops-map-label l2">Convention center</span><span class="ops-map-label l3">Hotel cluster</span>
                  </div>
                  <p class="ops-footer-note">Illustrative interface only. The goal is to demonstrate a more visible digital story around RMA’s meetings and events capabilities.</p>
                </div>

                <div class="ops-view" data-ops-panel="arrivals">
                  <div class="ops-view-title"><div><span>Vehicle movement · demo</span><h3>Live arrival board</h3></div><span class="demo-badge">Demo data</span></div>
                  <div class="arrival-list">
                    <div class="arrival-row"><span class="vehicle-index">08</span><div><strong>Luxury SUV · DCA → Downtown</strong><span>Executive arrival · Zone B</span></div><span class="arrival-status hot">Arriving · 4 min</span></div>
                    <div class="arrival-row"><span class="vehicle-index">12</span><div><strong>Executive Van · Hotel → Convention Center</strong><span>Group transfer · 11 travelers</span></div><span class="arrival-status">On site</span></div>
                    <div class="arrival-row"><span class="vehicle-index">03</span><div><strong>Motor Coach · IAD → Hotel Cluster</strong><span>Conference arrival · Group C</span></div><span class="arrival-status">En route</span></div>
                    <div class="arrival-row"><span class="vehicle-index">16</span><div><strong>Premium Sedan · Union Station → Venue</strong><span>Speaker transfer</span></div><span class="arrival-status">Scheduled</span></div>
                  </div>
                  <p class="ops-footer-note">A simple arrival view can reduce phone calls and make complex transportation feel controlled before the event begins.</p>
                </div>

                <div class="ops-view" data-ops-panel="manifest">
                  <div class="ops-view-title"><div><span>Guest movement · demo</span><h3>Manifest at a glance</h3></div><span class="demo-badge">Demo data</span></div>
                  <div class="manifest-list">
                    <div class="manifest-row"><div><strong>Executive arrivals</strong><span>DCA · Zones A/B</span></div><div><strong>14 guests</strong><span>6 movements</span></div><div><strong>Ready</strong><span>all assigned</span></div></div>
                    <div class="manifest-row"><div><strong>Conference group</strong><span>IAD · International arrivals</span></div><div><strong>38 guests</strong><span>2 movements</span></div><div><strong>Tracking</strong><span>flight windows</span></div></div>
                    <div class="manifest-row"><div><strong>Speaker transfers</strong><span>Hotel / rail arrivals</span></div><div><strong>9 guests</strong><span>7 movements</span></div><div><strong>Ready</strong><span>vehicles assigned</span></div></div>
                  </div>
                  <p class="ops-footer-note">Demo data only. A polished manifest preview helps sell planning, oversight, and coordination—not just the vehicle itself.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `);
  }

  const tripButtons = Array.from(document.querySelectorAll('.trip-choice'));
  const priorityButtons = Array.from(document.querySelectorAll('.priority-choice'));
  const passengerRange = document.getElementById('passenger-range');
  const passengerValue = document.getElementById('planner-passengers');
  const resultVehicle = document.getElementById('result-vehicle');
  const resultSummary = document.getElementById('result-summary');
  const resultService = document.getElementById('result-service');
  const resultCoordination = document.getElementById('result-coordination');
  const resultPriority = document.getElementById('result-priority');
  const resultIcon = document.getElementById('result-icon');
  const usePlan = document.getElementById('use-plan');

  let tripType = 'airport';
  let priority = 'executive';

  const tripLabels = {
    airport: 'Airport transfer',
    corporate: 'Corporate travel',
    event: 'Meetings & events',
    global: 'Global transportation'
  };

  const tripDescriptions = {
    airport: 'with an airport-focused itinerary, luggage planning, and a streamlined pickup experience.',
    corporate: 'for polished executive movement, road shows, client travel, or ongoing business transportation.',
    event: 'for coordinated guest movement with a planning layer designed around schedules, zones, and manifests.',
    global: 'for a multi-city itinerary with one coordinated service plan across markets.'
  };

  const priorityLabels = {
    executive: 'Executive-focused',
    efficiency: 'Group efficiency',
    electric: 'Electric preference when available'
  };

  const getVehicle = count => {
    if (count <= 3) return { name: 'Premium sedan', icon: '◆', coordination: 'Single-vehicle itinerary' };
    if (count <= 6) return { name: 'Luxury SUV', icon: '⬢', coordination: 'Single-vehicle itinerary' };
    if (count <= 14) return { name: 'Executive van', icon: '▰', coordination: 'Group transfer plan' };
    if (count <= 40) return { name: 'Mini coach', icon: '▤', coordination: 'Manifest + group movement' };
    return { name: 'Motor coach', icon: '▥', coordination: 'Large-group logistics plan' };
  };

  const updatePlan = () => {
    if (!passengerRange) return;
    const count = Number(passengerRange.value);
    const vehicle = getVehicle(count);
    if (passengerValue) passengerValue.textContent = String(count);
    if (resultVehicle) resultVehicle.textContent = vehicle.name;
    if (resultIcon) resultIcon.textContent = vehicle.icon;
    if (resultService) resultService.textContent = tripLabels[tripType];
    if (resultCoordination) resultCoordination.textContent = vehicle.coordination;
    if (resultPriority) resultPriority.textContent = priorityLabels[priority];
    if (resultSummary) {
      resultSummary.textContent = `${vehicle.name} recommended for ${count} traveler${count === 1 ? '' : 's'} ${tripDescriptions[tripType]}`;
    }
  };

  tripButtons.forEach(button => {
    button.addEventListener('click', () => {
      tripType = button.dataset.trip;
      tripButtons.forEach(item => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      updatePlan();
    });
  });

  priorityButtons.forEach(button => {
    button.addEventListener('click', () => {
      priority = button.dataset.priority;
      priorityButtons.forEach(item => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      updatePlan();
    });
  });

  passengerRange?.addEventListener('input', updatePlan);
  updatePlan();

  usePlan?.addEventListener('click', () => {
    const count = Number(passengerRange?.value || 2);
    const vehicle = getVehicle(count);
    const contact = document.getElementById('contact');
    const form = document.getElementById('contact-form');
    const message = form?.querySelector('textarea[name="message"]');
    const estimate = form?.querySelector('input[value="estimate"]');
    const event = form?.querySelector('input[value="event"]');
    const corporate = form?.querySelector('input[value="corporate"]');

    if (estimate) estimate.checked = true;
    if (event) event.checked = tripType === 'event';
    if (corporate) corporate.checked = tripType === 'corporate';
    if (message) {
      message.value = `I’d like to plan ${tripLabels[tripType].toLowerCase()} for ${count} traveler${count === 1 ? '' : 's'}. The website planner suggested a ${vehicle.name.toLowerCase()} with ${priorityLabels[priority].toLowerCase()}.`;
    }
    contact?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.setTimeout(() => message?.focus({ preventScroll: true }), 650);
  });

  document.querySelectorAll('.ops-mode').forEach(button => {
    button.addEventListener('click', () => {
      const target = button.dataset.opsView;
      document.querySelectorAll('.ops-mode').forEach(item => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-selected', String(active));
      });
      document.querySelectorAll('.ops-view').forEach(panel => panel.classList.toggle('active', panel.dataset.opsPanel === target));
    });
  });

  /* Turn the existing coverage map into an explorer without changing the original markup. */
  const marketData = {
    'Washington, D.C.': ['Home market', 'Corporate, airport, government, and event transportation'],
    'New York': ['Major market', 'Executive travel, events, and multi-city coordination'],
    'Boston': ['Major market', 'Business travel, meetings, and airport transportation'],
    'Chicago': ['Major market', 'Corporate travel and national itinerary coordination'],
    'Houston': ['Texas market', 'Business travel, airport transfers, and group movement'],
    'Miami': ['Florida market', 'Executive, event, and leisure transportation'],
    'Los Angeles': ['West Coast market', 'Corporate, entertainment, and event transportation'],
    'London': ['International market', 'Global itinerary and executive transportation coordination'],
    'Paris': ['International market', 'Global itinerary and executive transportation coordination']
  };

  const coverageMap = document.querySelector('.coverage-map');
  if (coverageMap && !coverageMap.querySelector('.market-peek')) {
    coverageMap.insertAdjacentHTML('beforeend', `<div class="market-peek" aria-live="polite"><div><span id="market-type">Select a market</span><strong id="market-detail">Explore how RMA’s network can support local or multi-city travel.</strong></div><span class="market-live"><i></i><span id="market-name">Network explorer</span></span></div>`);
  }

  const marketType = document.getElementById('market-type');
  const marketDetail = document.getElementById('market-detail');
  const marketName = document.getElementById('market-name');
  document.querySelectorAll('.city-marker').forEach(marker => {
    marker.setAttribute('tabindex', '0');
    marker.setAttribute('role', 'button');
    const activate = () => {
      const name = marker.querySelector('span')?.textContent?.trim();
      const data = marketData[name];
      if (!data) return;
      document.querySelectorAll('.city-marker').forEach(item => item.classList.toggle('active', item === marker));
      if (marketType) marketType.textContent = data[0];
      if (marketDetail) marketDetail.textContent = data[1];
      if (marketName) marketName.textContent = name;
    };
    marker.addEventListener('click', activate);
    marker.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        activate();
      }
    });
  });

  /* Floating conversion dock */
  if (!document.querySelector('.concierge-dock')) {
    document.body.insertAdjacentHTML('beforeend', `
      <div class="concierge-dock" aria-label="Quick trip planning">
        <div class="concierge-panel">
          <small>RMA quick plan</small>
          <h3>Where do you want to start?</h3>
          <div class="concierge-options">
            <button class="concierge-option" type="button" data-quick-trip="airport"><span>Airport transfer</span><span>→</span></button>
            <button class="concierge-option" type="button" data-quick-trip="event"><span>Meeting or event</span><span>→</span></button>
            <button class="concierge-option" type="button" data-quick-action="corporate"><span>Corporate account</span><span>→</span></button>
            <a class="concierge-option" href="tel:8888885466"><span>24/7 reservations</span><span>↗</span></a>
          </div>
        </div>
        <button class="concierge-toggle" type="button" aria-expanded="false"><i></i><span>Plan with RMA</span></button>
      </div>
    `);
  }

  const dock = document.querySelector('.concierge-dock');
  const dockToggle = document.querySelector('.concierge-toggle');
  dockToggle?.addEventListener('click', () => {
    const open = dock?.classList.toggle('open');
    dockToggle.setAttribute('aria-expanded', String(Boolean(open)));
  });

  document.querySelectorAll('[data-quick-trip]').forEach(button => {
    button.addEventListener('click', () => {
      const targetTrip = button.dataset.quickTrip;
      document.querySelector(`.trip-choice[data-trip="${targetTrip}"]`)?.click();
      dock?.classList.remove('open');
      dockToggle?.setAttribute('aria-expanded', 'false');
      document.getElementById('smart-planner')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  document.querySelector('[data-quick-action="corporate"]')?.addEventListener('click', () => {
    const corporate = document.querySelector('#contact-form input[value="corporate"]');
    if (corporate) corporate.checked = true;
    dock?.classList.remove('open');
    dockToggle?.setAttribute('aria-expanded', 'false');
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  document.addEventListener('click', event => {
    if (dock?.classList.contains('open') && !dock.contains(event.target)) {
      dock.classList.remove('open');
      dockToggle?.setAttribute('aria-expanded', 'false');
    }
  });

  /* Existing reveal observer was initialized before these sections existed, so reveal them here. */
  const newRevealItems = document.querySelectorAll('#smart-planner .reveal, #operations .reveal');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reducedMotion) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    newRevealItems.forEach(item => observer.observe(item));
  } else {
    newRevealItems.forEach(item => item.classList.add('visible'));
  }
})();
