export function navigate({ event, route }) {
  event.preventDefault();
  window.history.pushState('', '', route.href);
  route.page();
}
