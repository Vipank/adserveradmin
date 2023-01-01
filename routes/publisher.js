const router = require("express").Router();
const publisherController = require("../controllers/publisherController");

router.post("/save", publisherController.savePublisher);
router.get("/get/:id", publisherController.getPublisher);
router.patch("/update/:id", publisherController.updatePublisher);

router.use("/:pubid/website", require("../routes/website"));
router.use("/:pubid/:platform/:platformId/adunit", require("../routes/adunit"));

module.exports = router;
