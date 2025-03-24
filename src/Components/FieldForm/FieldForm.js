export function FieldForm({ typeInput = 'text', labelText, ph }) {
  const fieldForm = document.createElement('div');
  const label = document.createElement('label');
  const input = document.createElement('input');

  fieldForm.classList.add('flex', 'flex-col', 'gap-1');
  input.classList.add('border', 'rounded-lg', 'p-2', 'text-xs');
  label.classList.add('text-xs');
  label.textContent = labelText;
  input.placeholder = ph;
  input.type = typeInput;

  fieldForm.append(label, input);
  return fieldForm;
}
