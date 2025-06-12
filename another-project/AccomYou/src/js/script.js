  const openBtn = document.getElementById('openPopup');
  const closeBtn = document.getElementById('closePopup');
  const overlay = document.getElementById('popupOverlay');
  const body = document.body;

  // Buka popup
  openBtn.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    body.classList.add('overflow-hidden'); // Cegah scroll
  });

  // Tutup popup dengan tombol X
  closeBtn.addEventListener('click', () => {
    overlay.classList.add('hidden');
    body.classList.remove('overflow-hidden'); // Izinkan scroll lagi
  });

  // Tutup popup saat klik di area hitam luar
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.add('hidden');
      body.classList.remove('overflow-hidden'); // Izinkan scroll lagi
    }
  });