const express = require("express");
const {
  getAllNews,
  getBusinessNews,
  getEntertainmentNews,
  getGeneralNews,
  getHealthNews,
  getScienceNews,
  getSportsNews,
  getTechnologyNews,
  searchNews,
} = require("../controller/newsController");

const router = express.Router();

router.get("/", getAllNews);
router.get("/business", getBusinessNews);
router.get("/entertainment", getEntertainmentNews);
router.get("/general", getGeneralNews);
router.get("/health", getHealthNews);
router.get("/science", getScienceNews);
router.get("/sports", getSportsNews);
router.get("/technology", getTechnologyNews);
router.get("/search/:query", searchNews);
module.exports = router;
