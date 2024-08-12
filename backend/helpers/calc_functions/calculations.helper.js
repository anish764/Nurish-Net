const calculateBMI = (height, weight) => {
  height = height / 100;
  const bmi = weight / Math.pow(height, 2);
  return bmi.toFixed(2);
};

module.exports = {
  calculateBMI,
};
