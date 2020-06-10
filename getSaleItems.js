const marketplace = require('discogs-marketplace-js');

async function priceGetter(id) {
  const searchParameters = {
    id,
    type: 'release',
    pagination: {
      page: 1,
      per_page: 250,
    },
  };

  function scraper() {
    marketplace.search(searchParameters, (result) => result);
  }
  await scraper(id);
  .then return ['haha', haha];
}

module.exports = priceGetter;
