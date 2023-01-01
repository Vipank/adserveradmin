const dbConnection = require("../../database/DbConnection");
const Advertiser = require("../models/advertiser");
if (!dbConnection) {
  throw new Error("Db connection not alive ...");
}

const saveAdvertiser = (advertiser)  => {
   return Advertiser.create(advertiser);
};

const getAdvertiser = (id)  => {
  return Advertiser.findByPk(id);
};

const updateAdvertiser = (id,advertiser)  => {
  return Advertiser.update(advertiser, {
    where: {
      id: id
    }
  });
};

module.exports = {
    saveAdvertiser,getAdvertiser,updateAdvertiser
};
