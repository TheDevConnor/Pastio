const HOURS = [
  { day: "Sunday",    open: "12:00 PM", close: "8:00 PM" },
  { day: "Monday",    open: "12:00 PM", close: "9:30 PM" },
  { day: "Tuesday",   open: "12:00 PM", close: "9:30 PM" },
  { day: "Wednesday", open: "12:00 PM", close: "9:30 PM" },
  { day: "Thursday",  open: "12:00 PM", close: "9:30 PM" },
  { day: "Friday",    open: "12:00 PM", close: "10:00 PM" },
  { day: "Saturday",  open: "12:00 PM", close: "10:00 PM" }
];

(function renderHours() {
  const mount = document.getElementById('hours-mount');
  if (!mount) return;

  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const todayName = dayNames[new Date().getDay()];

  const order = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  const byDay = {};
  HOURS.forEach(h => { byDay[h.day] = h; });

  const html = order.map(dayName => {
    const h = byDay[dayName];
    if (!h) return '';
    const isToday = dayName === todayName;
    const timeText = h.closed ? "Closed" : `${h.open} – ${h.close}`;
    return `
      <div class="hours-row${isToday ? ' today' : ''}">
        <strong>${dayName}</strong><span>${timeText}</span>
      </div>`;
  }).join('');

  mount.innerHTML = html;
})();