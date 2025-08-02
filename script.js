// Sembunyikan splash-screen setelah 3 detik
window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.getElementById('splash-screen').style.display = 'none';
    document.querySelector('.konten').style.display = 'block';
  }, 3000);
});

// Geser produk
let slider = document.getElementById('slider');
let currentSlide = 0;

document.querySelector('.left').addEventListener('click', () => {
  currentSlide = Math.max(0, currentSlide - 1);
  updateSlider();
});

document.querySelector('.right').addEventListener('click', () => {
  const maxSlide = slider.children.length - 1;
  currentSlide = Math.min(maxSlide, currentSlide + 1);
  updateSlider();
});

function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Swipe gesture untuk HP
let startX = 0;
slider.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

slider.addEventListener('touchend', e => {
  let endX = e.changedTouches[0].clientX;
  let diff = startX - endX;
  if (diff > 50) {
    // geser ke kanan
    document.querySelector('.right').click();
  } else if (diff < -50) {
    // geser ke kiri
    document.querySelector('.left').click();
  }
});

const btnKembali = document.querySelector('.btn-kembali');
if (btnKembali) {
  btnKembali.addEventListener('click', () => {
    currentSlide = 0;
    updateSlider();
  });
}
