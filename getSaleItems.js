function priceGetter(id) {
  const marketplace = require('discogs-marketplace-js');

  const searchParameters = {
    id,
    type: 'release',
    pagination: {
      page: 1,
      per_page: 250,
    },
  };

  marketplace.search(searchParameters, (result) => {
    console.log(result);
  });
}
module.exports = priceGetter;
