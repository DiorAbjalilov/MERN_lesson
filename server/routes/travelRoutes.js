const { Router } = require("express");
const router = Router();
const {
  getAllTravels,
  getTravelById,
  addTravelBook,
} = require("../controllers/travelController");

// GET all travels books
router.get("/", getAllTravels);
// GET one travel book
router.get("/:id", getTravelById);
// POST add new travel book
router.post("/add", addTravelBook);

module.exports = router;
