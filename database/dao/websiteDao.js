const dbConnection = require("../../database/DbConnection");
const Publisher = require("../models/publisher");
const Website = require("../models/websites");
if (!dbConnection) {
  throw new Error("Db connection not alive ...");
}

const saveWebsite = (website,pubid)  => {
  const websiteInstance = Website.build(website);
  websiteInstance.setPublisherId(pubid)
   return websiteInstance.save();
};

const getWebsite = (id)  => {
  return Website.findByPk(id);
};

const updateWebsite = (id,website)  => {
  return Website.update(website, {
    where: {
      id: id
    }
  });
};

module.exports = {
    saveWebsite,getWebsite,updateWebsite
};
