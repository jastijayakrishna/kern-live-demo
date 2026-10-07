module.exports = function clamp(value, min, max) {
  if (typeof value !== 'number') return min;
  if (value < min) return min;
  if (value > max) return max;
  return value;
};
