
// the js for hoppin animation
const movieCards = document.querySelectorAll('.movie-card');

window.addEventListener('load', () => {
  anime({
    targets: movieCards,
    opacity: 1,
    translateY: [400, 0],
    delay: anime.stagger(100)
  });
});