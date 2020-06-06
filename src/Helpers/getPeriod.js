export const getPeriod = date =>
  (date ? date : new Date())
    .toISOString()
    .slice(0, 10)
    .split('-')
    .reverse()
    .join('.');
