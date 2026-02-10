async function generateLink() {
  const longUrl = document.getElementById("longUrl").value.trim();
  const output = document.getElementById("output");
  const shortUrlEl = document.getElementById("shortUrl");

  if (!longUrl) {
    alert("Please enter a valid URL");
    return;
  }

  try {
    const response = await fetch(
      `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`
    );

    const shortUrl = await response.text();

    if (shortUrl.startsWith("http")) {
      shortUrlEl.href = shortUrl;
      shortUrlEl.textContent = shortUrl;
      output.classList.remove("hidden");
    } else {
      throw new Error("Invalid response");
    }
  } catch (error) {
    alert("Failed to shorten link. Please try again.");
    console.error(error);
  }
}
