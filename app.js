const express = require('express'); //eslint-disable-line
const app = express();
const port = 3001;

app.get('/', (req, res) => res.send('Hello World'));

app.listen(port, () => console.log(`pricescraper running on port ${port}`));

