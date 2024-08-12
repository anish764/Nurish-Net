const router = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");
const testController = require("../controllers/test.controller");

router.get("/makeIt", authMiddleware.protectedRoute, testController.testRoute);

module.exports = router;
