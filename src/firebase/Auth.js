const admin = require("firebase-admin");

var Auth = async (req, res, next) => {
  try {
      // let auth =
      //   "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc0Mzg3ZGUyMDUxMWNkNDgzYTIwZDIyOGQ5OTI4ZTU0YjNlZTBlMDgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc3RhY2toYWNrdGFza3MiLCJhdWQiOiJzdGFja2hhY2t0YXNrcyIsImF1dGhfdGltZSI6MTU5MTUyMzc0MywidXNlcl9pZCI6IkhPTlM0eDU4am1neW5zVFpsVE1GRXB5RUw0RTMiLCJzdWIiOiJIT05TNHg1OGptZ3luc1RabFRNRkVweUVMNEUzIiwiaWF0IjoxNTkxNTUwMTM5LCJleHAiOjE1OTE1NTM3MzksImVtYWlsIjoiczNzYW5naHZpQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJzM3NhbmdodmlAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.GAMEuj8IJZw7T_5KIAS2qDERIr7FJw3KclRWExK5uhR4QAiaoJ2k9_XrDo3E4Gxm6QFwfnCltbUFBpUcmkUIpfGcBSa9gpeVZRoY86iKiPdViBH6mfnPzGgwWlJNjyxtYWLxwSLvog9VRsdqo-ifZdW4-0YiGREVXuO4uIRasHp75d0OYZ6vOePySLjsqPLwgNHsi6XeoOS5O401PcvhWS5IEJ9HsYwu_Dz2FhQ6gBYMQ5H5nivQMalMTDJthiA9HU-DKTZxozTWXcTCjqwPaIJRXJdb_g_JeygPX2nNLZvt25SH0eCemVhsI2LhG3GOHvgs04nlgQGKpJo6aSaL1w";
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
