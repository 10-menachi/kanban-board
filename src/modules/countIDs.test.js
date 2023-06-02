import countIds from './countIDs.js';

test('countIds correctly counts the number of food item IDs', () => {
  const mockData = {
    categories: [
      { idCategory: 1, strCategory: 'Category 1' },
      { idCategory: 2, strCategory: 'Category 2' },
      { idCategory: 3, strCategory: 'Category 3' },
    ],
  };

  const result = countIds(mockData);
  expect(result).toBe(3);
});
