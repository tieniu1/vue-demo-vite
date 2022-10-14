const createConfig = (length) => {
  const obj = {};
  for (let index = 0; index < length; index++) {
    obj['item-' + index] = ['item-' + index];
  }
  return obj;
};
export const slotConfig = createConfig(10);
