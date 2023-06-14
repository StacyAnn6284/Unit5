exports.sum = function (array) {
  return array.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
};

exports.avg = function (array) {
  return array.reduce((prev, curr) => {
    return (prev + curr) / array.length;
  }, 0);
};
