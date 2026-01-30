const paths = document.querySelectorAll('.draw');
const center = document.querySelector('.center');
const name = document.querySelector('.name');
const laser = document.querySelector('.laser');

let delay = 0;

paths.forEach(path => {
  const length = path.getTotalLength();
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;

  setTimeout(() => {
    laser.style.opacity = 1;
    path.style.transition = 'stroke-dashoffset 1.2s linear';
    path.style.strokeDashoffset = 0;
  }, delay);

  delay += 1300;
});

setTimeout(() => {
  laser.style.opacity = 0;
  center.style.opacity = 1;
}, delay);

setTimeout(() => {
  name.style.opacity = 1;
}, delay + 600);
