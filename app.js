var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');


var mpage = require('./routes/mainpage');
var clientepage = require('./routes/cliente');
var app = express();

//conversation

var ConversationV1 = require('watson-developer-cloud/conversation/v1');

var conversation = new ConversationV1({
    version: '2018-02-16',
    username: '1bb52f98-48b6-44c2-b959-85b92d090ce2',
    password: 'jtMHHThIG7bH',
    url: 'https://gateway.watsonplatform.net/assistant/api'
  });




app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/mainpage', express.static(path.join(__dirname, 'dist')));
app.use('/cliente', express.static(path.join(__dirname, 'dist')));
app.use('/', express.static(path.join(__dirname, 'dist')));
app.use('/mpage', mpage);
app.use('/clientep', clientepage);


app.post('/', function(req, res, next) {
  conversation.message({
    workspace_id: 'bd51fadb-ad63-48a2-84ba-a916babffcf3',
    input: {'text': 'hola'} //esto es lo del form
  },  function(err, response) {
    if (err)
      console.log('error:', err);
    else {
      console.log(JSON.stringify(response, null, 2));
      //aux = response;
    }
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});



module.exports = app;
