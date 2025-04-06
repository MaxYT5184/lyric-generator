require("dotenv").config();
const express = require("express");
const fetch = require("node-fetch");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/generate", async (req, res) => {
  const prompt = req.body.prompt;

  if (!prompt) {
    return res.status(400).json({ error: "No prompt provided" });
  }

  try {
    // Call OpenAI API with your secret key from the .env file
    const openAIResponse = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003", // or another model
        prompt: `Generate a song lyric about: ${prompt}`,
        max_tokens: 150,
      }),
    });

    const data = await openAIResponse.json();
    res.json({ lyrics: data.choices[0].text.trim() });
  } catch (error) {
    console.error("Error generating lyrics:", error);
    res.status(500).json({ error: "Failed to generate lyrics" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
