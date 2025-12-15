const router = require("express").Router();
const {
  generateInsight,
  getInsights,
} = require("../controllers/insightController");
const auth = require("../middleware/authMiddleware");

router.post("/generate", auth, generateInsight);
router.get("/", auth, getInsights);

module.exports = router;
