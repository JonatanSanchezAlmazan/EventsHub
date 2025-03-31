export function DashboardAttendees(params) {
    const content = document.createElement('div');
    const header = document.createElement('div');
    const title = document.createElement('h2');
    const contentEvents = document.createElement('div');

    title.textContent = 'Eventos a los que asisto';

    content.id = 'myEventAttendees'
    content.classList.add('w-[500px', 'h-[500px]');
    header.classList.add('mt-[30px]')

    header.append(title);
    content.append(header, contentEvents);

    return content
    
}