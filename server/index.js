var express = require('express'),
    path = require('path'),
    fs = require('fs');

var app = express();

var logger = require('./logger');
//app.use(logger);

var staticRoot = __dirname + '/';

app.set('port', (process.env.PORT || 3000));

app.use(express.static(staticRoot));

/**
 * Provide backend api service.
 */
var kubeApi = require('./router.api');
app.use('/api', kubeApi);

/**
 * Load the single page index.html.
 */
app.get('/', function(request, response) {
  console.log('homepage');
  response.sendFile(staticRoot + 'index.html');
})

app.listen(app.get('port'), function() {
    console.log('app running on port', app.get('port'));
});