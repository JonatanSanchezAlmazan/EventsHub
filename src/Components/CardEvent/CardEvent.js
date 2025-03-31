export function CardEvent({event, admin = false}) {
    console.log(event);
    
    const card = document.createElement('div');
    const contentImg = document.createElement('div');
    const img = document.createElement('img');
    const headercard = document.createElement('div');
    const name = document.createElement('h3');
    const category = document.createElement('p');
    const infoCard = document.createElement('div');
    const day = document.createElement('p');
    const schedule = document.createElement('p');
    const direction = document.createElement('p');
    const numAttendees = document.createElement('p');

    img.src = event.image;
    name.textContent = event.title;
    category.textContent = event.category;
    day.textContent = event.date;
    schedule.textContent = event.schedule;
    direction.textContent = event.direction;
    numAttendees.textContent = event.attendees.length

    contentImg.append(img);
    headercard.append(name, category);
    infoCard.append(day,schedule,direction,numAttendees);

    card.append( headercard, infoCard);
    console.log(card);
    

    return card;
    
}