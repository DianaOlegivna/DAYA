export function servicesList() { 
  const textItems = document.querySelectorAll('.faq-question');

textItems.forEach(item => {
  item.addEventListener('click', () => {
    const details = item.nextElementSibling;
    details.classList.toggle('show'); 
  });
});
}