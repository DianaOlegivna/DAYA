import lottie from 'lottie-web';

export function lottieAnimation () { 
 lottie.loadAnimation({
  container: document.getElementById('lottie-container'),
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: "https://lottie.host/b6a80aba-7468-4437-9560-e085608b410f/IHUhdH4SjK.json"
});
}
   