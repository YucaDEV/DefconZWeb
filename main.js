document.querySelectorAll('[data-copy-ip]').forEach((btn) => {
  btn.addEventListener('click', async () => {
    const ip = '38.225.91.3:2312';
    try {
      await navigator.clipboard.writeText(ip.trim());
      btn.textContent = 'IP copiada';
      setTimeout(() => (btn.textContent = 'Copiar IP'), 1600);
    } catch (err) {
      console.error('No se pudo copiar la IP', err);
      btn.textContent = 'No se pudo copiar';
      setTimeout(() => (btn.textContent = 'Copiar IP'), 1600);
    }
  });
});

const track = document.querySelector('.gallery__track');
const prev = document.querySelector('[data-gallery-prev]');
const next = document.querySelector('[data-gallery-next]');

if (track && prev && next) {
  const slides = Array.from(track.children);
  let index = 0;

  const setSlide = (value) => {
    index = Math.max(0, Math.min(value, slides.length - 1));
    track.style.transform = `translateX(-${index * 100}%)`;
    prev.disabled = index === 0;
    next.disabled = index === slides.length - 1;
  };

  prev.addEventListener('click', () => setSlide(index - 1));
  next.addEventListener('click', () => setSlide(index + 1));

  setSlide(0);
}

const mapOpenBtn = document.querySelector('[data-map-open]');
const mapModal = document.querySelector('[data-map-modal]');
const mapCloseEls = document.querySelectorAll('[data-map-close]');

const openMapModal = () => {
  if (!mapModal) return;
  mapModal.classList.add('is-open');
  mapModal.setAttribute('aria-hidden', 'false');
};

const closeMapModal = () => {
  if (!mapModal) return;
  mapModal.classList.remove('is-open');
  mapModal.setAttribute('aria-hidden', 'true');
};

if (mapOpenBtn && mapModal) {
  mapOpenBtn.addEventListener('click', openMapModal);
  mapCloseEls.forEach((el) => el.addEventListener('click', closeMapModal));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMapModal();
  });
}
