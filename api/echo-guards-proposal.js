import { timingSafeEqual } from "node:crypto";

function safeEqual(a, b) {
  const left = Buffer.from(a || "", "utf8");
  const right = Buffer.from(b || "", "utf8");
  return left.length === right.length && timingSafeEqual(left, right);
}

export default function handler(req, res) {
  res.setHeader("Cache-Control", "private, no-store, no-cache, max-age=0");
  res.setHeader("X-Robots-Tag", "noindex, nofollow, noarchive");
  res.setHeader("Referrer-Policy", "no-referrer");
  res.setHeader("X-Content-Type-Options", "nosniff");

  const expectedUser = process.env.ECHO_PROPOSAL_USERNAME;
  const expectedPassword = process.env.ECHO_PROPOSAL_PASSWORD;
  const proposal = process.env.ECHO_PROPOSAL_HTML;
  if (!expectedUser || !expectedPassword || !proposal) {
    return res.status(503).send("Private proposal is not configured.");
  }

  const header = req.headers.authorization || "";
  const match = header.match(/^Basic\s+(.+)$/i);
  let suppliedUser = "";
  let suppliedPassword = "";
  if (match) {
    try {
      const decoded = Buffer.from(match[1], "base64").toString("utf8");
      const separator = decoded.indexOf(":");
      if (separator >= 0) {
        suppliedUser = decoded.slice(0, separator);
        suppliedPassword = decoded.slice(separator + 1);
      }
    } catch {
      suppliedUser = "";
      suppliedPassword = "";
    }
  }

  if (!safeEqual(suppliedUser, expectedUser) || !safeEqual(suppliedPassword, expectedPassword)) {
    res.setHeader("WWW-Authenticate", 'Basic realm="Ashwin private proposal", charset="UTF-8"');
    return res.status(401).send("Authentication required.");
  }

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  return res.status(200).send(proposal);
}
