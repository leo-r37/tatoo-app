const generateNewId = async (model) => {
  const maxId = await model.max("id");
  const newId = maxId ? maxId + 1 : 1;
  return newId;
};

module.exports = generateNewId;
