/**
 * @param {number} min
 * @param {number} max
 * @param {string} url
 * @return {boolean} result of filter
 */
export default function filterImagesBetween(min, max, url) {
  const current = parseInt(url.substring(url.lastIndexOf("_") + 1), 10);
  return current <= max && current >= min;
}

