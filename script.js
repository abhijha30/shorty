function generateLink() {
  const longUrl = document.getElementById("longUrl").value;

  if (!longUrl) {
    alert("Please enter a valid URL");
    return;
  }

  const code = Math.random().toString(36).substring(2, 8);
  const baseDomain = "https://shorty-six-iota.vercel.app";
  const shortUrl = `${baseDomain}/${code}`;

  // store mapping
  localStorage.setItem(code, longUrl);

  const shortUrlElement = document.getElementById("shortUrl");
  shortUrlElement.href = shortUrl;
  shortUrlElement.innerText = shortUrl;

  document.getElementById("output").classList.remove("hidden");
}
