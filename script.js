function generateLink() {
  const longUrl = document.getElementById("longUrl").value;

  if (!longUrl) {
    alert("Please enter a valid URL");
    return;
  }

  // generate random short code
  const randomCode = Math.random().toString(36).substring(2, 8);

  // ✅ USE REAL DOMAIN (VERY IMPORTANT)
  const baseDomain = "https://shorty-six-iota.vercel.app";
  const shortUrl = `${baseDomain}/${randomCode}`;

  // QR code API
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(shortUrl)}`;

  // show short URL
  const shortUrlElement = document.getElementById("shortUrl");
  shortUrlElement.href = shortUrl;
  shortUrlElement.innerText = shortUrl;

  // show QR
  const qrImage = document.getElementById("qrImage");
  qrImage.src = qrUrl;

  // download QR
  const downloadQR = document.getElementById("downloadQR");
  downloadQR.href = qrUrl;
  downloadQR.download = "shorty-qr.png";

  // reveal output
  document.getElementById("output").classList.remove("hidden");
}
