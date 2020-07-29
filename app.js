const express = require('express');
const router = require('./routes/whoamiRoutes');
const cors = require('cors');

const app = express();

app.use('/api/whoami', cors(), router);

const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
  console.log("App listening on port " + port);
});
