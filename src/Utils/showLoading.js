import { Loading } from '../Components/Loading/Loading';

export function showLoading() {
  const loading = Loading();
  document.body.appendChild(loading);
}
