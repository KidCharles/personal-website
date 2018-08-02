const express = require('express'),
      bodyParser = require('body-parser');

const app = express();


app.use( express.static( `${__dirname}/../build`) );



app.listen(3120, () => {
    console.log('Listening on:', 3120)
})