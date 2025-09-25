
    (function () {
      // Utility to read query param
      function getQueryParam(name) {
        const url = new URL(window.location.href);
        return (url.searchParams.get(name) || '').toLowerCase();
      }

      // Services content map
      const SERVICES = {
        'ai-agent': {
          id: 'ai-agent',
          title: 'AI Agent Development',
          tagline: 'Custom WhatsApp & voice AI agents for bookings, support, and automation.',
          heading: 'Build intelligent agents that handle bookings, FAQs and transactions',
          lead: 'We design, build and deploy AI agents that integrate with WhatsApp, SMS and voice channels to automate customer interactions while preserving human handover when needed.',
          image: 'assets/img/innovation.png',
          overview: `
            <p><strong>What this service solves:</strong> Manual booking, repetitive support tasks, and slow lead capture. Our AI agents reduce response times, scale support, and increase conversions by handling routine interactions.</p>
            <p>We specialise in low-bandwidth integrations (WhatsApp, SMS, phone calls) and ensure robust logging, analytics, and secure handling of customer data.</p>
          `,
          features: [
            { title: 'WhatsApp & SMS Integration', text: 'Full two-way messaging flows with templated messages, attachments and media support.' },
            { title: 'Dialog Design & NLU', text: 'Intents, entities, slot-filling and fallback strategies for reliable interactions.' },
            { title: 'Payment & Booking Flows', text: 'Secure payment links, reservation management and confirmation flows.' },
            { title: 'Human Handover', text: 'Smooth transfer to agents with context and transcripts.' }
          ],
          process: [
            { step: 'Discovery & KPI definition', desc: 'Map user journeys, success metrics, and system integrations.' },
            { step: 'Prototype & Dialog Design', desc: 'Create conversation flows, sample messages and a test agent.' },
            { step: 'Build & Integrate', desc: 'Connect WhatsApp/SMS providers, back-end systems, and databases.' },
            { step: 'Test, Launch & Iterate', desc: 'Monitor behavior, refine NLU and deploy to production with analytics.' }
          ],
          facts: [
            { label: 'Duration:', value: '6 - 12 weeks' },
            { label: 'Delivery:', value: 'Weekly sprints & staging demo' },
            { label: 'Team Size:', value: '3 - 5 specialists' },
            { label: 'Support:', value: 'Priority SLA available' }
          ],
          testimonial: {
            quote: 'The WhatsApp agent reduced our front-desk calls by 60% and doubled booking speed. Setup was smooth and they handed over a usable admin dashboard.',
            name: 'Aisha Bello',
            role: 'Operations Manager, Lagos Lodge',
            img: 'assets/img/person/person-f-3.webp'
          }
        },

        'voice-ai': {
          id: 'voice-ai',
          title: 'Voice AI Solutions',
          tagline: 'Voice-first AI for low-connectivity environments and phone-based workflows.',
          heading: 'Voice assistants that talk to your customers and complete tasks by phone',
          lead: 'We design voice experiences for IVR, automated booking calls, and phone-based surveys — ideal for areas with limited data connectivity.',
          image: 'assets/img/voice-call.png',
          overview: `
            <p><strong>What this service solves:</strong> Poor web connectivity and customers who prefer phone calls. Our Voice AI covers speech recognition, telephony providers, local-language support and fallbacks to SMS or human operators.</p>
            <p>We architect low-latency systems using edge-friendly speech models for accurate recognition and natural TTS for clear responses.</p>
          `,
          features: [
            { title: 'Telephony Integration', text: 'Twilio/Plivo/Local SIP gateways for inbound & outbound calls.' },
            { title: 'ASR & TTS', text: 'Accurate speech-to-text and natural text-to-speech tuned for local accents.' },
            { title: 'Dialog Management', text: 'Multi-turn voice dialogues with confirmations and error recovery.' },
            { title: 'Call Analytics', text: 'Transcripts, sentiment scores and call metrics for continuous improvement.' }
          ],
          process: [
            { step: 'Voice Research & Prompting', desc: 'Collect sample recordings and design prompts for local accents.' },
            { step: 'ASR/TTS Tuning', desc: 'Fine-tune recognition and voices to reduce mis-understandings.' },
            { step: 'Telephony Setup & Integrations', desc: 'Provision numbers, setup IVR and back-end hooks.' },
            { step: 'Pilot & Scale', desc: 'Run pilot campaigns, gather call logs and scale to production.' }
          ],
          facts: [
            { label: 'Duration:', value: '8 - 14 weeks' },
            { label: 'Delivery:', value: 'Pilot + phased rollout' },
            { label: 'Team Size:', value: '3 - 6 specialists' },
            { label: 'Support:', value: '24/7 monitoring option' }
          ],
         
        },

        'multilingual-ai': {
          id: 'multilingual-ai',
          title: 'Multilingual AI',
          tagline: 'AI that understands and speaks Igbo, Yoruba, Hausa, English and Pidgin.',
          heading: 'Reach every user with natural language support across major local languages',
          lead: 'We build multilingual models and pipelines so your product speaks your customer’s language — with cultural nuance and context-aware responses.',
          image: 'assets/img/sabiai.jpg',
          overview: `
            <p><strong>What this service solves:</strong> Language barriers preventing adoption and engagement. We provide translation, intent mapping, and culturally aware responses for better user trust and reduced friction.</p>
            <p>Our approach combines multilingual NLU, language fallbacks, glossary management and voice recordings for authentic TTS output.</p>
          `,
          features: [
            { title: 'Multilingual NLU', text: 'Intent extraction and entity recognition across languages with fallback logic.' },
            { title: 'Localized Content', text: 'Content authoring and glossary management to keep tone consistent.' },
            { title: 'Voice & Text Support', text: 'TTS voices and text flows in supported languages with phonetic tuning.' },
            { title: 'Quality Assurance', text: 'Linguistic testing with native speakers and domain reviewers.' }
          ],
          process: [
            { step: 'Language Discovery & Corpus Collection', desc: 'Collect terms, recordings and example dialogues per language.' },
            { step: 'Modeling & Testing', desc: 'Train/test NLU models and evaluate with native-speaker test sets.' },
            { step: 'Integration & Fallbacks', desc: 'Integrate to channels and set graceful fallbacks between languages.' },
            { step: 'Localization QA & Launch', desc: 'Linguistic QA, pilot and continuous improvement.' }
          ],
          facts: [
            { label: 'Duration:', value: '6 - 10 weeks' },
            { label: 'Delivery:', value: 'Bilingual/multilingual MVP then expansion' },
            { label: 'Team Size:', value: '2 - 5 specialists' },
            { label: 'Support:', value: 'Localization updates included' }
          ],
         
        },

        'ecommerce': {
          id: 'ecommerce',
          title: 'E-commerce Development',
          tagline: 'Build secure, conversion-focused online stores with local payment options.',
          heading: 'End-to-end e-commerce platforms: from product catalogues to payments and shipping',
          lead: 'We build stores optimized for performance, mobile-first UX, secure payments, inventory management and integration with logistics providers and payment gateways relevant to your market.',
          image: 'assets/img/dambass.PNG',
          overview: `
            <p><strong>What this service solves:</strong> Fragmented storefronts and manual order processes. Our solutions combine responsive front-ends, admin dashboards, inventory control, and local payment & delivery integrations.</p>
            <p>We also provide analytics and conversion optimization to grow revenue after launch.</p>
          `,
          features: [
            { title: 'Custom Storefronts', text: 'Fast, responsive UI with conversion-optimized flows.' },
            { title: 'Payments & Checkout', text: 'Integrated with Paystack, Flutterwave, Stripe or local payment providers.' },
            { title: 'Inventory & Orders', text: 'Backend inventory control, variant management and order fulfilment.' },
            { title: 'Admin & Analytics', text: 'Admin dashboards, reporting and marketing integrations.' }
          ],
          process: [
            { step: 'Requirements & Catalog Modelling', desc: 'Define categories, SKUs, shipping and tax rules.' },
            { step: 'Theme & UX Implementation', desc: 'Design mobile-first checkout and product pages.' },
            { step: 'Integrations & Payments', desc: 'Integrate gateways, shipping APIs and notifications.' },
            { step: 'Testing, Launch & Growth', desc: 'QA, performance testing and conversion experiments.' }
          ],
          facts: [
            { label: 'Duration:', value: '8 - 12 weeks' },
            { label: 'Delivery:', value: 'Staging then live rollout' },
            { label: 'Team Size:', value: '3 - 6 specialists' },
            { label: 'Support:', value: 'E-commerce support & optimization' }
          ],
          
        },

        'real-estate': {
          id: 'real-estate',
          title: 'Real Estate Websites',
          tagline: 'Property portals and agency websites with listings, inspections & booking flows.',
          heading: 'Property platforms that help buyers, renters and agents connect quickly',
          lead: 'We deliver property sites with search & filter, MLS / IDX integrations (where available), scheduling for inspections, booking workflows and agent dashboards.',
          image: 'assets/img/realll.PNG',
          overview: `
            <p><strong>What this service solves:</strong> Poor property discovery and complex booking. We build searchable property catalogs, map integration, lead capture, and site admin to manage listings and viewings.</p>
            <p>Features include short-let bookings, virtual tours, and inspection scheduling workflows.</p>
          `,
          features: [
            { title: 'Property Listings & Search', text: 'Advanced filters, saved searches and map-based discovery.' },
            { title: 'Bookings & Inspections', text: 'Schedule viewings, short-let bookings and manage availability.' },
            { title: 'Agent Portals', text: 'Agent dashboards, lead management and property analytics.' },
            { title: 'Payment & Deposits', text: 'Secure payment workflows for deposits and rentals.' }
          ],
          process: [
            { step: 'Discovery & Data Model', desc: 'Define property types, attributes and listing workflows.' },
            { step: 'Design & UX for Discovery', desc: 'Search-first design with clear calls-to-action.' },
            { step: 'Build & Integrate', desc: 'Connect payment gateways, map APIs and MLS (if available).' },
            { step: 'Train Agents & Launch', desc: 'Admin training, content migration and launch support.' }
          ],
          facts: [
            { label: 'Duration:', value: '6 - 12 weeks' },
            { label: 'Delivery:', value: 'Live site + admin panel' },
            { label: 'Team Size:', value: '3 - 5 specialists' },
            { label: 'Support:', value: 'Maintenance & listing sync' }
          ],
         
        },

        'conversational-ai': {
          id: 'conversational-ai',
          title: 'Conversational AI',
          tagline: 'Smart chatbots and assistants for websites, apps and messaging channels.',
          heading: 'Conversational systems that keep users engaged and help them complete tasks',
          lead: 'We create chat-based experiences for web and messaging channels that combine retrieval, LLM assistants and business logic to answer questions, qualify leads and complete transactions.',
          image: 'assets/img/real-estate.png',
          overview: `
            <p><strong>What this service solves:</strong> Slow self-service and inconsistent support — conversational AI handles knowledge retrieval, workflows and escalations with consistent tone and accuracy.</p>
            <p>We combine knowledge connectors, RAG (retrieval-augmented generation) where appropriate, and human escalation flows for safe, accurate outcomes.</p>
          `,
          features: [
            { title: 'Knowledge Connectors', text: 'Sync docs, FAQs and product data for accurate answers.' },
            { title: 'LLM & Retrieval', text: 'Use retrieval + generation to deliver concise, sourced responses.' },
            { title: 'Actionable Flows', text: 'Trigger purchases, bookings or support tickets from conversations.' },
            { title: 'Monitoring & Safety', text: 'Logging, moderation and audit trails to maintain compliance.' }
          ],
          process: [
            { step: 'Knowledge Audit', desc: 'Gather and structure content to power the assistant.' },
            { step: 'Prototype & RAG setup', desc: 'Wire retrieval pipelines and test answer quality.' },
            { step: 'Integrate UI & Actions', desc: 'Embed chat widget and wire in actions to backend systems.' },
            { step: 'Launch & Optimize', desc: 'Monitor logs, iterate prompts and improve accuracy.' }
          ],
          facts: [
            { label: 'Duration:', value: '6 - 10 weeks' },
            { label: 'Delivery:', value: 'Pilot deployment + iterations' },
            { label: 'Team Size:', value: '2 - 5 specialists' },
            { label: 'Support:', value: 'Ongoing improvement plans' }
          ],
         
        }
      };

      // default service
      const DEFAULT_SERVICE = 'ai-agent';

      // populate DOM
      function renderService(serviceKey) {
        const svc = SERVICES[serviceKey] || SERVICES[DEFAULT_SERVICE];

        document.getElementById('service-title').innerText = svc.title;
        document.getElementById('service-tagline').innerText = svc.tagline;
        document.getElementById('breadcrumb-service').innerText = svc.title;
        document.getElementById('service-heading').innerText = svc.heading;
        document.getElementById('service-lead').innerText = svc.lead;
        const imgEl = document.getElementById('service-image');
        imgEl.src = svc.image;
        imgEl.alt = svc.title;

        // overview
        document.getElementById('service-overview').innerHTML = svc.overview;

        // features
        const featuresContainer = document.getElementById('service-features');
        featuresContainer.innerHTML = '';
        svc.features.forEach(f => {
          const col = document.createElement('div');
          col.className = 'col-md-6';
          col.innerHTML = `
            <div class="feature-item">
              <i class="bi bi-check-circle flex-shrink-0"></i>
              <div>
                <h5>${f.title}</h5>
                <p>${f.text}</p>
              </div>
            </div>`;
          featuresContainer.appendChild(col);
        });

        // process steps
        const processContainer = document.getElementById('service-process');
        processContainer.innerHTML = '';
        svc.process.forEach((p, idx) => {
          const step = document.createElement('div');
          step.className = 'step-item';
          step.innerHTML = `
            <div class="step-number">${String(idx + 1).padStart(2, '0')}</div>
            <div class="step-content">
              <h5>${p.step}</h5>
              <p>${p.desc}</p>
            </div>`;
          processContainer.appendChild(step);
        });

        // facts
        const factsList = document.getElementById('service-facts');
        factsList.innerHTML = '';
        svc.facts.forEach(f => {
          const li = document.createElement('li');
          li.innerHTML = `<span class="fact-label">${f.label}</span> <span class="fact-value">${f.value}</span>`;
          factsList.appendChild(li);
        });

        // testimonial
        const testimonialArea = document.getElementById('service-testimonial');
        testimonialArea.innerHTML = `
          <p>"${svc.testimonial.quote}"</p>
          <div class="testimonial-author">
            <img src="${svc.testimonial.img}" alt="${svc.testimonial.name}" class="author-image">
            <div class="author-info">
              <h5>${svc.testimonial.name}</h5>
              <span>${svc.testimonial.role}</span>
            </div>
          </div>`;

        // quote subject
        document.getElementById('quote-subject').value = `Service Quote Request - ${svc.title}`;
      }

      // Read service param and render
      const selected = getQueryParam('service') || DEFAULT_SERVICE;
      renderService(selected);

      // Optional: update page title in the browser
      if (SERVICES[selected]) {
        document.title = SERVICES[selected].title + ' - KayBenedict';
      } else {
        document.title = SERVICES[DEFAULT_SERVICE].title + ' - KayBenedict';
      }
    })();
