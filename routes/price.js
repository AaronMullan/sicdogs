const { Router } = require('express');
const getSuggestedPrices = require('../getSuggestedPrices.js');

module.exports = Router()
  .get('/:id', (req, res, next) => {
    const { id } = req.params;

    getSuggestedPrices(id)
      .then((prices) => res.send(prices))
      .catch(next);
  });
