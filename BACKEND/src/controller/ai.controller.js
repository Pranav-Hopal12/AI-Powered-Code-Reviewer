// This line imports the `generateResponseFromAI` function and assigns it to the name `aiService`.
const aiService = require("../services/ai.service.js");

module.exports.getReview = async (req, res) => {
  try {
    const code = req.body.code;

    if (!code) {
      return res.status(400).send("Prompt is required");
    }

    // Because aiService IS the function, you can call it directly. This now works!
    const response = await aiService(code);

    res.status(200).send(response);
  } catch (error) {
    // This will catch errors from the aiService, like API failures.
    console.error("Error in controller:", error.message);
    res.status(500).send("An error occurred while processing your request.");
  }
};
