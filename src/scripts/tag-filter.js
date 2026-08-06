export function initTagFilter(filterBar) {
  const buttons = filterBar.querySelectorAll('[data-tag-filter]');
  const cards = document.querySelectorAll('.filterable-card');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const tag = btn.dataset.tagFilter;
      cards.forEach((card) => {
        const tags = (card.dataset.tags || '').split(',').map((t) => t.trim());
        const show = tag === 'all' || tags.includes(tag);
        card.classList.toggle('is-hidden', !show);
      });
    });
  });
}