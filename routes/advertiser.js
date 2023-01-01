const router = require("express").Router();
const advertiserController = require("../controllers/advertiserController");

router.post("/save",advertiserController.saveAdvertiser);
router.get("/get/:id",advertiserController.getAdvertiser);
router.patch("/update/:id",advertiserController.updateAdvertiser);



module.exports = router;
