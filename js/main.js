const toggleButton = document.querySelector('#toggle-switch');

toggleButton.addEventListener('change', (e) => {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  // if (toggleButton.checked) {
  //   document.querySelector('body').style.backgroundColor = 'hsl(230, 17%, 14%)';
  //   document.querySelectorAll('.box-large').forEach((e) => {
  //     e.style.backgroundColor = 'hsl(228, 28%, 20%)';
  //   });
  //   document.querySelector('.box-small').style.backgroundColor =
  //     'hsl(228, 28%, 20%)';
  //   document.querySelector('.main-headline').style.color = 'hsl(0, 0%, 100%)';
  //   document.querySelector('.sub-headline').style.color = 'hsl(0, 0%, 100%)';
  //   document.querySelector('.overview').style.color = 'hsl(0, 0%, 100%)';
  //   document.querySelectorAll('.metric-total').forEach((e) => {
  //     e.style.color = 'hsl(0, 0%, 100%)';
  //   });
  // } else {
  //   document.querySelector('body').style.backgroundColor = 'hsl(0, 0%, 100%)';
  //   document.querySelectorAll('.box-large').forEach((e) => {
  //     e.style.backgroundColor = 'hsl(227, 47%, 96%)';
  //   });
  //   document.querySelector('.box-small').style.backgroundColor =
  //     'hsl(227, 47%, 96%)';
  //   document.querySelector('.main-headline').style.color = 'hsl(230, 17%, 14%)';
  //   document.querySelector('.sub-headline').style.color = 'hsl(230, 17%, 14%)';
  //   document.querySelector('.overview').style.color = 'hsl(230, 17%, 14%)';
  //   document.querySelector('.metric-total').style.color = 'hsl(228, 12%, 44%)';
  // }
});
