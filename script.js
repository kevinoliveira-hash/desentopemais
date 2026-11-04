(() => {
  'use strict';

  // Identificadores que já estavam configurados no site principal.
  const ads = {
    id: 'AW-18498129474',
    phoneConversion: 'AW-18498129474/MI-RCNq9iJ4dEMKczPRE'
  };

  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  if (toggle && menu) {
    document.documentElement.classList.add('js');
    toggle.hidden = false;

    const setMenu = (open, returnFocus = false) => {
      menu.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
      if (returnFocus) toggle.focus();
    };

    toggle.addEventListener('click', () => {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    menu.addEventListener('click', (event) => {
      if (event.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false, true);
      }
    });
    document.addEventListener('click', (event) => {
      if (!menu.contains(event.target) && !toggle.contains(event.target)) setMenu(false);
    });
    window.matchMedia('(min-width: 1000px)').addEventListener('change', () => setMenu(false));
  }

  // A medição carrega em produção após os recursos principais da página.
  // Nenhum evento cancela ou adia a abertura do telefone/WhatsApp.
  const productionHosts = ['desentopemais.com.br', 'www.desentopemais.com.br'];
  if (!productionHosts.includes(window.location.hostname)) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', ads.id);

  const loadAds = () => {
    const tag = document.createElement('script');
    tag.async = true;
    tag.src = 'https://www.googletagmanager.com/gtag/js?id=' + ads.id;
    document.head.append(tag);
  };
  if (document.readyState === 'complete') loadAds();
  else window.addEventListener('load', loadAds, { once: true });

  document.addEventListener('click', (event) => {
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target.closest('a[href]');
    if (!link) return;

    if (link.protocol === 'tel:') {
      window.gtag('event', 'conversion', { send_to: ads.phoneConversion });
    } else if (link.hostname === 'wa.me') {
      // Clique, sem inventar um rótulo de conversão de WhatsApp.
      window.gtag('event', 'whatsapp_click', { contact_method: 'whatsapp' });
    }
  });
})();
