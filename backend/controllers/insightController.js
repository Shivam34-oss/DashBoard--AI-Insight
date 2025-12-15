const Insight = require("../models/Insight");

exports.generateInsight = async (req, res) => {
  try {
    const userId = req.user.id;

    // Fake AI Insight (Clueso-style)
    const insightText =
      "Users are dropping off during onboarding. Consider simplifying step 2.";

    const insight = await Insight.create({
      user: userId,
      text: insightText,
    });

    res.status(201).json(insight);
  } catch (err) {
    console.error("Insight error:", err);
    res.status(500).json({ message: "Failed to generate insight" });
  }
};

exports.getInsights = async (req, res) => {
  try {
    const userId = req.user.id;

    const insights = await Insight.find({ user: userId }).sort({
      createdAt: -1,
    });

    res.json(insights);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch insights" });
  }
};
