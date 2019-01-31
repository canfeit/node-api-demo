const crypto = require("crypto");
const secret=process.env.node_secret||'demo';
exports.sign = function(data) {
  const header = {
    alg: "HS256",
    typ: "JWT"
  };
  const encodedHeader = encodeURIComponent(
    Buffer.from(JSON.stringify(header)).toString("base64")
  );
  const encodedPayload = encodeURIComponent(
    Buffer.from(JSON.stringify(data)).toString("base64")
  );
  const securedInput = `${encodedHeader}.${encodedPayload}`;
  const signature = encodeURIComponent(
    crypto
      .createHmac("sha256", secret)
      .update(securedInput)
      .digest("base64")
  );
  return [securedInput, signature].join(".");
};
exports.verify = function(token) {
  const [encodedHeader, encodedPayload, signature] = token.split(".");
  const securedInput = `${encodedHeader}.${encodedPayload}`;
  return (
    decodeURIComponent(signature) ===
      crypto
        .createHmac("sha256", secret)
        .update(securedInput)
        .digest("base64") &&
    JSON.parse(
      Buffer.from(decodeURIComponent(encodedPayload), "base64").toString()
    )
  );
};
