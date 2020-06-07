const admin = require("firebase-admin");

var Auth = async (req, res, next) => {
  try {
      // let auth =
      //   "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc0Mzg3ZGUyMDUxMWNkNDgzYTIwZDIyOGQ5OTI4ZTU0YjNlZTBlMDgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc3RhY2toYWNrdGFza3MiLCJhdWQiOiJzdGFja2hhY2t0YXNrcyIsImF1dGhfdGltZSI6MTU5MTUyMzc0MywidXNlcl9pZCI6IkhPTlM0eDU4am1neW5zVFpsVE1GRXB5RUw0RTMiLCJzdWIiOiJIT05TNHg1OGptZ3luc1RabFRNRkVweUVMNEUzIiwiaWF0IjoxNTkxNTIzNzQ0LCJleHAiOjE1OTE1MjczNDQsImVtYWlsIjoiczNzYW5naHZpQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJzM3NhbmdodmlAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.BZDy_OmJ1WBF1D90bUMimgHKao_gQoNZ8qvjXYWMPDoQj62coHTdg6NWvPhBZFilfSrzZqpaGs2LKaCKbd-EtSnYnRFlXXZ6YLkXhi2tWOK7i0XPHpl3Z1LsTMhddHVxhD76UjLwhc59f4dDBfMSvezgyMCcT9ayQGJv3R10LiXLW8UlWQS4yjcn2PpAcrxvbNaVMIOxFC234x07aGDhwxlI8QCbPnQCn1Lx3UApqa69kK51bv_pwxMQOWoWxel8UdbkWHOgA74XOoZAJmCPDCeZXP_bO1ToKVy44I-LJDBdzHyf_nhWhhPz3B4_n6F-wy42ngGGu744R0sIuPQV0g";
    let payload = await admin.auth().verifyIdToken(req.headers.token);
    if (!payload.email) throw new Error("Please Authenticate");
    req.body.owner = payload.email;
    next();
  } catch (e) {
    console.log(e);
    res.status(401).send(e);
  }
};

module.exports = Auth;
