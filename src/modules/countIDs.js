const countIds = (data) => {
  const ids = data.categories.map((category) => category.idCategory);
  return ids.length;
};

export default countIds;
