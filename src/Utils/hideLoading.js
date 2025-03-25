export function hideLoading(params) {
  const loading = document.querySelector('#loading-screen');
  if (loading) {
    loading.remove();
  }
}
