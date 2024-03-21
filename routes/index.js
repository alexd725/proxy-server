const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/getWindsData', async (req, res, next) => {
  const {lat, lon} = req.query;
  try {
    const windsData = await axios.get(`https://markschulze.net/winds/winds.php?lat=${lat}&lon=${lon}&hourOffset=0&referrer=JL12207`);
    res.status(200).json(windsData.data)
  } catch (error) {
    next(error)
  }
})

module.exports = router
