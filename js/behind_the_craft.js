// Scroll Reveal
const section = document.querySelector('.craft-motion-section');
window.addEventListener('scroll', () => {
  const top = section.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  if(top < windowHeight - 100){
    section.classList.add('show');
  }
});

// Floating diamonds in background
const diamondImages = [
  '/img/test_imgs/bg_diamond/diam_1.png',
  '/img/test_imgs/bg_diamond/diam_2.png',
  '/img/test_imgs/bg_diamond/diam_3.png',
  '/img/test_imgs/bg_diamond/diam_4.png',
  '/img/test_imgs/bg_diamond/diam_5.png',
  '/img/test_imgs/bg_diamond/diam_6.png'
];
const floatingDiv = document.querySelector('.floating-diamonds');

for(let i=0; i<20; i++){
  const img = document.createElement('img');
  img.src = diamondImages[Math.floor(Math.random() * diamondImages.length)];
  img.style.left = Math.random() * 100 + 'vw';
  img.style.animationDuration = 5 + Math.random() * 10 + 's';
  img.style.width = 20 + Math.random() * 30 + 'px';
  floatingDiv.appendChild(img);
}
