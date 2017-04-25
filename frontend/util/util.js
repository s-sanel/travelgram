export const getIndex = (arr, obj) => {
  let ind;
  arr.forEach((el, index) => {
    if (el.id === obj.id) {
      ind = index;
    }
  });
  return ind;
};
