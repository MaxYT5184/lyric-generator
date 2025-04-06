function generateLyrics() {
  const theme = document.getElementById("themeInput").value.toLowerCase();
  let lyrics = "";

  if (theme.includes("love")) {
    lyrics = `In the moonlight we collide\nHearts like stars, side by side\nLove’s a fire, can't deny\nYou and I, we touch the sky`;
  } else if (theme.includes("sad")) {
    lyrics = `Rain falls, so does my heart\nTorn apart, we're miles apart\nEchoes whisper in the night\nTears fall but out of sight`;
  } else if (theme.includes("rap")) {
    lyrics = `Yeah I rise from the block with a pen and a plan\nSteppin' up strong like a lyrical man\nBars so cold they freeze the air\nSpit truth so real, no cap, I swear`;
  } else {
    lyrics = `The wind carries dreams so high\nUnderneath the open sky\nRhythms flow from deep inside\nLet the melody be your guide`;
  }

  document.getElementById("output").innerText = lyrics;
}

function copyLyrics() {
  const text = document.getElementById("output").innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Lyrics copied to clipboard!");
  });
}
