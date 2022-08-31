const axios = require("axios");

exports.getAllNews = async (req, res) => {
  try {
    const response = await axios({
      url: process.env.BASE_URL + process.env.API_KEY,
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getBusinessNews = async (req, res) => {
  try {
    const response = await axios({
      url: process.env.BUSINESS_URL + process.env.API_KEY,
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getEntertainmentNews = async (req, res) => {
  try {
    const response = await axios({
      url: process.env.ENTERTAINMENT_URL + process.env.API_KEY,
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getGeneralNews = async (req, res) => {
  try {
    const response = await axios({
      url: process.env.GENERAL_URL + process.env.API_KEY,
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getHealthNews = async (req, res) => {
  try {
    const response = await axios({
      url: process.env.HEALTH_URL + process.env.API_KEY,
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getScienceNews = async (req, res) => {
  try {
    const response = await axios({
      url: process.env.SCIENCE_URL + process.env.API_KEY,
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getSportsNews = async (req, res) => {
  try {
    const response = await axios({
      url: process.env.SPORTS_URL + process.env.API_KEY,
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTechnologyNews = async (req, res) => {
  try {
    const response = await axios({
      url: process.env.TECHNOLOGY_URL + process.env.API_KEY,
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.searchNews = async (req, res) => {
  const { query } = req.params;
  try {
    const response = await axios({
      url: process.env.SEARCH_URL + query + "&apiKey=" + process.env.API_KEY,
    });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
