const router = require("express").Router();
const userCtrl = require("../controllers/userCtrl");

router.get("/", userCtrl.home);

module.exports = router;