export function hideAlertForm() {
  const alert = document.querySelector('#alert');
  setTimeout(() => {
    alert.remove();
  }, 2000);
}
