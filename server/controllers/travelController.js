const Travel = require("../modules/Travel.model");

// Method: GET
// Descr: GET all travels books
const getAllTravels = async (req, res) => {
  try {
    const travels = await Travel.find();
    res.status(200).json({
      message: "success",
      travels: travels.reverse(),
    });
  } catch (err) {
    res.send(err);
  }
};

// Method: GET
// Descr: GET one travel book
const getTravelById = async (req, res) => {
  try {
    const travel = await Travel.findById(req.params.id);
    if (!travel) {
      return res.status(404).json({
        message: "Not found",
      });
    }
    return res.status(200).json({
      message: "success",
      travel,
    });
  } catch (err) {
    res.send(err);
  }
};

// Method: POST
// Descr: Add new travel book
const addTravelBook = async (req, res) => {
  try {
    const { title, image, descr } = req.body;
    const newTravel = await Travel.create({
      title,
      image,
      descr,
    });
    res.status(201).json({
      message: "success",
      newTravel,
    });
  } catch (err) {
    res.send(err);
  }
};

// Method: PUT
// Descr: Edit travel book by its ID
const updateTravelBook = async (req, res) => {
  try {
    const { title, image, descr } = req.body;
    const updatedTravel = await Travel.findByIdAndUpdate(req.params.id, {
      title,
      image,
      descr,
    });
    res.status(200).json({
      message: "success",
      updatedTravel,
    });
  } catch (err) {
    res.send(err);
  }
};

// Method: DELETE
// Descr: Remove travel book by ID
const removTravelBook = async (req, res) => {
  try {
    const updatedTravel = await Travel.findByIdAndRemove(req.params.id);
    res.status(200).json({
      message: "delete",
    });
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getAllTravels,
  getTravelById,
  addTravelBook,
  updateTravelBook,
  removTravelBook,
};
