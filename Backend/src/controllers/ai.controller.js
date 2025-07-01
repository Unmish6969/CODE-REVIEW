const aiService = require('../services/ai.service');

exports.getReview = async (req, res) => {
   const code = req.body.code;
   //const prompt='hello genai, can you help me with my code?'
    if (!code) {
        return res.status(400).send("Prompt is required");
    }

    try {
        const response = await aiService(code);
        res.send(response);
    } catch (err) {
        res.status(500).send("AI service error: " + err.message);
    }
};