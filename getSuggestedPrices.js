const superagent = require('superagent');
const Throttle = require('superagent-throttle');
require('superagent-retry-delay')(superagent);

const throttle = new Throttle({
  active: true,
  rate: 25,
  ratePer: 60000,
});

const getSuggestedPrices = async (releaseID) => { // eslint-disable-line
  try {
    const response = await superagent
      .get(`https://api.discogs.com/marketplace/price_suggestions/${releaseID}`)
      .set('Authorization', 'Discogs token=ghLhhhMxnIqirLVgPRpbwjifYkcuYfkkNERUlDWl')
      .set('user-agent', '1234')
      .use(throttle.plugin)
      .retry(3, [1000, 3000, 10000], [401, 404]);
    return response.body;
  } catch (error) {
    // eslint-disable-next-line
    console.log(error);
  }
};
module.exports = getSuggestedPrices;
