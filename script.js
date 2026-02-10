async function generateLink() {
  const longUrl = document.getElementById("longUrl").value;
  const output = document.getElementById("output");
  const shortUrlEl = document.getElementById("shortUrl");

  if (!longUrl) {
    alert("Please enter a valid URL");
    return;
  }

  try {
    const response = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${longUrl}`
    );

    const data = await response.json();

    if (data.ok) {
      shortUrlEl.href = data.result.full_short_link;
      shortUrlEl.textContent = data.result.full_short_link;
      output.classList.remove("hidden");
    } else {
      alert("Failed to shorten URL");
    }
  } catch (error) {
    alert("Something went wrong");
  }
}
