
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix || matrix === []) return [];

  let newArr = [];

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0) {
      newArr.push(matrix[i]);
    }
    if (i % 2 !== 0) {
      let revArr = matrix[i].reverse();
      newArr.push(revArr);
    }
  }

  const concatArr = [].concat.apply([], newArr);

  return concatArr;
};
