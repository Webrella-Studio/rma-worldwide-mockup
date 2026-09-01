(() => {
  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'showcase.css?v=20260901b';
  document.head.appendChild(css);

  const hero = document.querySelector('.hero');
  const rideSection = document.querySelector('.ride-counts');
  const appSection = document.querySelector('.app-section');
  const globalSection = document.querySelector('.global-section');
  const contactSection = document.getElementById('contact');

  const goTo = selector => document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const prefillContact = ({ message = '', corporate = false, event = false, estimate = true } = {}) => {
    const form = document.getElementById('contact-form');
    if (!form) return;
    const textarea = form.querySelector('textarea[name="message"]');
    const estimateBox = form.querySelector('input[value="estimate"]');
    const corporateBox = form.querySelector('input[value="corporate"]');
    const eventBox = form.querySelector('input[value="event"]');
    if (textarea && message) textarea.value = message;
    if (estimateBox) estimateBox.checked = estimate;
    if (corporateBox) corporateBox.checked = corporate;
    if (eventBox) eventBox.checked = event;
    goTo('#contact');
    window.setTimeout(() => textarea?.focus({ preventScroll: true }), 650);
  };

  /* 1. Personalized entry path */
  if (hero && !document.getElementById('w2-personalize')) {
    hero.insertAdjacentHTML('afterend', `
      <section class="w2-personalize" id="w2-personalize" aria-labelledby="w2-personalize-title">
        <div class="w2-shell w2-personalize-grid">
          <div class="w2-personalize-intro">
            <p class="w2-kicker">Personalized website experience</p>
            <h2 id="w2-personalize-title">What brings you to RMA?</h2>
            <p>One homepage can speak differently to a traveler, executive assistant, event planner, or travel manager—without making them hunt for the right information.</p>
          </div>
          <div class="w2-audience-card">
            <div class="w2-audience-tabs" role="tablist" aria-label="Choose your role">
              <button class="w2-audience-btn active" type="button" data-audience="traveler" role="tab" aria-selected="true">Traveler</button>
              <button class="w2-audience-btn" type="button" data-audience="assistant" role="tab" aria-selected="false">Executive assistant</button>
              <button class="w2-audience-btn" type="button" data-audience="planner" role="tab" aria-selected="false">Event planner</button>
              <button class="w2-audience-btn" type="button" data-audience="manager" role="tab" aria-selected="false">Travel manager</button>
            </div>
            <div class="w2-audience-content" aria-live="polite">
              <span id="w2-audience-label">For individual travelers</span>
              <h3 id="w2-audience-title">A smoother airport ride starts before you land.</h3>
              <p id="w2-audience-copy">Surface airport pickup, vehicle choice, trip visibility, and 24/7 support first—so an individual traveler gets to the information that matters immediately.</p>
              <div class="w2-audience-actions">
                <a id="w2-audience-primary" href="#smart-planner">Plan an airport ride</a>
                <a class="secondary" id="w2-audience-secondary" href="#fleet">See the fleet</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    `);
  }

  const audienceData = {
    traveler: {
      label: 'For individual travelers',
      title: 'A smoother airport ride starts before you land.',
      copy: 'Surface airport pickup, vehicle choice, trip visibility, and 24/7 support first—so an individual traveler gets to the information that matters immediately.',
      primary: ['Plan an airport ride', '#smart-planner'], secondary: ['See the fleet', '#fleet']
    },
    assistant: {
      label: 'For executive assistants',
      title: 'Make executive travel easier to arrange and easier to trust.',
      copy: 'Lead with recurring traveler profiles, reliable pickup details, receipts, and fast changes—features that matter when someone is coordinating transportation for another person.',
      primary: ['Explore corporate travel', '#w2-corporate'], secondary: ['Build a trip plan', '#smart-planner']
    },
    planner: {
      label: 'For meeting & event planners',
      title: 'Turn transportation logistics into a visible control center.',
      copy: 'Show manifests, arrivals, pickup zones, vehicles, and event coordination as an experience—not just a paragraph describing meetings and events.',
      primary: ['See event operations', '#operations'], secondary: ['Plan group travel', '#smart-planner']
    },
    manager: {
      label: 'For corporate travel managers',
      title: 'One account view for travelers, rides, billing, and support.',
      copy: 'Bring corporate account benefits forward with a visual account-management story that makes centralized billing and traveler oversight feel tangible.',
      primary: ['View corporate control center', '#w2-corporate'], secondary: ['Request an account', '#contact']
    }
  };

  document.querySelectorAll('.w2-audience-btn').forEach(button => {
    button.addEventListener('click', () => {
      const data = audienceData[button.dataset.audience];
      if (!data) return;
      document.querySelectorAll('.w2-audience-btn').forEach(item => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-selected', String(active));
      });
      document.getElementById('w2-audience-label').textContent = data.label;
      document.getElementById('w2-audience-title').textContent = data.title;
      document.getElementById('w2-audience-copy').textContent = data.copy;
      const primary = document.getElementById('w2-audience-primary');
      const secondary = document.getElementById('w2-audience-secondary');
      primary.textContent = data.primary[0]; primary.href = data.primary[1];
      secondary.textContent = data.secondary[0]; secondary.href = data.secondary[1];
    });
  });

  /* 2. Corporate account product story */
  if (rideSection && !document.getElementById('w2-corporate')) {
    rideSection.insertAdjacentHTML('afterend', `
      <section class="w2-corporate" id="w2-corporate" aria-labelledby="w2-corporate-title">
        <div class="w2-shell">
          <div class="w2-corporate-head">
            <div>
              <p class="w2-kicker">Corporate account experience</p>
              <h2 class="w2-section-title" id="w2-corporate-title">Make the account value<br><em>visible before the sale.</em></h2>
            </div>
            <p class="w2-copy">Instead of only asking companies to “open a corporate account,” this concept previews what centralized travel management could feel like. Everything below is illustrative demo data.</p>
          </div>
          <div class="w2-portal" aria-label="Illustrative corporate account portal">
            <aside class="w2-portal-sidebar">
              <div class="w2-portal-brand"><strong>RMA Business</strong><span>Corporate control center</span></div>
              <div class="w2-portal-tabs" role="tablist" aria-label="Corporate portal demo">
                <button class="w2-portal-tab active" type="button" data-portal="overview" role="tab" aria-selected="true">Overview</button>
                <button class="w2-portal-tab" type="button" data-portal="travelers" role="tab" aria-selected="false">Travelers</button>
                <button class="w2-portal-tab" type="button" data-portal="billing" role="tab" aria-selected="false">Billing</button>
              </div>
              <div class="w2-portal-note">Concept interface only. Demo values are included to show how Webrella could market the benefits of a corporate account visually.</div>
            </aside>
            <div class="w2-portal-main">
              <div class="w2-portal-top"><div><span>Illustrative account · September</span><h3>Northstar Partners</h3></div><span class="w2-demo">Demo data</span></div>
              <div class="w2-portal-panel active" data-portal-panel="overview">
                <div class="w2-summary-grid">
                  <div class="w2-summary-card"><span>Today</span><strong>6 scheduled rides</strong><small>Airport, office, and client movements in one view</small></div>
                  <div class="w2-summary-card"><span>Travelers</span><strong>8 active profiles</strong><small>Saved preferences and recurring traveler details</small></div>
                  <div class="w2-summary-card"><span>Support</span><strong>24/7 operations</strong><small>One clear escalation path when plans change</small></div>
                </div>
                <div class="w2-account-row"><div><span>8:30 AM · Airport transfer</span><strong>DCA → Downtown office</strong></div><div><span>Traveler</span><strong>Executive profile A</strong></div><span class="w2-status">Confirmed</span></div>
                <div class="w2-account-row"><div><span>11:15 AM · Client movement</span><strong>Downtown → Tysons</strong></div><div><span>Traveler</span><strong>Client team</strong></div><span class="w2-status">Assigned</span></div>
                <div class="w2-account-row"><div><span>4:45 PM · Airport transfer</span><strong>Office → IAD</strong></div><div><span>Traveler</span><strong>Executive profile B</strong></div><span class="w2-status">Scheduled</span></div>
              </div>
              <div class="w2-portal-panel" data-portal-panel="travelers">
                <div class="w2-account-row"><div><span>Executive traveler</span><strong>Profile A</strong></div><div><span>Preference</span><strong>Luxury SUV · quiet ride</strong></div><span class="w2-status">Active</span></div>
                <div class="w2-account-row"><div><span>Executive traveler</span><strong>Profile B</strong></div><div><span>Preference</span><strong>Premium sedan · mobile updates</strong></div><span class="w2-status">Active</span></div>
                <div class="w2-account-row"><div><span>Client team</span><strong>Guest group</strong></div><div><span>Preference</span><strong>Executive van · group billing</strong></div><span class="w2-status">Active</span></div>
                <div class="w2-billing-card" style="margin-top:16px"><strong style="display:block;margin-bottom:8px">Marketing idea</strong><span style="color:#8d9399;font-size:12px;line-height:1.6">Saved profiles make repeat corporate travel feel easier. Showing that workflow on the website gives a travel manager a reason to open an account beyond “contact us.”</span></div>
              </div>
              <div class="w2-portal-panel" data-portal-panel="billing">
                <div class="w2-billing-card">
                  <div class="w2-billing-line"><span>Billing structure</span><strong>Centralized account billing</strong></div>
                  <div class="w2-billing-line"><span>Receipts</span><strong>Trip-level digital records</strong></div>
                  <div class="w2-billing-line"><span>Cost centers</span><strong>Project / traveler allocation concept</strong></div>
                  <div class="w2-billing-line"><span>Reporting</span><strong>Monthly transportation summary concept</strong></div>
                </div>
                <div class="w2-billing-card" style="margin-top:16px"><span style="display:block;color:#8d9399;font-size:11px;line-height:1.65">No pricing or performance claims are represented here. This is a product-storytelling concept showing how corporate account benefits could be made easier to understand.</span></div>
              </div>
              <div class="w2-portal-cta"><button id="w2-corporate-cta" type="button">Request a corporate account →</button></div>
            </div>
          </div>
        </div>
      </section>
    `);
  }

  document.querySelectorAll('.w2-portal-tab').forEach(button => {
    button.addEventListener('click', () => {
      const target = button.dataset.portal;
      document.querySelectorAll('.w2-portal-tab').forEach(item => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-selected', String(active));
      });
      document.querySelectorAll('.w2-portal-panel').forEach(panel => panel.classList.toggle('active', panel.dataset.portalPanel === target));
    });
  });

  document.getElementById('w2-corporate-cta')?.addEventListener('click', () => prefillContact({
    corporate: true,
    message: 'I am interested in learning more about an RMA corporate transportation account, including centralized traveler management, billing, and recurring business travel support.'
  }));

  /* 3. Flight-aware airport pickup concept */
  if (appSection && !document.getElementById('w2-flight')) {
    appSection.insertAdjacentHTML('afterend', `
      <section class="w2-flight" id="w2-flight" aria-labelledby="w2-flight-title">
        <div class="w2-shell">
          <div class="w2-flight-head">
            <div>
              <p class="w2-kicker">Airport experience concept</p>
              <h2 class="w2-section-title" id="w2-flight-title">Show travelers how the ride<br><em>adapts when the flight does.</em></h2>
            </div>
            <p class="w2-copy">A simple interactive flight-monitoring story can communicate reliability better than another paragraph. These are fictional demo flights—not live aviation data.</p>
          </div>
          <div class="w2-flight-demo">
            <div class="w2-flight-list">
              <div class="w2-flight-list-head"><strong>Choose a demo arrival</strong><span class="w2-demo">Illustrative</span></div>
              <button class="w2-flight-option active" type="button" data-flight="dca"><span class="w2-flight-code">DEMO<br>101</span><span><strong>New York → Washington</strong><small>DCA · 8:15 AM arrival</small></span><span class="w2-flight-state">On time</span></button>
              <button class="w2-flight-option" type="button" data-flight="iad"><span class="w2-flight-code">DEMO<br>204</span><span><strong>Chicago → Washington</strong><small>IAD · 2:40 PM arrival</small></span><span class="w2-flight-state delay">Delayed</span></button>
              <button class="w2-flight-option" type="button" data-flight="bwi"><span class="w2-flight-code">DEMO<br>619</span><span><strong>Miami → Baltimore</strong><small>BWI · 6:05 PM arrival</small></span><span class="w2-flight-state">Landed</span></button>
            </div>
            <div class="w2-flight-stage" id="w2-flight-stage">
              <div class="w2-flight-stage-top"><div><span id="w2-flight-label">Demo 101 · illustrative status</span><h3 id="w2-flight-headline">Pickup timing aligned to arrival</h3></div><span class="w2-live-status" id="w2-flight-status">ON TIME · DEMO</span></div>
              <div class="w2-flight-route"><div class="w2-airport"><strong id="w2-flight-origin">NYC</strong><span>Origin</span></div><div class="w2-route-line"></div><div class="w2-airport"><strong id="w2-flight-destination">DCA</strong><span>Arrival airport</span></div></div>
              <div class="w2-flight-timeline">
                <div class="w2-flight-step"><strong>Flight monitored</strong><span>Arrival status is connected to the trip plan.</span></div>
                <div class="w2-flight-step"><strong>Pickup adjusted</strong><span id="w2-flight-pickup">Chauffeur timing follows the 8:15 AM arrival window.</span></div>
                <div class="w2-flight-step"><strong>Traveler updated</strong><span>Trip details stay clear as timing changes.</span></div>
                <div class="w2-flight-step"><strong>Operations ready</strong><span>24/7 support remains part of the experience.</span></div>
              </div>
              <div class="w2-flight-actions"><button id="w2-delay-demo" type="button">Simulate a 35-minute delay</button><p>Demo interaction only · no live flight feed is connected.</p></div>
            </div>
          </div>
        </div>
      </section>
    `);
  }

  const flights = {
    dca: { label: 'Demo 101 · illustrative status', headline: 'Pickup timing aligned to arrival', origin: 'NYC', destination: 'DCA', status: 'ON TIME · DEMO', pickup: 'Chauffeur timing follows the 8:15 AM arrival window.', delayed: false },
    iad: { label: 'Demo 204 · illustrative status', headline: 'Delay detected. Pickup window shifts with it.', origin: 'CHI', destination: 'IAD', status: 'DELAY +35 · DEMO', pickup: 'The illustrative pickup window moves from 2:40 PM to 3:15 PM.', delayed: true },
    bwi: { label: 'Demo 619 · illustrative status', headline: 'Arrival confirmed. Curbside plan moves forward.', origin: 'MIA', destination: 'BWI', status: 'LANDED · DEMO', pickup: 'The illustrative arrival is complete and the pickup sequence advances.', delayed: false }
  };
  let currentFlight = 'dca';
  let simulatedDelay = false;

  const renderFlight = () => {
    const base = flights[currentFlight];
    if (!base) return;
    const delayed = simulatedDelay || base.delayed;
    document.getElementById('w2-flight-label').textContent = base.label;
    document.getElementById('w2-flight-origin').textContent = base.origin;
    document.getElementById('w2-flight-destination').textContent = base.destination;
    document.getElementById('w2-flight-headline').textContent = simulatedDelay ? 'Delay detected. Pickup timing updates automatically.' : base.headline;
    document.getElementById('w2-flight-status').textContent = simulatedDelay ? 'DELAY +35 · DEMO' : base.status;
    document.getElementById('w2-flight-pickup').textContent = simulatedDelay ? 'The demo pickup window shifts 35 minutes while the reservation stays connected to the arrival.' : base.pickup;
    document.getElementById('w2-flight-stage')?.classList.toggle('is-delayed', delayed);
    const delayButton = document.getElementById('w2-delay-demo');
    if (delayButton) delayButton.textContent = simulatedDelay ? 'Reset delay simulation' : 'Simulate a 35-minute delay';
  };

  document.querySelectorAll('.w2-flight-option').forEach(button => {
    button.addEventListener('click', () => {
      currentFlight = button.dataset.flight;
      simulatedDelay = false;
      document.querySelectorAll('.w2-flight-option').forEach(item => item.classList.toggle('active', item === button));
      renderFlight();
    });
  });
  document.getElementById('w2-delay-demo')?.addEventListener('click', () => { simulatedDelay = !simulatedDelay; renderFlight(); });
  renderFlight();

  /* 4. Turn the existing global map into a live route story */
  if (globalSection && !document.querySelector('.w2-route-console')) {
    const globalCopy = globalSection.querySelector('.global-copy');
    const mainCTA = globalCopy?.querySelector('.button');
    const consoleMarkup = `
      <div class="w2-route-console" aria-live="polite">
        <div class="w2-route-console-top"><div><span>Selected network story</span><strong id="w2-route-title">Washington, D.C. → Worldwide</strong></div><i class="w2-route-pulse" aria-hidden="true"></i></div>
        <p id="w2-route-copy">Click a city on the map to show how the website could turn static coverage into an interactive service story.</p>
      </div>`;
    if (mainCTA) mainCTA.insertAdjacentHTML('beforebegin', consoleMarkup); else globalCopy?.insertAdjacentHTML('beforeend', consoleMarkup);
  }

  const routeDescriptions = {
    'Washington, D.C.': 'Home-market storytelling can emphasize local operations, airport transfers, corporate movement, and event transportation.',
    'New York': 'A selected market can surface executive travel, road shows, airport movement, and multi-city continuity.',
    'Boston': 'Market-specific content can connect corporate travel and event transportation to one consistent worldwide service story.',
    'Chicago': 'Interactive coverage can help a prospect understand how one itinerary can stay coordinated across multiple cities.',
    'Houston': 'A route story can pair market coverage with corporate, group, and airport-use cases instead of showing a location name alone.',
    'Miami': 'Destination-specific storytelling can connect leisure, events, executive travel, and airport service in one click.',
    'Los Angeles': 'The website can personalize national coverage around the selected destination while keeping RMA as the single point of coordination.',
    'London': 'Global routes can visually sell international continuity: one itinerary, one service standard, multiple markets.',
    'Paris': 'International destination selection creates a natural path into global transportation inquiries and multi-city planning.'
  };
  document.querySelectorAll('.city-marker').forEach(marker => {
    marker.setAttribute('tabindex', '0');
    marker.setAttribute('role', 'button');
    const activate = () => {
      const city = marker.textContent.trim();
      document.querySelectorAll('.city-marker').forEach(item => item.classList.toggle('w2-active', item === marker));
      const title = document.getElementById('w2-route-title');
      const copy = document.getElementById('w2-route-copy');
      if (title) title.textContent = city === 'Washington, D.C.' ? 'Washington, D.C. · RMA hub story' : `Washington, D.C. → ${city}`;
      if (copy) copy.textContent = routeDescriptions[city] || 'Selected city coverage can become a more specific service story and conversion path.';
    };
    marker.addEventListener('click', activate);
    marker.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); activate(); } });
  });

  /* 5. Case-study style marketing / measurement story */
  if (globalSection && !document.getElementById('w2-conversion')) {
    globalSection.insertAdjacentHTML('afterend', `
      <section class="w2-conversion" id="w2-conversion" aria-labelledby="w2-conversion-title">
        <div class="w2-shell">
          <div class="w2-conversion-head">
            <div><p class="w2-kicker">Webrella marketing concept</p><h2 class="w2-section-title" id="w2-conversion-title">A website designed to move<br><em>interest into action.</em></h2></div>
            <p class="w2-copy">The redesign is not only visual. Each interactive layer creates a measurable point in the customer journey that marketing can optimize over time.</p>
          </div>
          <div class="w2-funnel" aria-label="Illustrative website conversion journey">
            <article class="w2-funnel-step"><span>01</span><h3>Discover</h3><p>Cinematic brand storytelling, clear services, fleet, global reach, and search-friendly content establish credibility quickly.</p></article>
            <article class="w2-funnel-step"><span>02</span><h3>Personalize</h3><p>Traveler type and intent can change what the visitor sees first, reducing the amount of hunting required.</p></article>
            <article class="w2-funnel-step"><span>03</span><h3>Plan</h3><p>Smart planning, flight-aware airport stories, event operations, and corporate tools make the service easier to picture.</p></article>
            <article class="w2-funnel-step"><span>04</span><h3>Convert</h3><p>Qualified details can flow into quote, event, reservation, or corporate-account inquiries with stronger context for the RMA team.</p></article>
          </div>
          <div class="w2-measure">
            <div><h3>Built for measurement.</h3><p>On a production site, each meaningful interaction could become an analytics event—helping marketing see which experiences actually create qualified interest.</p></div>
            <div class="w2-event-chips"><span class="w2-event-chip">planner_started</span><span class="w2-event-chip">corporate_interest</span><span class="w2-event-chip">flight_demo_used</span><span class="w2-event-chip">event_dashboard_viewed</span><span class="w2-event-chip">global_city_selected</span><span class="w2-event-chip">quote_started</span></div>
          </div>
          <div class="w2-outcomes">
            <div class="w2-outcome"><strong>Faster service discovery</strong><span>Help visitors reach the right service path with fewer generic clicks.</span></div>
            <div class="w2-outcome"><strong>More qualified inquiries</strong><span>Carry intent, group size, and account interest into the lead conversation.</span></div>
            <div class="w2-outcome"><strong>Stronger event differentiation</strong><span>Sell coordination and visibility—not only vehicles and capacity.</span></div>
            <div class="w2-outcome"><strong>Clearer corporate value</strong><span>Show why an ongoing RMA relationship can be useful before asking for a form submission.</span></div>
          </div>
        </div>
      </section>
    `);
  }

  /* Make key cross-section links feel deliberate */
  document.querySelectorAll('a[href="#w2-corporate"],a[href="#w2-flight"],a[href="#w2-conversion"]').forEach(link => {
    link.addEventListener('click', event => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* Add a small secondary navigation hint without crowding the main nav */
  const plannerResult = document.querySelector('.planner-result');
  if (plannerResult && !plannerResult.querySelector('.w2-flight-shortcut')) {
    const shortcut = document.createElement('a');
    shortcut.className = 'w2-flight-shortcut';
    shortcut.href = '#w2-flight';
    shortcut.textContent = 'See the flight-aware airport concept →';
    shortcut.style.cssText = 'display:block;margin-top:12px;color:#9fa5ab;font-size:10px;font-weight:700;';
    plannerResult.appendChild(shortcut);
  }

  /* If the manager audience chooses request account, prefill rather than send an empty form */
  document.getElementById('w2-audience-secondary')?.addEventListener('click', event => {
    const active = document.querySelector('.w2-audience-btn.active')?.dataset.audience;
    if (active !== 'manager') return;
    event.preventDefault();
    prefillContact({ corporate: true, message: 'I am interested in discussing a corporate transportation account for our organization.' });
  });

  // Keep the logo source clean now that the SVG is the canonical asset.
  document.querySelectorAll('img[src="assets/rma-logo.png"]').forEach(image => { image.src = 'assets/rma-logo.svg'; });
})();
