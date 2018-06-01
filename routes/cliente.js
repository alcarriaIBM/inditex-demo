var express = require('express');
var router = express.Router();
var Book = require('../models/Book.js');
var cloudant = require('cloudant');
var ConversationV1 = require('watson-developer-cloud/conversation/v1');

var conversation = new ConversationV1({
    version: '2018-02-16',
    username: '1bb52f98-48b6-44c2-b959-85b92d090ce2',
    password: 'jtMHHThIG7bH',
    url: 'https://gateway.watsonplatform.net/assistant/api'
  });

  var contextResponse = {};

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
/*Send conversation*/

router.get('/', function(req, res, next) {
});

router.post('/', function(req, res, next) {
  conversation.message({
    workspace_id: 'bd51fadb-ad63-48a2-84ba-a916babffcf3',
    input: {'text': JSON.stringify(req.body.input, null, 2)}, //esto es lo del form
    context:  contextResponse //esto es lo del context para seguir la conversacion
  },  function(err, response) {
    if (err)
      console.log('error:', err);
    else {
      console.log(JSON.stringify(response, null, 2));
      //aux = response
      contextResponse = response.context
      res.json(response);
    }
  });
});


module.exports = router;
