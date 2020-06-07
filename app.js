const express = require('express'); //eslint-disable-line
const app = express();
const port = 3002;

app.use(express.json());
app.use(require('cors')({
  origin: true,
  credentials: true,
}));

app.get('/', (req, res) => res.send('Hello Whirled'));
app.use('/api/price', require('./routes/price.js'));
app.use('/api/sales', require('./routes/sales.js'));

app.listen(port, () => console.log(`pricescraper running on port ${port}`)); //eslint-disable-line
