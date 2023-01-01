const dbConnection = require("../DbConnection");
const Adunit = require("../models/adunit");

if (!dbConnection) {
  throw new Error("Db connection not alive ...");
}

const saveAdunit = (pubid,platform,platformId,adunitData)  => {
  const adunitInstance = Adunit.build(adunitData);
  adunitInstance.setPublisherId(pubid)
  adunitInstance.setPlatfrom(platform)
  adunitInstance.setPlatfomId(platformId)
  return adunitInstance.save();
};

const getAdunit = (id)  => {
  return Adunit.findByPk(id);
};

const updateAdunit = (id,website)  => {
  return Adunit.update(website, {
    where: {
      id: id
    }
  });
};

module.exports = {
  saveAdunit,getAdunit,updateAdunit
};
