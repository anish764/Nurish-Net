const router = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");
const dietController = require("../controllers/diet.controller");

router.post("/add-diet", authMiddleware.protectedRoute, dietController.addDiet);
router.post(
  "/get-diets",
  authMiddleware.protectedRoute,
  dietController.getDiets
);
router.delete(
  "/delete-diet",
  authMiddleware.protectedRoute,
  dietController.deleteDiet
);

module.exports = router;
