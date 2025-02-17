type ItemComparer<Item> = (a: Item, b: Item) => boolean;

export default function areArraysEqual<Item>(
  array1: Item[],
  array2: Item[],
  itemComparer: ItemComparer<Item> = (a, b) => a === b,
) {
  return (
    array1.length === array2.length &&
    array1.every((value, index) => itemComparer(value, array2[index]))
  );
}
