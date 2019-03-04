var express = require("express")
var bodyParser = require("body-parser")
var request = require("superagent")
 
 const app = express()
 app.set('port', process.env.PORT || 5000)
 app.use(bodyParser.json())
 
<<<<<<< HEAD
 const config = { url: 'https://d0d8fe3c.ngrok.io', connectorId: 'fa14e3cd-60ff-41e3-8977-28ebe010f502' }
=======
 const config = { url: 'http://83.82.200.228:2424', connectorId: 'fa14e3cd-60ff-41e3-8977-28ebe010f502' }
>>>>>>> 6168d235ed35b2b580305d5da69d5bd2f8869630
 
   /* Get the request from the connector */
 
 app.post('/', (req, res) => {
   const conversationId = req.body.message.conversation
   const messages = [{
     type: 'text',
     content: 'my first message',
   }]
 
   /* Send the message back to the connector */
   request.post(`${config.url}/connectors/${config.connectorId}/conversations/${conversationId}/messages`)
     .send({ messages, senderId: req.body.senderId })
     .end((err, res) => {
       if (err) {
         console.log(err)
       } else {
         console.log(res)
       }
     })
 })
 
 app.listen(app.get('port'), () => {
   console.log('Our bot is running on port', app.get('port'))
 })