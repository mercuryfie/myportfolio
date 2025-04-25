const button = document.querySelector('button');

button.addEventListener('click', function(e) {
  const ripple = document.createElement('span');
  ripple.classList.add('ripple');
  this.appendChild(ripple);

  const x = e.clientX - e.target.offsetLeft;
  const y = e.clientY - e.target.offsetTop;

  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;

  setTimeout(() => {
    ripple.remove();
  }, 600);
});