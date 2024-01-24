import crypto from "crypto-js";

export default function generateShortURL(fullUrl: any) {
  const hash = crypto.SHA256(fullUrl).toString(crypto.enc.Hex);

  const shortHash = hash.substring(0, 6);

  const shortUrl = `http://localhost/${shortHash}`;

  return shortUrl;
}
