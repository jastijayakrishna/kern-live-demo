/**
 * Clamp a number to the inclusive range [min, max].
 * Non-numbers fall back to min.
 * @param {*} value input value
 * @param {number} min lower bound
 * @param {number} max upper bound
 * @returns {number} the clamped value
 */
module.exports = function clamp(value, min, max) {
  if (typeof value !== 'number') return min;
  if (value < min) return min;
  if (value > max) return max;
  return value;
};
