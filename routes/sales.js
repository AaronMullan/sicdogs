const { Router } = require('express');
// const priceGetter = require('../getSaleItems');
const marketplace = require('discogs-marketplace-js');


module.exports = Router()
  .get('/:id', (req, res, next) => {
    const { id } = req.params;
    const searchParameters = {
      id,
      type: 'release',
      pagination: {
        page: 1,
        per_page: 250,
      },
    };
    marketplace.search(searchParameters, (result) => {
      res.send(result);
    });
  });
