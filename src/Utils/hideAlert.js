export function hideAlert() {
  const alert = document.querySelector('#alert');
  setTimeout(() => {
    alert.remove();
  }, 3000);
}
