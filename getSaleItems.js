const marketplace = require('discogs-marketplace-js');

function priceGetter(id) {
  const searchParameters = {
    id,
    type: 'release',
    pagination: {
      page: 1,
      per_page: 250,
    },
  };

  marketplace.search(searchParameters, (result) => result);
}
module.exports = priceGetter;
