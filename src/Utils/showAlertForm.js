import { AlertForm } from '../Components/AlertForm/AlertForm';

export function showAlertForm({ message, parentElement }) {
  const alert = AlertForm({ message });
  parentElement.appendChild(alert);
}
