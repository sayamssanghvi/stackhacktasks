const admin = require("firebase-admin");
const authToken =
  "eyJhbGciOiJSUzI1NiIsImtpZCI6IjgyMmM1NDk4YTcwYjc0MjQ5NzI2ZDhmYjYxODlkZWI3NGMzNWM4MGEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vc3RhY2toYWNrdGFza3MiLCJhdWQiOiJzdGFja2hhY2t0YXNrcyIsImF1dGhfdGltZSI6MTU5MDkzMTM3MSwidXNlcl9pZCI6IkhPTlM0eDU4am1neW5zVFpsVE1GRXB5RUw0RTMiLCJzdWIiOiJIT05TNHg1OGptZ3luc1RabFRNRkVweUVMNEUzIiwiaWF0IjoxNTkwOTQ3NDQzLCJleHAiOjE1OTA5NTEwNDMsImVtYWlsIjoiczNzYW5naHZpQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJzM3NhbmdodmlAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.LsgWaY5e3o88iBXnKsSQVNWRWqRk3mfTPvUrAZOIaUJfsIP4x1aMHz09IfHCgJP4XuXSqFYvkdOxRhjHIM-d4eCIukHT00ZV2IrE81qi-pvtNWTWXG-_sVeiUWprchkeoyznJImzoXAWLtYqv1-4bdDkpA-iUVui8RFid75rB0xE-uP9hTeM_nE1OXU0BVBFnto4uJM-0DAExQzVHQ7YCIJhLr_B-AkLKdyeuah4wDK2e9OHH64mYtHFlFV3jSVDPn3PV3XqWz5be-2wPJ58gWKOg0DGhPXC3iyF0c560kdMm3pe8nvrFiIswyl6Qn-JlRbt7OYYthlJ8N_e-JpSaA";

var Auth = async (req, res, next) => {
    try {
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
