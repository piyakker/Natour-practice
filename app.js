const express = require('express');
const indexRouter = require('./routes/index');

const app = express();

app.use(express.json());

app.use('/api/v1', indexRouter)

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
