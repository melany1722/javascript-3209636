let score = 0;
const scoreEl = document.getElementById('score');
const clickableItems = document.querySelectorAll('.clickable');


clickableItems.forEach(item => {
  item.addEventListener('click', () => {
    score++;
    scoreEl.textContent = score;

   
    item.style.transform = 'scale(0)';
    setTimeout(() => {
      item.style.display = 'none';
    }, 300);
  });
});


const mario = document.querySelector('.mario');
setInterval(() => {
  mario.style.transition = 'bottom 0.4s';
  mario.style.bottom = '160px';
  setTimeout(() => {
    mario.style.bottom = '60px';
  }, 400);
}, 2500);







    
 