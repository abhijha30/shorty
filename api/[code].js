export default function handler(req) {
  const { code } = req.query;

  return new Response(
    `
    <script>
      const url = localStorage.getItem("${code}");
      if (url) {
        window.location.href = url;
      } else {
        document.body.innerHTML = "<h2>Short link not found</h2>";
      }
    </script>
    `,
    {
      headers: { "content-type": "text/html" }
    }
  );
}
