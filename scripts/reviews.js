const REVIEWS = [
  {
    stars: 5,
    text: "Their pizza is fantastic, and the service and quality are consistently outstanding — it's the first stop friends make when they fly in to visit.",
    date: "a month ago"
  },
  {
    stars: 5,
    text: "A go-to spot in Tradition the reviewer visits monthly with their spouse — the only catch is no reservations and a long wait, which says a lot about how good the food and atmosphere are.",
    date: "a month ago"
  },
  {
    stars: 5,
    text: "A warm, inviting atmosphere with attentive service and every dish tasting fresh — the reviewer could tell real care went into every detail.",
    date: "a month ago"
  },
  {
    stars: 5,
    text: "A guest who has vacationed throughout Italy called this the best carbonara they've ever had, on their third visit back.",
    date: "2 months ago"
  },
  {
    stars: 5,
    text: "A party of ten had an outstanding first visit on a packed Saturday night — server Sebastian went out of his way to make it exceptional, with cocktails, appetizers, and the main course all timed perfectly.",
    date: "5 months ago"
  }
];

(function renderReviews() {
  const mount = document.getElementById('reviews-mount');
  if (!mount) return;

  const starsToHtml = (n) => {
    const full = '★'.repeat(n);
    const empty = '☆'.repeat(5 - n);
    return full + empty;
  };

  const html = REVIEWS.slice(0, 5).map(r => `
    <div class="review-card">
      <div class="stars">${starsToHtml(r.stars)}</div>
      <p>${r.text}</p>
      <div class="who">Google review &middot; ${r.date}</div>
    </div>
  `).join('');

  mount.innerHTML = html;
})();