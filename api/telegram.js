// api/telegram.js
export default function handler(req, res) {
  const telegramUrl = "https://ultimatecommunity.mssg.me/";

  // 302 редирект
  res.writeHead(302, { Location: telegramUrl });
  res.end();
}
