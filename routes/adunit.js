const router = require("express").Router({mergeParams: true});
const adunitController = require("../controllers/adunitController");

router.post("/save",adunitController.saveAdunit);
router.get("/get/:id",adunitController.getAdunit);
router.patch("/update/:id",adunitController.updateAdunit);



module.exports = router;
