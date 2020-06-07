const { Router } = require('express');
const priceGetter = require('../getSaleItems');

module.exports = Router()
  .get('/:id', (req, res, next) => {
    const { id } = req.params;

    priceGetter(id)
      .then((prices) => res.send(prices))
      .catch(next);
  });
