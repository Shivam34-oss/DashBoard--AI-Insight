const router = require("express").Router();
const { createGuide } = require("../controllers/guidecontroller");
const auth = require("../middleware/authMiddleware");

router.post("/", auth, createGuide);

module.exports = router;
