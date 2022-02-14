const throwErrorIfDocumentDoesNotExist = async ({ id, model }) => {
  const document = await model.findById(id);
  if (!document) {
    const modelName = model.collection.collectionName;
    throw new Error({ name: '404', message: `${modelName} with id ${id} does not exist` });
  }
}

const throwErrorIfRelatedDoesNotExist = async ({ id, model }) => {
  const document = await model.findById(id);
  if (!document) {
    const modelName = model.collection.collectionName;
    throw new Error({ name: '400', message: `${modelName} with id ${id} does not exist` });
  }
}

const throwSomethingWentWrong = async () => {
  throw new Error({ name: '500', message: `${modelName} with id ${id} does not exist` });
}


module.exports = {
  throwErrorIfDocumentDoesNotExist,
  throwErrorIfRelatedDoesNotExist,
  throwSomethingWentWrong
}