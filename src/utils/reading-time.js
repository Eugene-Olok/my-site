// Computes an approximate reading time from raw markdown body text.
// Not exact (doesn't strip markdown syntax before counting), but good
// enough for a byline. Floors at 1 minute so an empty/short post never
// shows "0 min read."
const WORDS_PER_MINUTE = 200;

export function getReadingTime(bodyText = '') {
  const words = bodyText.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
  return { words, minutes };
}
