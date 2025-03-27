export function hideAlert() {
  const alert = document.querySelector('#alert');

  if (alert) {
    alert.remove();
  }
}
