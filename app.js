const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 8000;

app.use(morgan('dev'));
app.use(express.static(`${__dirname}`));

app.listen(port, () => console.log(`Express is listening on port ${port}`));
