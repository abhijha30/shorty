function generateLink() {
  const longUrl = document.getElementById("longUrl").value;
  if (!longUrl) {
    alert("Please enter a valid URL");
    return;
  }

  const code = Math.random().toString(36).substring(2, 8);
  const baseDomain = "https://shorty-six-iota.vercel.app";
  const shortUrl = `${baseDomain}/${code}`;

  // 🔐 store mapping
  localStorage.setItem(code, longUrl);

  // QR
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(shortUrl)}`;

  document.getElementById("shortUrl").href = shortUrl;
  document.getElementById("shortUrl").innerText = shortUrl;

  document.getElementById("qrImage").src = qrUrl;
  document.getElementById("downloadQR").href = qrUrl;

  document.getElementById("output").classList.remove("hidden");
}
