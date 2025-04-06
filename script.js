async function generateLyrics() {
  const theme = document.getElementById("themeInput").value;
  const output = document.getElementById("output");

  if (!theme.trim()) {
    output.innerText = "❗ Please enter a theme!";
    return;
  }

  output.innerText = "🎶 Generating lyrics...";

  try {
    const response = await fetch("https://your-backend-url.com/generate", {
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
}

function copyLyrics() {
  const text = document.getElementById("output").innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("✅ Lyrics copied to clipboard!");
  });
}

function downloadLyrics() {
  const text = document.getElementById("output").innerText;
  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "lyrics.txt";
  link.click();
}
