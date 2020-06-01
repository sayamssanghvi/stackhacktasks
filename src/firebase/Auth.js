const admin = require("firebase-admin");

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
