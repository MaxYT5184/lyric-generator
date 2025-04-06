document.getElementById("generateButton").addEventListener("click", async () => {
  const theme = document.getElementById("theme").value;
  const output = document.getElementById("output");

  if (!theme) {
    output.innerText = "❌ Please enter a theme!";
    return;
  }

  try {
    const response = await fetch("https://maxyt5184.github.io/lyric-generator/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt: theme })
    });

    const data = await response.json();
    output.innerText = data.lyrics || "No lyrics found.";
  } catch (error) {
    output.innerText = "❌ Failed to generate lyrics.";
  }
});
