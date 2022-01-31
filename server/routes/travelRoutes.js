const { Router } = require("express");
const router = Router();
const {
  getAllTravels,
  getTravelById,
  addTravelBook,
  updateTravelBook,
  removTravelBook,
} = require("../controllers/travelController");

router.get("/", getAllTravels);
router.post("/add", addTravelBook);
router.get("/:id", getTravelById);
router.put("/:id", updateTravelBook);
router.delete("/:id", removTravelBook);

module.exports = router;
