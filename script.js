function generateLink() {
  const longUrl = document.getElementById("longUrl").value;

  if (!longUrl) {
    alert("Please enter a valid URL");
    return;
  }

  const baseDomain = "https://shorty-six-iota.vercel.app";
  const encodedUrl = encodeURIComponent(longUrl);

  const shortUrl = `${baseDomain}/?u=${encodedUrl}`;

  const shortUrlElement = document.getElementById("shortUrl");
  shortUrlElement.href = shortUrl;
  shortUrlElement.innerText = shortUrl;

  document.getElementById("output").classList.remove("hidden");
}
