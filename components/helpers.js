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

/**
 * @param {string} a
 * @param {string} b
 * @return {boolean} result of sort
 */
export function sortImages(a, b) {
  const aNumber = parseInt(a.substring(a.lastIndexOf("_") + 1), 10);
  const bNumber = parseInt(b.substring(b.lastIndexOf("_") + 1), 10);
  if (aNumber > bNumber) {
    return 1;
  }
  if (bNumber > aNumber) {
    return -1;
  }
  return 0;
}
