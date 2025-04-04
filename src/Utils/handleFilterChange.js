import { CardEvent } from '../Components/CardEvent/CardEvent';
import { NoEventsMessage } from '../Components/NoEventsMessage/NoEventsMessage';
import { getEvents } from '../Services/Event/getEvents';

export async function handleFilterChange({ content, category, ubi, title }) {
  content.innerHTML = '';

  const catValue = category.value;
  const ubiValue = ubi.value;

  let query = {
    category: catValue === 'Todo' ? '' : catValue,
    direction: ubiValue === 'Todo' ? '' : ubiValue,
    title: title
  };

  const events = await getEvents(query);

  if (events.length === 0) {
    const noEventsMessage = NoEventsMessage();
    content.append(noEventsMessage);
    return;
  }

  events.forEach((event) => {
    CardEvent({ event, parentelement: content });
  });
}
