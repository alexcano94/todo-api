const throwErrorIfDocumentDoesNotExist = async ({ id, model, email }) => {
  const document = await model.findById(id);
  if (!document) {
    const modelName = model.collection.collectionName;
    throw { code: 404, message: `${modelName} with ${email ? 'email ' + email : 'id ' + id} does not exist` };
  }
}

const throwErrorIfRelatedDoesNotExist = async ({ id, model }) => {
  const document = await model.findById(id);
  if (!document) {
    const modelName = model.collection.collectionName;
    throw { code: 400, message: `${modelName} with id ${id} does not exist` };
  }
}

const throwErrorIfUserExists = async ({ email }) => {
  throw { code: 403, message: `User with email ${email} already exists` };
}

const throwErrorIfUserDoesNotExist = async ({ email }) => {
  throw { code: 404, message: `User with email ${email} does not exists` };
}

const throwSomethingWentWrong = async () => {
  throw { code: 500, message: `${modelName} with id ${id} does not exist` };
}

const throwIfPasswordsDontMatch = async () => {
  throw { code: 403, message: `Wrong password` };
}

module.exports = {
  throwErrorIfDocumentDoesNotExist,
  throwErrorIfRelatedDoesNotExist,
  throwSomethingWentWrong,
  throwErrorIfUserExists,
  throwErrorIfUserDoesNotExist,
  throwIfPasswordsDontMatch
}