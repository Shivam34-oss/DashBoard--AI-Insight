const Guide = require("../models/Guide");

exports.createGuide = async (req, res) => {
  const guide = await Guide.create({
    title: req.body.title,
    steps: req.body.steps,
    userId: req.user.id
  });

  res.json(guide);
};
