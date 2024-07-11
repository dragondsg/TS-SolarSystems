export const minBy = <T>(array: T[], cb: Function) => {
  let current = array[0];
  for (let item of array) {
    if (cb(current) > cb(item)) {
      current = item;
    }
  }
  return current;
};

export function maxBy<T>(array: T[], cb: Function): T | undefined {
  let current = array[0];
  for (let item of array) {
    if (cb(current) < cb(item)) {
      current = item;
    }
  }
  return current;
}
