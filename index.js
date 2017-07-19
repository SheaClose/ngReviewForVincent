const   express = require('express')
 				, cors = require('cors')
 				, bodyParser = require('body-parser')
 				, port = 3000
 				, app = express()
//				, serverConfig = require("./serverConfig")
//				, session = require("express-session")

// app.use(session(serverConfig.session) );
app.use(cors())
app.use(bodyParser.json())
app.use("/", express.static(__dirname));

app.post('/api/vincent', (req, res)=>{
  return res.status(200).json({message: "hows this?", body: req.body})
})


app.listen(port, function() {
  console.log('Server listening on port', port)
})
