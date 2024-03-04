import jose from "jose";
export const generateJWTToken = async (payload) => {
  const alg = "HS256";
  const jwt = await new jose.SignJWT(payload)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setIssuer("urn:example:issuer")
    .setAudience("urn:example:audience")
    .setExpirationTime("2h")
    .sign(process.env.JWT_SECRET);
  console.log(jwt);
  return jwt;
};
