const dbConnection = require("../../database/DbConnection");
const Publisher = require("../models/publisher");
if (!dbConnection) {
  throw new Error("Db connection not alive ...");
}

const savePublisher = (publisher)  => {
   return Publisher.create(publisher);
};

const getPublisher = (id)  => {
  return Publisher.findByPk(id);
};

const updatePublisher = (id,publisher)  => {
  return Publisher.update(publisher, {
    where: {
      id: id
    }
  });
};

module.exports = {
    savePublisher,getPublisher,updatePublisher
};
