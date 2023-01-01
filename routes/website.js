const router = require("express").Router({mergeParams: true});

const websiteController = require("../controllers/websiteController");

router.post("/save",websiteController.saveWebsite);
router.get("/get/:id",websiteController.getWebsite);
router.patch("/update/:id",websiteController.updateWebsite);



module.exports = router;
